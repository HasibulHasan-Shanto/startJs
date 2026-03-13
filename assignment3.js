console.log('today is my assignment3')

var area = 100;

var result = area / 2
// console.log(result)

var money = 25000;

if(money >= 25000){
    // console.log('Laptop')
}
else if(money >= 10000 && money < 25000){
    // console.log('Cycle')
}
else{
    // console.log('Chocolate')
}

var lastDay = 11 ;

// for (const element of lastDay) {
//     if(element % 3 === 0){
//         console.log(element + '- medicine')
//     }
//     else{
//         console.log(element + ' rest')
//     }
// }
for (let index = 1; index <= lastDay; index++) {
    
        if(index % 3 === 0){
        // console.log(index + '- medicine')
    }
    else{
        // console.log(index + ' rest')
    }
}

var fileName= "slipdf.txt";

if(fileName.startsWith('#')){
    // console.log('Store')
}
else if(fileName.endsWith('.pdf') || fileName.endsWith('.docx')){
    // console.log('Store')
}
else{
    // console.log('Delete')
}

var student= { name: "mewo" , roll: 96 ,department: "cse"  }

var results = student.name + student.roll + '.' + student.department +'@ph.ac.bd'
console.log(results)


var experience = 30;
var startingSalary = 45000;

let currentSalary = startingSalary * Math.pow(1.05, 30)
console.log(currentSalary)