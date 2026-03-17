console.log('today im practice function')

//Task-1
function multiply(num1, num2,num3,num4){
    const result = num1 * num2 * num3 * num4
    // return result
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
// console.log(avarage)

//Tast1

function celsiusToFahrenheit(celsius){
    const fahrenheit = (celsius * 9 / 5 )+ 32
    return fahrenheit
}
const cels = celsiusToFahrenheit(23)
// console.log(cels)

function fahrenheit(fahren){
    const celsius = (fahren - 32) * 5 / 9
    return celsius
}
const result = fahrenheit(155)
// console.log(result)

//Task2

function repeatedNumber(number, find){
    let count = 0
    for (const element of number) {
        if(element === find){
            count++
        }
    }
}
const numbers1 = [5,6,11,12,98, 5]
const repeat = repeatedNumber(numbers1, 5)
console.log(repeat)

//Task3

function vowel(str){
    let vowels = 'aeiou'
    let count = 0
    for (const element of str.toLowerCase()) {
        if(vowels.includes(element)){
            count++
        }
    }
    return count
}
const string = 'Programming'
const output = vowel(string) 
// console.log(output)

//Task4

function longestWord(word){
    const words = word.split(' ')
    let longw = ''
    for (const element of words) {
        if(element.length > longw.length){
            longw = element
        }
    }
    return longw
}
const input = "I am learning Programming to become a programmer";
const longWord = longestWord(input)
// console.log(longWord)

//Task5

function swapNumbers(a, b){
    [a,b] = [b, a]
    return [a, b]
}
const swap = swapNumbers(23, 32)
// console.log(swap)

//Task 6

function countEven(numbers){
    let count = 0
    let sum = 0
    for (const element of numbers) {
        if(element % 2 === 0){
            count++
            sum += element
        }
    }
    return count
}
const even = [3,23, 45, 45, 34, 42, 88]
const evenNumber = countEven(even)
// console.log(evenNumber)

//Task 7

function findLargest(numbers){
    let large = - Infinity
    for (const element of numbers) {
        if(element > large){
            large = element
        }
    }
    return large
}
const largeNum = [3,23, 45, 45, 34, 42, 88]
const largestNumber = findLargest(largeNum)
console.log(largestNumber)

//Task 8

function reverseString(str){
     return str.split('').reverse().join('');
}
const strings = 'hello'
const reverse = reverseString(strings)
console.log(reverse)