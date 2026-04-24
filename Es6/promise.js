// promise mane ki ata kivabe kaj kore
// promise holo future kono kaj hobe amn guarantee deya jmn ami exam disi amr result asbe kisu din por .. ata akta promise 

// akta promise er 3 ta state thake
// 1. pending(jokhon promise kora hoy tokhon ata pendin obosthay thakee).


// 2. resolve (jokhon promise kono kisu result ase tokhon ata resolve hoy).


// 3. reject (jodi promise kono result na tokhon ata reject hoy).

// promise lekhar structure holo 

const myPromise = new Promise((resolve, reject) => {
    //ata holo promise er structure
    let success = false;
    if (success) {
        resolve('Promise successful!')
    }
    else{
        reject('Promise rejected!')
    }
})
myPromise
.then(res => console.log(res))
.catch(error => console.log(error))

const p = new Promise((resolve, reject) => {
    resolve("Hello");
});

p.then(data => console.log(data));
console.log("World");