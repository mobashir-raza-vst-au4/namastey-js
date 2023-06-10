let name = {
    firstname: 'John',
    lastname: 'Doe',
}


let printFullName = function (hometown, state, country) {
    console.log(this.firstname + ' ' + this.lastname + hometown + ' ' + state + ' ' + country)
}

Function.prototype.myBind = function (...args) {
    // `this` -> printFullName
    let fn = this;
    const [a, ...b] = args;
    console.log(a, b)
    return function (...args2) {
        console.log(args2)
        fn.apply(a, [...b, ...args2])
    }
}

let printMyName2 = printFullName.myBind(name, "Kolkata", "West Bengal");
printMyName2("India");