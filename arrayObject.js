console.log('today im learning arrayObject')

const users = [
    { name: "Shanto", age: 22 },
    { name: "Rahim", age: 20 },
    { name: "Karim", age: 21 }
];

for (const user of users) {
    // console.log(user.name)
    // console.log(user.age)
}

const students = [
    { name: "John", age: 18 },
    { name: "Mike", age: 19 }
];

const student = students[0].name
// console.log(student)

const products = [
    { name: "Book", price: 100 },
    { name: "Pen", price: 20 },
    { name: "Bag", price: 500 }
];

for (const price of products) {
    // console.log(price.price)
}


const productss = [
    { name: "Book", price: 100 },
    { name: "Pen", price: 20 },
    { name: "Bag", price: 500 }
];

let total = 0
for (const product of productss) {
    // console.log(product.price)
    const totalPrice = product.price
    total = total + totalPrice
}
// console.log(total)


const products1 = [
    { name: "Book", price: 100 },
    { name: "Pen", price: 20 },
    { name: "Bag", price: 500 },
    { name: "Laptop", price: 60000 }
];

let totals = 0
let expensiveProduct = products1[0].price
let expensiveProductName = products1[0].name
for (const product of products1) {
    const productPrice = product.price
    // console.log(productPrice)
    if(productPrice > 100){
        const productName = product.name
        // console.log(productName)
    }
    //Challenge2
     if(productPrice < 100){
        totals += product.price
    }
     if(product.price > expensiveProduct){
        expensiveProduct = product.price
        expensiveProductName = product.name
    }
}
// console.log(totals)
// console.log(expensiveProductName)


const products2 = [
    { name: "Book", price: 100 },
    { name: "Pen", price: 20 },
    { name: "Bag", price: 500 },
    { name: "Laptop", price: 60000 },
    { name: "Phone", price: 30000 }
];

let firstExpensiveProductPrice = - Infinity 
let secondExpensiveProductPrice = - Infinity
let firstExpensiveProductName = ''
let secondExpensiveProductName = ''
for (const product of products2) {
    if(product.price > firstExpensiveProductPrice){
        secondExpensiveProductPrice = firstExpensiveProductPrice
        firstExpensiveProductPrice = product.price
    }
    else if(product.price > secondExpensiveProductPrice){
        secondExpensiveProductPrice = product.price
        secondExpensiveProductName = product.name
    }
}
console.log(firstExpensiveProductPrice)
console.log(secondExpensiveProductName)
