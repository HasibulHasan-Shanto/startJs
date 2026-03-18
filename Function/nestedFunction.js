console.log('today im learning nestedFunction')

function add(a, b){
    return a + b
}

function multiply(a, b){
    return a * b
}
function calculate(a, b, operation){
    if(operation === 'add'){
        const result = add(a, b)
        return result
    }else if(operation === 'multiply'){
        const result = multiply(a, b)
        return result
    }else{
        return 'Invalid Function'
    }
}

const result = calculate(12, 12, 'add')
const result2 = calculate(12, 12, 'multiply')
// console.log(result)
// console.log(result2)

function isEven(num){
     return num
}

function isOdd(num){
    return num
}

function checkNumber(num){
    function isEven(n){
     const result = n % 2 === 0
     return result
}
    function isOdd(n){
     const result = n % 2 !== 0
     return result
}
if(isEven(num)){
    return 'Even'
}
else if(isOdd(num)){
    return 'Odd'
}

    else{
        return 'Invalid Number'
    }
}
const number = checkNumber(58)
// console.log(number)

function miniCalc(a, b, type){
    function add(num1, num2){
        const result = num1 + num2
        return result
    }
    function subtract(num1, num2){
        const result = num1 - num2
        return result
    }
    if(type === 'add'){
        return add(a, b)
    }else if(type === 'subtract'){
        return subtract(a, b)
    }else{
        return 'Invalid Function'
    }
}
const num = miniCalc(12, 10, 'subtract')
// console.log(num)

function finalPrice(price){
    function addTax(p){
        const taxPrice = p + (p * 10 / 100)
        return taxPrice
    }
    function addShipping(p){
        const shippingPrice = p + 50
        return shippingPrice
    }
    let addTaxWithPrice = addTax(price)
    let finalPrice = addShipping(addTaxWithPrice)
    return finalPrice
}
const price = finalPrice(1200)
// console.log(price)

function processOrder(price, quantity){
    function total(p, q){
        const result = p * q
        return result
    }
    function discount(amount){
        if(amount > 1000){
            //discount 10%
            const discountPrice = amount * 0.1
            const payableAmount = amount - discountPrice
            return payableAmount
        }else{
            return amount
        }
    }
    let totalPrice = total(price, quantity)
    let discountPrice = discount(totalPrice)
    return discountPrice
}
const priceWithQuantity = processOrder(1200, 2)
console.log(priceWithQuantity)
