console.log('today im learning asyncAwait')

//async await holo promise handle korar clear syntax
// soja kothay bolte gele kono jodi asynchronous vabe theke seta ke synchronous vabe neyar jonno async await use kora hoy 
// Example: 

const testFunction = async () => {
    console.log(1)
    console.log(2)
    await Promise.resolve(3)
    console.log(4)
    console.log(5)
}
Promise.resolve(3).then(res => console.log(res))
testFunction()
setTimeout(()=>{
    console.log('set time out')
},5000)

//Task 1 
console.log("A");

setTimeout(() => console.log("B"), 0);

console.log("C");

//task 2
console.log("1");

Promise.resolve().then(() => console.log("2"));

console.log("3");

//task3 

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

//task 4

Promise.resolve().then(() => {
    console.log("A");
    Promise.resolve().then(() => console.log("B"));
});

console.log("C");


//task 5 

async function test() {
    console.log("1");
    await Promise.resolve();
    console.log("2");
}

test();
console.log("3");

// task6

async function test() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}

console.log("C");

test();

console.log("D");


//task 7 

console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");

// task 8 
console.log("A");

async function test() {
    console.log("B");
    await Promise.resolve();
    console.log("C");
}

test();

Promise.resolve().then(() => console.log("D"));

setTimeout(() => console.log("E"), 0);

console.log("F");