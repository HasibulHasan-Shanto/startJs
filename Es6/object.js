// kono akta object er moddhe property and values ak sathe pate caile object.entries keyword use kort hoy like 
const product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell"
};
const entries = Object.entries(product)
// console.log(entries)
// object theke just key ba property peye caile object.keys use korbo like 
const products = {
    name: "Laptop",
    price: 50000,
    brand: "Dell"
};
const key = Object.keys(products)
const value = Object.values(products)

// jodi kono object er man akdom change korte na chaii tahole object.freeze use korbo.. r freeze use korle kono kisu change korte parbo na like
const persons = {
    name: "Rahim",
    age: 25,
    city: "Dhaka"
};
const freeze = Object.freeze(persons)
// and jodi kono object ke just read korte chai and existing value modify korte chai tahole object.seal use korbo.. akhane just read and modify korte parbo r kisu korte parbo na like 
const person = {
    name: "Rahim",
    age: 25,
    city: "Dhaka"
};
const seals = Object.seal(person)
//and jodi kono object er keys and value delete korte chai tahole delete use korbo 
const cars = {
    brand: "Toyota",
    model: "Corolla"
};
const delet = delete(cars.brand)

const car = {
    brand: "Toyota",
    model: "Corolla"
};

const seal = Object.seal(car)
car.year = 2022
console.log(car)
car.brand = 'BMW'
console.log(car)
const del = delete(car.model)
console.log(del)

// kono object ke seal korle sekha sudhu existing property update korte parbo ,,, delete ba add korte parbo na 