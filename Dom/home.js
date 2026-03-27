const logoutButton = document.getElementById('logout-button').addEventListener('click',function(){
    window.location.href = 'payoo.html'
})

const moneys = document.querySelectorAll('.money')
for (const money of moneys) {
    money.addEventListener('click', function(){
        for (const mon of moneys) {
            mon.classList.remove('bg-blue-100', 'border-blue-500', 'text-blue-600')
        }
        this.classList.add('bg-blue-100', 'border-blue-500', 'text-blue-600')
    })
}

const addMoney = document.getElementById('add-money-button').addEventListener('click', function(e){
    e.preventDefault()
const accountNumber = document.getElementById('input-account-number')
const getAccount = parseInt(accountNumber.value)
const inputPin = document.getElementById('input-pin')
const getPin = inputPin.value
const withdrawAmount = document.getElementById('input-withdraw-amount')
const getWithdraw = parseInt(withdrawAmount.value)
const balance = document.getElementById('balance')
const bal = parseInt(balance.innerText)
if(getWithdraw > balance){
    alert('you dont have money')
}
const newBalance = bal - getWithdraw
balance.innerText = newBalance

withdrawAmount.value = ''
})
