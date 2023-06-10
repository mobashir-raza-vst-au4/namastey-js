// // You are tasked with building a serverless RESTful API using AWS Lambda and API Gateway for a popular use case of generating random quotes. The API should return a random quote when a GET request is sent to the API endpoint. The quote should be chosen randomly from a pre-defined list of quotes that are stored in a JavaScript array. The API should be scalable, maintainable, and extensible, and should be written in a single JavaScript file?

// function getRandomQuote(req, res) {
//     try {
//         let quotes = [
//             "Never trust a computer you can't throw out a window.",
//             "A computer once beat me at chess, but it was no match for me at kick boxing.",
//             "A computer is only as good as the data it is fed.",
//         ]
//         let quote = quotes[Math.floor(Math.random() * quotes.length)]
//         return res.status(200).send(quote)
//     } catch (error) {
//         return res.status(500).send(error.message)
//     }
// }


// // API ENDPOINT: https://get-random-quotes/


// function test(A) {
//     let n = A.length;
// // To mark the occurrence of elements
// let present = new Array(n + 1);

// console.log("present1..",present)
// for (let i = 0; i < n + 1; i++) {
// 	present[i] = false;
// }
// console.log("present2..",present)

// // Mark the occurrences
// for (let i = 0; i < n; i++) {
//     console.log(A[i], n)
//     console.log(A[i] > 0, A[i] <= n)
// 	if (A[i] > 0 && A[i] <= n) {
// 		present[A[i]] = true;
// 	}
// }
// console.log("present3..",present)

// // Find the first element which didn't
// // appear in the original array

// for (let i = 1; i <= n; i++) {
//     console.log("present after" + i,present[i])
// 	if (!present[i]) {
// 		return i;
// 	}
// }
// // If the original array was of the
// // type {1, 2, 3} in its sorted form
// // return n + 1;
// }

// let res = test([3,2]);
// console.log(res);

function typeCheck(object) {
    const obj = {};
    let defineType = {
        "bool": "boolean",
        "int": "number",
        "float": "number",
        "string": "string",
    }
    for (let key in object) {
        console.log("keyyyy",object , key, object[key])
        let a = key.split('_')[1]

        if (typeof object[key] != defineType[a]) {
            throw new TypeError(`Invalid data type for ${key}.`);
        }
        
        obj[key] = object[key];
        Object.defineProperty(obj, key, {
            get() {
                console.log("getter..", object)
                // obj = object;
                return object[key];
            },
            set(value) {
                console.log("key----",key)
                if (typeof value !== typeof object[key]) {
                    throw new TypeError(`Invalid data type for ${key}.`);
                }
                
                object[key] = value;
            },
            enumerable: true,
            configurable: true,
        });
    }
    return obj;
}

const obj = {
    age_int: 2,
    name_string: "Adam",
    // job: null,
    employed_bool: true
}

let validateObject = typeCheck(obj)
validateObject.job = "hello"
console.log(validateObject)



// let validator = {
//     set: function(obj, prop, value) {
//         console.log("ggg", obj)
//       if (prop === 'age') {
//         if (typeof value !== typeof obj[prop]) {
//           throw new TypeError('The age is not an integer');
//         }
//         if (value > 200) {
//           throw new RangeError('The age seems invalid');
//         }
//       }
  
//       // The default behavior to store the value
//       obj[prop] = value;
  
//       // Indicate success
//       // return true;
//         return obj;
//     },
  
//   get: function(obj, prop) {
//           return obj[prop] ? obj[prop] : 'property does not exist';
//       }
//   };
  
//   const person = new Proxy({name: "rahul", age: 10}, validator);
  
//   // person.age = 100;
//   console.log(person.age); // 100
//   // person.age = 'young';    // Throws an exception
//   // person.age = 300;        // Throws an exception