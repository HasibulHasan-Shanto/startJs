console.log('today im learning function parameter')
// parameter holo function er vitore deya veriabl jeta diye amra bahir theke value pathai

function sum(number1, number2){
    const sum = number1 + number2
    // console.log(sum)
}
const sumIs = sum(23, 34)
// console.log(sumIs)

function userInfo(name, age, country){
    // const names = console.log(name)
    // console.log(names)
    // const ages = console.log(age)
    // console.log(ages)
    // const countrys = console.log(country)
    // console.log(countrys)
}
const output = userInfo('hasibul hasan shanto', 21, 'Bangladesh')
// console.log(output)

function rectangleArea(length, width){
    const area = length * width
    // console.log(area)
}
const area = rectangleArea(12,12)
// console.log(area)

//Task 

function multiply(num1, num2){
    const multi = num1 * num2
    return multi
}
const multipl = multiply(20, 20)
console.log(multipl)

function average(num1, num2, num3){
    const aver = (num1 + num2 + num3) / 3
    return aver
}
const averag = average(3,4,5)
console.log(averag)


function isEven(number){
    if(number % 2 === 0){
        return 'Even number'
    }
    else{
        return 'Odd number'
    }
}
const num = isEven(22)
console.log(num)


function fullName(firstName, lastName){
    const fullName = firstName +' '+ lastName
    return fullName
}
const name = fullName('hasibul hasan', 'shanto')
console.log(name)


function largestNumber(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1
    }else if(num2 > num1 && num2 > num3){
        return num2
    }else{
        return num3
    }
}
const biggest = largestNumber(34, 45,1)
console.log(biggest)