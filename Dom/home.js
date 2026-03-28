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
    document.getElementById('cash-out-form').style.display = 'none'
    const cashOut = document.getElementById('cash-out')
    const cashText = cashOut.querySelector('p')
    cashOut.style.backgroundColor = '#FFFFFF'
    cashText.style.color = '#080808'
    cashText.style.fontWeight = 'normal'
    cashOut.style.border = '1px solid gray'
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
if(getWithdraw > bal){
    alert(`you don't have enough money`)
    return 
}
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
    const addMoney = document.getElementById('add-money')
    const addText = addMoney.querySelector('p')
    addMoney.style.backgroundColor = '#FFFFFF'
    addMoney.style.border = '1px solid gray'
    addText.style.color = '#080808'
    addText.style.fontWeight = 'normal'
    const cashOut = document.getElementById('cash-out')
    const text = cashOut.querySelector('p')
    cashOut.style.backgroundColor = '#0DB89A'
    text.style.color = '#0874F2'
    text.style.fontWeight = 'bold'
    cashOut.style.border = '2px solid #0874F2'
    document.getElementById('cash-out-form').style.display = 'block'
    document.getElementById('add-money-form').style.display = 'none'
})