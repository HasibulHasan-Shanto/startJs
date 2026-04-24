// promise all ki 
// ak sathe multiple promise run korar jonno  promise.all use kora hoy

// example
const firstPromise = new Promise((resolve, reject) => {
    const numbers = Math.random() * 10;
if(numbers > 5){
    resolve('Num: '+ numbers)
}
else{
    reject('the number is less then 10'+ numbers)
}
})
firstPromise.then(res => console.log(res))
.catch(err => console.log(err))