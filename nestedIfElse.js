console.log('today im learning simple nestedIfElse')

const age = 12
const hasId = false

if(age > 18){
    if(hasId == true){
        // console.log('Entry Allowed')
    }
    else{
        // console.log('ID Required')
    }
}
else{
    // console.log('Underage')
}

const userName = 'Hasibul Hasan Shanto'
const password = 88621

if (userName == 'Hasibul Hasan Shanto') {
    if (password == 88621) {
        // console.log('Login has been Successful')
    }
    else{
        // console.log('Wrong Password')
    }
}
else{
    // console.log('User Not Found')
}

const balance = 100000
const withdrawAmount =10

if(balance > 0 ){
    if(withdrawAmount <= balance){
        // console.log('Transaction Successful')
    }
    else{
        // console.log('Insufficient Balance')
    }
}
else {
    // console.log('Account Empty')
}


const marks = 30
const attendance = 12

if(attendance >= 80){
    if(marks >= 33){
        // console.log('Your Pass')
    }
    else{
        // console.log('Youre Fail')
    }
}
else{
    // console.log('Not Allowed For Exam')
}

const email = 'hasibulhasanhanto@gmail.com'
const pass = 88621
const isVerified = true

if(email === 'hasibulhasanhanto@gmail.com'){
    if(isVerified === true){
        if(pass === 88621){
            console.log('Login has been successful')
        }
        else{
            console.log('Wrong Password')
        }
    }
    else{
        console.log('Email Not Verified')
    }
}
else{
    console.log('Invalid Email')
}