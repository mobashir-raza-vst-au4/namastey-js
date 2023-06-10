console.log("working..")
let count = 0;
const getData = () => {
    console.log("get data calling", count++)
}

const doSomeMagic = (fn, delay) => {
    let timer;
    return function () {
        console.log("doing magic", this, arguments)
        // let context = this;
        // let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn()
        }, delay)
    }
}
const betterFunction = doSomeMagic(getData, 300)