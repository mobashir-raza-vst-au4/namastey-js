// function x() {
//     for (var i = 1; i <= 5; i++) {
//         function y(i) {
//             setTimeout(function () {
//                 console.log(i);
//             }, i * 1000)
//         }
//         y(i)
//     }
// }

// x()

//garbage collector
function x() {
    var a = 10;
    var b = 20;
    return function y() {
        console.log(a)
    }
}

var close = x();
close()