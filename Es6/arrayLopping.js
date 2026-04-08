console.log('today im learning array looping')

/// jokhon kono akta array ke loop and sekhan theke kono value return dorker nei tokhon amra foreach use korbo like 

const numbers = [1, 2, 3];

numbers.forEach(num => {
    // console.log(num * 2);
});

// and array ke loop korar time e condition kore sob gulo element dorker tokhon amra filter () use korbo like 

const numbers1 = [1, 2, 3, 4, 5];
const result = numbers1.filter( num1 => {
    const rest = num1 % 2 === 0 
    return rest
})
console.log(result)

// and array ke loop korar time e condition kore just first element dorker tokhon amra find () use korbo like 

const numbers2 = [1, 2, 3, 4, 5];
const find = numbers2.find( num2 => num2 > 2 && num2 < 6)
console.log(find)

const numbers3 = [2, 4, 6, 8];
const multi = numbers3.forEach( num3 => num3 * 2)
console.log(multi)

const ages = [12, 18, 20, 15, 25];
const filterAge = ages.filter( age => age >= 18)
console.log(filterAge)

const numbers4 = [5, 10, 15, 20];

const findNumber = numbers4.find( num4 => num4 > 10)
console.log(findNumber)

const products = [
    { name: "Phone", price: 10000 },
    { name: "Laptop", price: 50000 },
    { name: "Tablet", price: 15000 }
];
const prod = products.filter( product => product.price > 20000)
console.log(prod)

const products1 = [
    { name: "Phone", price: 10000 },
    { name: "Laptop", price: 50000 },
    { name: "Tablet", price: 15000 },
    { name: "pc", price: 150400 },
    { name: "monitor", price: 150000 }
];
const pro = products1.find(products => products.price > 20000)
console.log(pro)