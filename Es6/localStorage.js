// local storage e kono data set korar jonno localStorage.setItem user kora hoy je
// and local storage e man set korte hole key value pair akare set korte hoy
localStorage.setItem('name', 'hasibul hasan shanto')
localStorage.setItem('age', '22')

const name = localStorage.getItem('name')
const age = localStorage.getItem('age')
const result = `My name is ${name} and i'm ${age} years old`
console.log(result)

const localStore = () => {
    const number = Math.random() * 100
    localStorage.setItem('number', number)
    console.log(number)
}
//local storage e set kora jinish ke pauar jonno amra localStorage.getItem use korbo
const getNumber = () => {
    localStore()
    const number = localStorage.getItem('number')
    console.log('Get number from local storage ', number)
}

// abr key er value jodi object or array hoy tokhon first e array ba object ta ke json e convert korte hoy and get korar somoy abr sei object ba array te convert korte hoy jemon 

const students = { 
    id: 12,
    name: 'shanto',
    roll: 34,
    dep: 'cst'
}
localStorage.setItem('name', JSON.stringify(students))
const st = JSON.parse(localStorage.getItem('name'))
const resul = `I'm a student and my name is ${st.name} and roll number is ${st.roll} and my department is ${st.dep}`
console.log(resul)
