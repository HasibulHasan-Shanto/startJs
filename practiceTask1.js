console.log('hello js')

const Burger = 500.1

if(Burger > 500){
    // console.log('You will get a free coke')
}else{
    // console.log('You have to pay for this coke')
}

const bmi = 30

if(bmi < 18.5){
    // console.log('You are underweight')
}
else if(bmi >= 18.5 && bmi <= 24.9){
    // console.log('You are normal')
}
else if(bmi >= 25 && bmi <= 29.9){
    // console.log('You are overweight')
}
else{
    // console.log('You are obese')
}

const score = 69.999

if(score < 0 || score > 100){
    // console.log('Invalid Score')
}
else if(score >= 90 && score <=100){
    // console.log('Youre grade is A')
}
else if(score >= 80 && score < 90){
    // console.log('Youre grade is B')
}
else if(score >= 70 && score < 80){
    // console.log('Youre grade is C')
}
else if(score >= 60 && score < 70){
    // console.log('your grade is D')
}
else{
    // console.log('You are Fail')
}

const yourScore = 81
const friendScore = 39

if(yourScore >= 80){
    if(friendScore >= 80){
        // console.log('Go for a lunch')
    }else if(friendScore < 80 && friendScore >= 60){
        // console.log('Good luck next time')
    }else if(friendScore < 60 && friendScore >= 40){
        // console.log('Dont seen his message')
    }else {
        // console.log('Block your Friend')
    }
}
else{
    // console.log('Go to home and sleep and act sad')
}

const num1 = 20;
const num2 = 20;
let result;

if(num1 > num2){
    result = num1 * 2
    // console.log(result)
}
else{
    result = num1 + num2
    // console.log(result)
}

result = num1 > num2 ? result = num1 * 2 : num1 + num2
// console.log(result)


const age = 89
const isStudent = true
const isSeniorCitizen = true
const ticketPrice = 800

if(age <= 10){
    console.log('Ticket is free for you')
}
else if(isStudent && isSeniorCitizen && age >= 60){
    console.log('After 60 year nobody can be a student so you have to pay ' + ticketPrice + ' Tk')
}
else if (isSeniorCitizen && age >= 60){
    //Discount 15%
    const discountPrice = ticketPrice * 15 / 100
    const payableAmount = ticketPrice - discountPrice
    console.log('For senior citizen', payableAmount)
}
else if((age > 10 && age < 60) && isSeniorCitizen && isStudent){
    console.log('Senior Citizen Cannot a student')
}
else if(isStudent){
    // Discount 50%
    const discountPrice = ticketPrice * 50 / 100
    const payableAmount = ticketPrice - discountPrice
 
    console.log('For student', payableAmount)
}

else{
    console.log('You have to pay Ticket price '+ ticketPrice + ' Tk')
}