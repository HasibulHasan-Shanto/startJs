console.log('today im learning object')

// object holo amr akta structure jekhane property(key)-and value thake likeee--

// const student = {
//     name: 'hasibul hasan shanto',
//     roll: 751979,
//     dept: 'CST',
//     shift: 'second',
// }
// Task1
const student = {
    name: "Shanto",
    age: 22,
    subjects: ["Math", "English", "Science"]
}
console.log(student.subjects[1])

const laptop = {
    brand: "HP",
    ram: "8GB",
    price: 50000
}
console.log(laptop.price = 55000)

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
}
console.log(car.color ='red')

// akta object er moddhe koto gulo values and keys ase seta jana jay object.values/keys

const keys = Object.keys(car)
console.log(keys)
const values = Object.values(car)
console.log(values)