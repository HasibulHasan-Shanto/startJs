console.log('today im learning destructuring')
const student = {
    name: "Rahim",
    marks: {
        math: 80,
        english: 70
    }
};

// const math = student.marks.math
// const english = student.marks.english
// console.log(math)
// console.log(english)

const {math, english} = student.marks

const numbers = [5, 10, 15, 20];

const first = numbers
const last = numbers[3]

const user = {
    id: 1,
    profile: {
        name: "Shanto",
        email: "shanto@gmail.com"
    }
};

// const { name, email } = user.profile

const users = [
    {
        name: "Rahim",
        age: 25
    },
    {
        name: "Karim",
        age: 30
    }
];

const [, {name}] = users
console.log(name)