const { parentPort } = require('worker_threads');

parentPort.on('message', (msg) => {
    console.log("msg", msg)
    // if (msg === 'start') {
        handleLargeData()
            .then(function () {
                parentPort.postMessage('completed');
            }).catch(function (err) {
                parentPort.postMessage(err);
            })
    // }
});

function handleLargeData() {
    return new Promise((resolve, reject) => {
        let startDate = new Date().getTime();
        let endDate = startDate;

        while (endDate < startDate + 10000) {
            endDate = new Date().getTime();
        }
        console.log('Sync operation completed')
        resolve();
    })
}
