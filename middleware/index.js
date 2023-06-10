const express = require('express');
const app = express();
const router = express.Router();
const EventEmitter = require('events');
const { Router } = require('express');

// Define a middleware function
const myMiddleware = (req, res, next) => {
    console.log('Middleware function called', req.params.id);
    req.params.id = 3
    // if (1 == 1)  {
    //     return res.send('Something wrong!');

    // };
    next();
    // setTimeout(function () {
    // }, 10000)
};

// Add the middleware function to the application's stack
router.use(myMiddleware);
// Create a new event emitter
const myEmitter = new EventEmitter();

// Define a route handler function
app.get('/protected', (req, res) => {
    console.log('Protected route called', req.params.id);

    handleLargeData()
        .then(function () {
            res.send('Hello, Protected!');

        }).catch(function (err) {
            res.send(err);
        })
});

// function handleLargeData() {
//     return new Promise((resolve, reject) => {
//         let startDate = new Date().getTime();
//         let endDate = startDate;
//         const loop = () => {
//             while (endDate < startDate + 10000) {
//                 endDate = new Date().getTime();
//             }
//             console.log('Sync operation completed')
//             resolve();
//         }
//         setTimeout(loop, 0);
//     })
// }

function handleLargeData() {
    return new Promise((resolve, reject) => {
        let startDate = new Date().getTime();
        let endDate = startDate;

        const loop = () => {
            while (endDate < startDate + 5000) {
                endDate = new Date().getTime();
            }
            console.log('Sync operation completed', endDate)
            resolve();
        }

        setTimeout(loop, 0);
    })
}

// Register a listener function for the 'hello' event
// myEmitter.on('n', (name) => {
//     console.log(`Hello, ${name}!`);
// });

// myEmitter.on('myEvent', (data) => {
//     setTimeout(function () {
//         console.log(data);
//     }, 5000)
// });

// console.log('Statement A');
// myEmitter.emit('myEvent', 'Statement B');
// console.log("Statement C");

// myEmitter.on('example', async () => {
//     console.log('Starting async operation')
//     await new Promise(resolve => setTimeout(resolve, 1000))
//     console.log('Async operation completed')
// })

// console.log('Before emitting event')
// myEmitter.emit('example')
// console.log('After emitting event')

// myEmitter.on('example', () => {
//     console.log('Starting sync operation')
//     // Perform some heavy computation
//     let startDate = new Date().getTime();
//     let endDate = startDate;

//     while (endDate < startDate + 10000) {
//         endDate = new Date().getTime();
//     }
//     console.log('Sync operation completed')
// })

// console.log('Before emitting event')
// myEmitter.emit('example')
// console.log('After emitting event')


app.get('/app/:id', (req, res) => {
    console.log("req.params.id", req.params.id)
    return res.send('Hello, Appnn!' + req.params.id);
});






// Emit the 'hello' event with a parameter
// myEmitter.emit('hello', 'John');

// Start the server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});