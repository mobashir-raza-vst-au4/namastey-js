// Define a function that logs a message to the console
function logMessage(message, cb) {
    console.log(message);
    cb ? cb() : '';
}

// Call setImmediate and process.nextTick to schedule callbacks
setImmediate(() => {
    logMessage('setImmediate callback');
});

process.nextTick(() => {
    logMessage('process.nextTick callback');
});

function test() {
    logMessage('testing');
}
// Log a message to the console after scheduling callbacks
logMessage('Callbacks scheduled', test);

