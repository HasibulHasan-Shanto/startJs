console.log('today im learning array looping')

const fruits = ['apple', 'banana', 'mango', 'orange'];

for(let i = 0; i < fruits.length; i++){
    // console.log(fruits[i])
}

const numbers = [10, 20, 30, 40, 50];

for(let i = 0; i < numbers.length; i++){
    // console.log(numbers[i])
}

const colors = ['red', 'green', 'blue'];

for (const element of colors) {
    // console.log(element)
}

const marks = [80, 75, 90];

for(let i = 0; i < marks.length; i++){
    // console.log(i, marks[i])
}

const cities = ['Dhaka', 'Chittagong', 'Sylhet'];
for (const element of cities) {
    // console.log(element)
}



const numberses = [12, 5, 8, 20, 7, 30];

for (const number of numberses) {
    if(number % 2 === 0){
        // console.log(number)
    }
}

const number = [10, 20, 30, 40];
let sum = 0
for (const element of number) {
    // console.log(element)
    sum = sum + element
}
// console.log(sum)

const numb = [45, 12, 78, 34, 89, 23];

let max = numb[0]
for (const element of numb) {
    // console.log(element)
    if(element > max){
        max = element
    }

}
// console.log(max)

const fruit = ['apple', 'banana', 'mango'];


for (const element of fruit) {
    // console.log(element.length)
}


const num = [5, 10, 15];

for (const element of num) {
    // console.log(element * 2)
}

const number1 = [12, 5, 8, 20, 7, 30];

let count = 0
for (const element of number1) {
    // console.log(element)
    if(element % 2 === 0){
        count++
    }
}

const number2 = [12, 5, 8, 20, 7, 30];

let sum1 = 0
for (const element of number2) {
    // console.log(element)
    if(element % 2 !== 0){
        sum1 = sum1 + element
    }
}
// console.log(sum1)

const number3 = [45, 12, 78, 34, 89, 23];

let maxe = number3[0]
let max2 = number3[0]
for (const element of number3) {
    // console.log(element)
    if(element > maxe){
        max2 = maxe
        maxe = element
    }
    else if(element > max2 && element !== maxe){
        max2 = element
    }
}
console.log(maxe)
console.log(max2)



