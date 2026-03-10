console.log('today im learning multiLevelIfElse')

// Grading System
const mark = -90


if (mark > 100 || mark < 0){
    // console.log('Invalid Mark')
}
else if(mark >= 80 && mark <= 100){
    // console.log('Your mark is A+')
}
else if(mark >= 70 && mark < 80){
    // console.log('Your mark is A')
}
else if(mark >= 60 && mark < 70){
    // console.log('Your mark is A-')
}
else if(mark >= 50 && mark < 60){
    // console.log('Your mark is B')
}
else if(mark > 32 && mark < 50){
    // console.log('Your mark is C')
}
else{
    // console.log('Youre Fail🤦')
}

// Temperature System


const temperature  = -10

if(temperature > 40){
    // console.log('Heat Alert')
}
else if(temperature > 30 && temperature <= 40){
    // console.log('Hot')
}
else if(temperature > 20 && temperature <= 30){
    // console.log('Warm')
}
else if(temperature > 10 && temperature <= 20){
    // console.log('Cool')
}
else{
    // console.log('Cold')
}


//Age group System 

const age = -12.1

if(age > 0 && age <= 12){
    // console.log('Yore a child')
}
else if(age > 12 && age <= 19){
    // console.log('youre a Teenager')
}
else if( age > 19 && age <= 59){
    // console.log('Adult')
}
else if(age > 59){
    // console.log('Senior Citizen')
}
else{
    // console.log('Invalid Age')
}

// Traffic Signal 

const color = 'blue'

if(color == 'Red'){
    // console.log('Please Stop')
}
else if(color == 'Yellow'){
    // console.log('Get Ready to Go')
}
else if(color == 'Green'){
    // console.log('Goooooo')
}
else{
    // console.log('Invalid Signal')
}

// Discount Slabs

const purchaseAmount = 10001

if(purchaseAmount > 10000){
    // 20% Discount
    const discountPrice = purchaseAmount * 20 / 100
    const payableAmount = purchaseAmount - discountPrice
    console.log(payableAmount)
}
else if(purchaseAmount >= 5000 && purchaseAmount <= 10000){
    //15% Discount
    const discountPrice = purchaseAmount * 15 / 100
    const payableAmount = purchaseAmount - discountPrice
    console.log(payableAmount)
}
else if(purchaseAmount >= 2000 && purchaseAmount < 5000){
    //10% Discount
    const discountPrice = purchaseAmount * 10 / 100
    const payableAmount = purchaseAmount - discountPrice
    console.log(payableAmount)
}
else{
    console.log('No Discount! You will be pay ' + purchaseAmount)
}