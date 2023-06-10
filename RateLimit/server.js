const express = require('express');
const app = express();
const port = 5003;

const userRequestsCount = new Map();
const rateLimit = (req, res, next) => {
    console.log(userRequestsCount, req.params.id)
    const userId = req.params.id;

    if (!userRequestsCount.has(userId)) {
        userRequestsCount.set(userId, {
            count: 0,
            time: Date.now() + 60 * 1000
        })
    }
    const user = userRequestsCount.get(userId);

    if (Date.now() > user.time) {
        userRequestsCount.set(userId, {
            count: 0,
            time: Date.now() + 60 * 1000
        })
    }

    if (user.count >= 10) {
        let remainingTime = Math.ceil((user.time - Date.now()) / 1000)
        return res.status(429).json({
            error: 'Too many requests, Try after ' + remainingTime + ' seconds.'
        })
    }
    user.count++;
    next();
}

//middleware
// app.use(rateLimit);

app.get('/get-data/:id', rateLimit, function(req, res) {
    return res.status(200).json({
        message: 'Hello World'
    })
})

app.listen(port, function() {
    console.log('Server is running on port ' + port);
})