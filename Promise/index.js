let cart = [];

let promise = createOrder(cart);

promise.then(function (data) {
    console.log(data);
    return data;
}).catch(function (error) {
    console.error(error)
})
    .then(function (data) {
        console.log("re", data)
        return proceedToPayment(data);
    }).then(function (paymentInfo) {
        console.log(paymentInfo)
    })
    .catch(function (error) {
        console.error("generic catch", error)
    })

function validateCart(cart) {
    return cart.length ? true : false;
}

function createOrder(cart) {
    let pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            reject("Cart is not valid")
        }

        resolve("1234")
    })

    return pr;
}

function proceedToPayment(orderId) {
    let pr = new Promise(function (resolve, reject) {

        setTimeout(function () {
            resolve("Payment Successful")
        }, 2000)

    })
    return pr;
}
