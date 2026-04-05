console.log('today im learning arrow function')

function add(number1, number2){
    return number1 + number2
}
const result = add(23, 32)
// console.log(result)

//Simple arrow function example 

const addition = (num1, num2) => num1 + num2
const sumAdd = addition(12,12)
// console.log(sumAdd)

//Multiline arrow function 

const multiline = (number1, number2) => {
    const multiply = number1 *2
    const addition = number2 + 34
    const result = multiply + addition
    return result
}
const final = multiline(12, 50)
// console.log(final)

