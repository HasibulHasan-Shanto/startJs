console.log('today im learning simple conditon')

//javaScript e if er vitore jodi akadik condition thake and sekhane jodi sob gulo condition e true korte chai tahole and--&& use korte hoy and jekono akta condition jodi true korte chai tahole or--|| use kort hoy like -------
const password = 12345
const email = 'admin@gmail.com'

if(password && email){
    // console.log('Login Successful')
}else{
    // console.log('Login Failed')
}

const day = 'friday'

if(day == 'friday' || day == 'saturday'){
    // console.log('Holiday')
}else{
    // console.log('Working Day')
}


const number = -0

if(number > 0 && number % 2 === 0){
    // console.log('Positive Even Number')
}
else if(number > 0 && number % 2 !== 0){
    // console.log('Positive Odd Number')
}
else if(number < 0 && number % 2 === 0){
    // console.log('Negative Even Number')
}
else if(number < 0 && number % 2 !== 0){
    // console.log('Negative Odd Number')
}
else{
    // console.log('this is zero')
}

const num = -1

if(num < 0 || num === 0){
    console.log('not positive')
}else{
    console.log('Positive')
}