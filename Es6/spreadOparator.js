console.log('today im learning spread operator ')
// spread operator use kora normaly copy korar time, marge korar time, safely update korar time, and function e array use korte caile Example

let nums = [10, 20, 30];
const newArray = [355, 345, ...nums]
// console.log(newArray)

let a = [1, 2];
let b = [3, 4];
const marge = [...a, ...b]
// console.log(marge)

let numbers = [15, 25, 5, 40];
const max = Math.max(...numbers)
const min = Math.min(...numbers)
const results = `Max number is ${max} and Min number is ${min}`
// console.log(results)

let arr = [1, 2, 3];
const anotherArray = [...arr]
anotherArray.push(4)
// console.log(anotherArray)

let fruits = ["Apple", "Banana"];
let newFruits = ["Mango", "Orange"];
const allFruits = [...fruits, ...newFruits]
console.log(allFruits)