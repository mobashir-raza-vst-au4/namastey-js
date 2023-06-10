
let count = 0;

function throttle() {
    console.log("calling", count++)
}

// let container = document.getElementById("container")

const doSomeMagic = function (fn, limit) {
    let flag = true;

    return function () {
        if (flag) {
            fn();
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit)
        }
    }
}
const betterFunction = doSomeMagic(throttle, 500)

window.addEventListener("resize", betterFunction)
