const express = require("express");
const axios = require("axios");
const redis = require("redis");

const app = express();
const port = process.env.PORT || 3000;

let redisClient;

(async () => {
  redisClient = redis.createClient();

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();

async function fetchApiData(id) {
  const apiResponse = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  console.log("Request sent to the API", apiResponse);
  return apiResponse.data;
}

async function cacheData(req, res, next) {
  const postId = req.params.id;
  let results;
  try {
    const cacheResults = await redisClient.get(postId); //null
    if (cacheResults) {
      results = JSON.parse(cacheResults);
      res.send({
        fromCache: true,
        data: results,
      });
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
    res.status(404);
  }
}



async function getPostData(req, res) {
  const postId = req.params.id;
  let results;

  try {
    results = await fetchApiData(postId);
    if (results.length === 0) {
      throw "API returned an empty array";
    }
    await redisClient.set(postId, JSON.stringify(results), {
      EX: 180,
      NX: true,
    });

    res.send({
      fromCache: false,
      data: results,
    });
  } catch (error) {
    console.error(error);
    res.status(404).send("Data unavailable");
  }
}

app.get("/post/:id", cacheData, getPostData);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});