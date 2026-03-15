console.log('today im practice function')

//Task-1
function multiply(num1, num2,num3,num4){
    const result = num1 * num2 * num3 * num4
    return result
}
const number = multiply(2,2,2,2)
// console.log(number)
//Task-2

function odd(numbs){
    if(numbs % 2 !== 0){
        return numbs * 2
    }else{
        return numbs / 2
    }
}
const numbers = odd(23)
// console.log(numbers)
//Task-3

function makeAvg(numbs){
    let sum = 0
    for (const element of numbs) {
        // console.log(element)
        sum += element
    }
    const avar = sum / numbs.length
    return avar
}
const arr = [12,12,12,12]
const avarage = makeAvg(arr)
console.log(avarage)
//Task-1
//Task-1