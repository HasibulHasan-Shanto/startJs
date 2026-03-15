console.log('today im practice simple array')

//Task1
const fruits = ['banana', 'apple', 'orange', 'pineaapple','jackfruit']
// console.log(fruits[3])
fruits[2] = 'jambura'
// console.log(fruits)

//Task2 
const touristSpot = ['singapure', 'dubai', 'australia']
touristSpot.push('Asia')
console.log(touristSpot)
touristSpot.push('malaysia')
touristSpot.push('canada')
console.log(touristSpot)
touristSpot.pop()
console.log(touristSpot)

//Task3 
const books = ['bangla', 'english', 'mathamethics', 'physics', 'javascript']

if(books.includes('javascript')){
    console.log('Yes, the javascript book is present in the array.')
}else{
    console.log('No, the javascript book is not in the array.')
}

//Task 4 
const array = ['shanto', 'sadikul']
const arr = [23,13,453,54]
const isStudent = true

if(Array.isArray(array)){
    console.log('Yes! variable is an array')
}else{
    console.log('No! variable is not an array')
}
if(Array.isArray(arr)){
    console.log('Yes! variable is an array')
}
else{
    console.log('No! variable is not an array')
}
if(Array.isArray(isStudent)){
    console.log('Yes! variable is an array')
}else{
    console.log('No! variable is not an array')
}

//Task 5

const subject = ['math', 'bangla', 'english']
const marks = [80, 90, 98]
const result = subject.concat(marks)
console.log(result)