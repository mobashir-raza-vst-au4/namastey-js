const express = require('express');
const app = express();
const { Worker, isMainThread } = require('worker_threads');

app.get('/protected', (req, res) => {
    console.log('Protected route called', req.params.id);

    // create a new worker thread to handle the long-running task
    const worker = new Worker('./worker.js');
    console.log(worker.threadId, isMainThread)
    // send message to the worker thread
    worker.postMessage('start');

    // listen for messages from the worker thread
    worker.on('message', (result) => {
        res.send('Hello, Protected! ' + result);
    });

    // handle errors from the worker thread
    worker.on('error', (err) => {
        res.send(err);
    });
});

app.get('/app', (req, res) => {
    res.send('Hello, App!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});