function AdvancedShipping() {
    // this.calculate = function (weight) { return "$39.50"; };
    // this.calculate2 = function (weight) { return "$49.50"; };
    return {
        request: function () {
            return "$15.09"
        }
    }
}

let shipping =  new AdvancedShipping();

console.log(shipping)
// let res = shipping.calculate()
// let res2 = shipping.calculate2()
let res3 = shipping.request()
console.log(res3)