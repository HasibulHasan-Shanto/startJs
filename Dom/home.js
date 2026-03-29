const logoutButton = document.getElementById('logout-button').addEventListener('click',function(){
    window.location.href = 'payoo.html'
})

// const moneys = document.querySelectorAll('.money')
// for (const money of moneys) {
//     money.addEventListener('click', function(){
//         for (const mon of moneys) {
//             mon.classList.remove('bg-blue-100', 'border-blue-500', 'text-blue-600')
//         }
//         this.classList.add('bg-blue-100', 'border-blue-500', 'text-blue-600')
//     })
// }

document.getElementById('add-money').addEventListener('click', function(){
    const addMoney = document.getElementById('add-money')
    const text = addMoney.querySelector('p')
    addMoney.style.backgroundColor = '#0DB89A'
    text.style.color = '#0874F2'
    text.style.fontWeight = 'bold'
    addMoney.style.border = '2px solid #0874F2'
    document.getElementById('add-money-form').style.display = 'block'
    document.getElementById('transactions-history').style.display = 
    'none'
    //remvoe style
    document.getElementById('cash-out-form').style.display = 'none'
    const cashOut = document.getElementById('cash-out')
    const cashText = cashOut.querySelector('p')
    cashOut.style.backgroundColor = '#FFFFFF'
    cashText.style.color = '#080808'
    cashText.style.fontWeight = 'normal'
    cashOut.style.border = '1px solid gray'
    document.getElementById('transfer-money-form').style.display = 'none'
    const transfer = document.getElementById('transfer-money')
    const transferText = transfer.querySelector('p')
    transfer.style.backgroundColor = '#FFFFFF'
    transfer.style.border = '1px solid gray'
    transferText.style.color = '#080808'
    transferText.style.fontWeight = 'normal'
    //remove style
})
const addMoneyButton = document.getElementById('add-money-button').addEventListener('click', function(e){
    e.preventDefault()
const bank = document.getElementById('bank')
const getBank = bank.value
const accountNumber = document.getElementById('input-account-number')
const getAccount = accountNumber.value
const inputPin = document.getElementById('input-pin')
const getPin = inputPin.value
const withdrawAmount = document.getElementById('input-withdraw-amount')
const getWithdraw = parseInt(withdrawAmount.value)
const balance = document.getElementById('balance')
const bal = parseInt(balance.innerText) || 0

if((getBank === 'North America' || getBank === 'EU west' || getBank === 'South East Asia') && getAccount === '01912379742' && getPin === '88621'){
    const newBalance = bal + getWithdraw
balance.innerText = newBalance

bank.value = ''
accountNumber.value = ''
inputPin.value = ''
withdrawAmount.value = ''
}else{
    alert('invalid information')
}
})


document.getElementById('cash-out').addEventListener('click', function(){
    //remove style 
    const addMoney = document.getElementById('add-money')
    const addText = addMoney.querySelector('p')
    addMoney.style.backgroundColor = '#FFFFFF'
    addMoney.style.border = '1px solid gray'
    addText.style.color = '#080808'
    addText.style.fontWeight = 'normal'
    document.getElementById('transfer-money-form').style.display = 'none'
    const transfer = document.getElementById('transfer-money')
    const transferText = transfer.querySelector('p')
    transfer.style.backgroundColor = '#FFFFFF'
    transfer.style.border = '1px solid gray'
    transferText.style.color = '#080808'
    transferText.style.fontWeight = 'normal'
    //remove style
    const cashOut = document.getElementById('cash-out')
    const text = cashOut.querySelector('p')
    cashOut.style.backgroundColor = '#0DB89A'
    text.style.color = '#0874F2'
    text.style.fontWeight = 'bold'
    cashOut.style.border = '2px solid #0874F2'
    document.getElementById('cash-out-form').style.display = 'block'
    document.getElementById('add-money-form').style.display = 'none'
})

document.getElementById('withdraw-money-button').addEventListener('click', function(e){
    e.preventDefault()
    const balanceElement = document.getElementById('balance')
    const bal = parseInt(balanceElement.innerText) || 0
    const  cashOutAccountNumber = document.getElementById('input-cash-out-account-number')
    const getCashOutAccountNumber = cashOutAccountNumber.value
    const cashOutAmount = document.getElementById('input-cash-out-amount')
    const getCashOutAmount = parseInt(cashOutAmount.value)
    const cashOutPin = document.getElementById('input-cash-out-pin')
    const getCashOutPin = cashOutPin.value
    if(getCashOutAccountNumber.length < 11 || getCashOutAccountNumber.length > 11){
        alert('Please enter valid account number')
        return
    }
    else if(getCashOutAmount > bal){
        alert(`YOu don't have enough money`)
        return
    }else if(getCashOutPin === '88621'){
        const newBalance = bal - getCashOutAmount
        balanceElement.innerText = newBalance
        cashOutAccountNumber.value = ''
        cashOutAmount.value = ''
        cashOutPin.value = ''

    }else{
        alert('Pin number is incorrect')
    }

})
document.getElementById('transfer-money').addEventListener('click', function(){
//remove style 
    
    const addMoney = document.getElementById('add-money')
    const addText = addMoney.querySelector('p')
    addMoney.style.backgroundColor = '#FFFFFF'
    addMoney.style.border = '1px solid gray'
    addText.style.color = '#080808'
    addText.style.fontWeight = 'normal'
    
    const cashOut = document.getElementById('cash-out')
    const cashText = cashOut.querySelector('p')
    cashOut.style.backgroundColor = '#FFFFFF'
    cashOut.style.border = '1px solid gray'
    cashText.style.color = '#080808'
    cashText.style.fontWeight = 'normal'
    document.getElementById('cash-out-form').style.display = 'none'
    document.getElementById('add-money-form').style.display = 'none'
/// remove style 
    const transfer = document.getElementById('transfer-money')
    const text = transfer.querySelector('p')
    transfer.style.backgroundColor = '#0DB89A'
    text.style.color = '#0874F2'
    text.style.fontWeight = 'bold'
    transfer.style.border = '2px solid #0874F2'
    document.getElementById('transfer-money-form').style.display = 'block'
})
document.getElementById('send-money-button').addEventListener('click', function(e){
    e.preventDefault()
    const balanceElement = document.getElementById('balance')
    const bal = parseInt(balanceElement.innerText) || 0
    const  transferAccountNumber = document.getElementById('input-transfer-account-number')
    const getTransferAccountNumber = transferAccountNumber.value
    const transferAmount = document.getElementById('input-transfer-amount')
    const getTransferAmount = parseInt(transferAmount.value)
    const transferPin = document.getElementById('input-transfer-pin')
    const getTransferPin = transferPin.value
    if(getTransferAccountNumber.length < 11 || getTransferAccountNumber.length > 11){
        alert('Please enter valid account number')
        return
    }
    else if(getTransferAmount > bal){
        alert(`YOu don't have enough money`)
        return
    }else if(getTransferPin === '88621'){
        const newBalance = bal - getTransferAmount
        balanceElement.innerText = newBalance
        transferAccountNumber.value = ''
        transferAmount.value = ''
        transferPin.value = ''

    }else{
        alert('Pin number is incorrect')
    }

})