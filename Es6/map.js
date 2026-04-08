console.log('today im learning map method')

const numbers = [5, 10, 15];
const result = numbers.map( num => num + 5)
console.log(result)

const names = ["hasib", "shanto"];
const nam = names.map(name => name.toLocaleUpperCase())
console.log(nam)

const products = [
    { name: "Phone", price: 10000 },
    { name: "Laptop", price: 50000 }
];

const prod = products.map( product => {
    console.log(`name: ${product.name}`)
})

const numbers1 = [5, 12, 8, 20, 3];

const result1 = numbers1.filter(num => num > 10)
console.log(result1)

const users = [
    { name: "hasib", age: 17 },
    { name: "shanto", age: 22 },
    { name: "rahim", age: 15 }
];
const userName = users.filter( user => user.age > 18 ).map(user => user.name.toLocaleUpperCase())
console.log(userName)