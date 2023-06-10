const api1Promise = fetch('https://api.github.com/users/vanpelt');
const api2Promise = fetch('https://df.github.com/ff/defunk.t');
const api3Promise = fetch('https://api.github.com/users/wycats');


Promise.all([api1Promise, api2Promise, api3Promise])
  .then(function(results) {
      console.log(results)
    // handle the successful results from all API calls
    // let jsonPromises = results.map(function(result) {
    //     if (result.status == 200) {
    //         console.log('Successful API call: ' + result);
    //         return result.json()
    //     }
    // })
    // console.log("jsonpromise", jsonPromises)
    // return Promise.all(results);
    return results;
    // return jsonPromises;
  })
//   .then(function(data) {
//     // handle the successful API calls
//     console.log(data)
//   })
  .catch(function(error) {
      console.log(error.message);
    // handle the error from the failed API call
  });


