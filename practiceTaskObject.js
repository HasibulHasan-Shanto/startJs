console.log('today im learning objecty')

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors['golden rod'])

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car.passenger = 5
console.log(car)

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
const result = student.physics.marks
console.log(result)


let students = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

const value = Object.keys(students).length
console.log(value)


let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

for (const element in myObject) {
    console.log(element, ':', myObject[element], '|', typeof myObject[element])
}
