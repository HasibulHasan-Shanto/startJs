const logoutButton = document.getElementById('logout-button').addEventListener('click', function () {
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
const transHis = []
document.getElementById('add-money').addEventListener('click', function () {
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

    const getBonus = document.getElementById('get-bonus')
    const getText = getBonus.querySelector('p')
    getBonus.style.backgroundColor = '#FFFFFF'
    getText.style.color = '#080808'
    getText.style.fontWeight = 'normal'
    getBonus.style.border = '1px solid gray'
    document.getElementById('get-bonus-form').style.display = 'none'

    const payBill = document.getElementById('pay-bill')
    const payText = payBill.querySelector('p')
    payBill.style.backgroundColor = '#FFFFFF'
    payText.style.color = '#080808'
    payText.style.fontWeight = 'normal'
    payBill.style.border = '1px solid gray'
    document.getElementById('pay-bill-form').style.display = 'none'

    const transactionHistory = document.getElementById('transaction')
    const transText = transactionHistory.querySelector('p')
    transactionHistory.style.backgroundColor = '#FFFFFF'
    transText.style.color = '#080808'
    transText.style.fontWeight = 'normal'
    transactionHistory.style.border = '1px solid gray'
    //remove style
})
const addMoneyButton = document.getElementById('add-money-button').addEventListener('click', function (e) {
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

    if ((getBank === 'North America' || getBank === 'EU west' || getBank === 'South East Asia') && getAccount === '01912379742' && getPin === '88621') {
        const newBalance = bal + getWithdraw
        balance.innerText = newBalance
        bank.value = ''
        accountNumber.value = ''
        inputPin.value = ''
        withdrawAmount.value = ''
        alert('Add money has been successful.')

        const data = {
            name: "Add Money",
            date: new Date().toLocaleTimeString()
        }
        transHis.push(data)
        console.log(transHis)
    } else {
        alert('invalid information')
    }
})


document.getElementById('cash-out').addEventListener('click', function () {
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

    const getBonus = document.getElementById('get-bonus')
    const getText = getBonus.querySelector('p')
    getBonus.style.backgroundColor = '#FFFFFF'
    getText.style.color = '#080808'
    getText.style.fontWeight = 'normal'
    getBonus.style.border = '1px solid gray'
    document.getElementById('get-bonus-form').style.display = 'none'
    document.getElementById('transactions-history').style.display =
        'none'

    const payBill = document.getElementById('pay-bill')
    const payText = payBill.querySelector('p')
    payBill.style.backgroundColor = '#FFFFFF'
    payText.style.color = '#080808'
    payText.style.fontWeight = 'normal'
    payBill.style.border = '1px solid gray'
    document.getElementById('pay-bill-form').style.display = 'none'

    const transactionHistory = document.getElementById('transaction')
    const transText = transactionHistory.querySelector('p')
    transactionHistory.style.backgroundColor = '#FFFFFF'
    transText.style.color = '#080808'
    transText.style.fontWeight = 'normal'
    transactionHistory.style.border = '1px solid gray'
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

document.getElementById('withdraw-money-button').addEventListener('click', function (e) {
    e.preventDefault()
    const balanceElement = document.getElementById('balance')
    const bal = parseInt(balanceElement.innerText) || 0
    const cashOutAccountNumber = document.getElementById('input-cash-out-account-number')
    const getCashOutAccountNumber = cashOutAccountNumber.value
    const cashOutAmount = document.getElementById('input-cash-out-amount')
    const getCashOutAmount = parseInt(cashOutAmount.value)
    const cashOutPin = document.getElementById('input-cash-out-pin')
    const getCashOutPin = cashOutPin.value
    if (getCashOutAccountNumber.length < 11 || getCashOutAccountNumber.length > 11) {
        alert('Please enter valid account number')
        return
    }
    else if (getCashOutAmount > bal) {
        alert(`YOu don't have enough money`)
        return
    } else if (getCashOutPin === '88621') {
        const newBalance = bal - getCashOutAmount
        balanceElement.innerText = newBalance
        cashOutAccountNumber.value = ''
        cashOutAmount.value = ''
        cashOutPin.value = ''
        alert('Cash out successful.')

        const data = {
            name: "Cash Out",
            date: new Date().toLocaleTimeString()
        }
        transHis.push(data)
        console.log(transHis)
    } else {
        alert('Pin number is incorrect')
    }

})
document.getElementById('transfer-money').addEventListener('click', function () {
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

    const getBonus = document.getElementById('get-bonus')
    const getText = getBonus.querySelector('p')
    getBonus.style.backgroundColor = '#FFFFFF'
    getText.style.color = '#080808'
    getText.style.fontWeight = 'normal'
    getBonus.style.border = '1px solid gray'
    document.getElementById('get-bonus-form').style.display = 'none'
    document.getElementById('transactions-history').style.display =
        'none'

    const payBill = document.getElementById('pay-bill')
    const payText = payBill.querySelector('p')
    payBill.style.backgroundColor = '#FFFFFF'
    payText.style.color = '#080808'
    payText.style.fontWeight = 'normal'
    payBill.style.border = '1px solid gray'
    document.getElementById('pay-bill-form').style.display = 'none'

    const transactionHistory = document.getElementById('transaction')
    const transText = transactionHistory.querySelector('p')
    transactionHistory.style.backgroundColor = '#FFFFFF'
    transText.style.color = '#080808'
    transText.style.fontWeight = 'normal'
    transactionHistory.style.border = '1px solid gray'
    /// remove style 
    const transfer = document.getElementById('transfer-money')
    const text = transfer.querySelector('p')
    transfer.style.backgroundColor = '#0DB89A'
    text.style.color = '#0874F2'
    text.style.fontWeight = 'bold'
    transfer.style.border = '2px solid #0874F2'
    document.getElementById('transfer-money-form').style.display = 'block'
})
document.getElementById('send-money-button').addEventListener('click', function (e) {
    e.preventDefault()
    const balanceElement = document.getElementById('balance')
    const bal = parseInt(balanceElement.innerText) || 0
    const transferAccountNumber = document.getElementById('input-transfer-account-number')
    const getTransferAccountNumber = transferAccountNumber.value
    const transferAmount = document.getElementById('input-transfer-amount')
    const getTransferAmount = parseInt(transferAmount.value)
    const transferPin = document.getElementById('input-transfer-pin')
    const getTransferPin = transferPin.value
    if (getTransferAccountNumber.length < 11 || getTransferAccountNumber.length > 11) {
        alert('Please enter valid account number')
        return
    }
    else if (getTransferAmount > bal) {
        alert(`YOu don't have enough money`)
        return
    } else if (getTransferPin === '88621') {
        const newBalance = bal - getTransferAmount
        balanceElement.innerText = newBalance
        transferAccountNumber.value = ''
        transferAmount.value = ''
        transferPin.value = ''
        alert('Send Money Successful.')

        const data = {
            name: "Transfer Money",
            date: new Date().toLocaleTimeString()
        }
        transHis.push(data)
        console.log(transHis)

    } else {
        alert('Pin number is incorrect')
    }

})

document.getElementById('get-bonus').addEventListener('click', function (e) {
    e.preventDefault()

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

    document.getElementById('transfer-money-form').style.display = 'none'
    const transfer = document.getElementById('transfer-money')
    const transferText = transfer.querySelector('p')
    transfer.style.backgroundColor = '#FFFFFF'
    transfer.style.border = '1px solid gray'
    transferText.style.color = '#080808'
    transferText.style.fontWeight = 'normal'
    document.getElementById('transactions-history').style.display =
        'none'

    const payBill = document.getElementById('pay-bill')
    const payText = payBill.querySelector('p')
    payBill.style.backgroundColor = '#FFFFFF'
    payText.style.color = '#080808'
    payText.style.fontWeight = 'normal'
    payBill.style.border = '1px solid gray'
    document.getElementById('pay-bill-form').style.display = 'none'

    const transactionHistory = document.getElementById('transaction')
    const transText = transactionHistory.querySelector('p')
    transactionHistory.style.backgroundColor = '#FFFFFF'
    transText.style.color = '#080808'
    transText.style.fontWeight = 'normal'
    transactionHistory.style.border = '1px solid gray'
    //remove style
    const getBonus = document.getElementById('get-bonus')
    const getText = getBonus.querySelector('p')
    getBonus.style.backgroundColor = '#0DB89A'
    getText.style.color = '#0874F2'
    getText.style.fontWeight = 'bold'
    getBonus.style.border = '2px solid #0874F2'
    document.getElementById('get-bonus-form').style.display = 'block'

})

document.getElementById('get-bonus-button').addEventListener('click', function (e) {
    e.preventDefault()
    const coupon = 'payoo12'
    const inputCoupon = document.getElementById('input-coupon')
    const getInputCoupon = inputCoupon.value
    if (getInputCoupon.toLowerCase() === coupon.toLowerCase()) {
        const balance = document.getElementById('balance')
        const updateBalance = parseInt(balance.innerText)
        const newBalance = updateBalance + 999
        balance.innerText = newBalance
        inputCoupon.value = ''
        alert('You Get 999 Taka Bonus.')

        const data = {
            name: "Get Bonus",
            date: new Date().toLocaleTimeString()
        }
        transHis.push(data)
        console.log(transHis)
    }
    else {
        alert('please enter valid coupon')
    }
})

document.getElementById('pay-bill').addEventListener('click', function () {
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

    document.getElementById('transfer-money-form').style.display = 'none'
    const transfer = document.getElementById('transfer-money')
    const transferText = transfer.querySelector('p')
    transfer.style.backgroundColor = '#FFFFFF'
    transfer.style.border = '1px solid gray'
    transferText.style.color = '#080808'
    transferText.style.fontWeight = 'normal'
    document.getElementById('transactions-history').style.display =
        'none'

    const getBonus = document.getElementById('get-bonus')
    const getText = getBonus.querySelector('p')
    getBonus.style.backgroundColor = '#FFFFFF'
    getText.style.color = '#080808'
    getText.style.fontWeight = 'normal'
    getBonus.style.border = '1px solid gray'
    document.getElementById('get-bonus-form').style.display = 'none'
    document.getElementById('transactions-history').style.display =
        'none'

    const transactionHistory = document.getElementById('transaction')
    const transText = transactionHistory.querySelector('p')
    transactionHistory.style.backgroundColor = '#FFFFFF'
    transText.style.color = '#080808'
    transText.style.fontWeight = 'normal'
    transactionHistory.style.border = '1px solid gray'
    //remove style
    const payBill = document.getElementById('pay-bill')
    const payText = payBill.querySelector('p')
    payBill.style.backgroundColor = '#0DB89A'
    payText.style.color = '#0874F2'
    payText.style.fontWeight = 'bold'
    payBill.style.border = '2px solid #0874F2'
    document.getElementById('pay-bill-form').style.display = 'block'
})

document.getElementById('pay-now-button').addEventListener('click', function (e) {
    e.preventDefault()
    const balanceEle = document.getElementById('balance')
    const currentBal = parseInt(balanceEle.innerText)
    const payBank = document.getElementById('pay-bank')
    const getPayBank = payBank.value
    const billerAccount = document.getElementById('input-biller-account-number')
    const getBillerAccount = billerAccount.value
    const payAmount = document.getElementById('input-pay-amount')
    const getPayAmount = parseInt(payAmount.value) || 0
    const payPin = document.getElementById('input-pay-pin')
    const getPayPin = payPin.value
    if (getPayBank !== 'Water Bill' && getPayBank !== 'Electric Bill' && getPayBank !== 'Gas Bill' && getPayBank !== 'WIFI Bill') {
        alert('Please Select Any Bank')
        return
    } else if (getBillerAccount !== '01912379742') {
        alert('Please Enter Valid Account Number')
        return
    } else if (getPayAmount > currentBal) {
        alert(`You Don't Have Money.`)
        return
    } else if (getPayPin === '88621') {

        const newBal = currentBal - getPayAmount
        balanceEle.innerText = newBal
        payBank.value = ''
        billerAccount.value = ''
        payAmount.value = ''
        payPin.value = ''
        alert('Paid Successful.')

        const data = {
            name: "Pay Bill",
            date: new Date().toLocaleTimeString()
        }
        transHis.push(data)
        console.log(transHis)
    }
    else {
        alert('Incorrect Pin')
    }
})

document.getElementById('transaction').addEventListener('click', function () {
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

    document.getElementById('transfer-money-form').style.display = 'none'
    const transfer = document.getElementById('transfer-money')
    const transferText = transfer.querySelector('p')
    transfer.style.backgroundColor = '#FFFFFF'
    transfer.style.border = '1px solid gray'
    transferText.style.color = '#080808'
    transferText.style.fontWeight = 'normal'
    document.getElementById('transactions-history').style.display =
        'none'

    const getBonus = document.getElementById('get-bonus')
    const getText = getBonus.querySelector('p')
    getBonus.style.backgroundColor = '#FFFFFF'
    getText.style.color = '#080808'
    getText.style.fontWeight = 'normal'
    getBonus.style.border = '1px solid gray'
    document.getElementById('get-bonus-form').style.display = 'none'
    document.getElementById('transactions-history').style.display =
        'none'

    const payBill = document.getElementById('pay-bill')
    const payText = payBill.querySelector('p')
    payBill.style.backgroundColor = '#FFFFFF'
    payText.style.color = '#080808'
    payText.style.fontWeight = 'normal'
    payBill.style.border = '1px solid gray'
    document.getElementById('pay-bill-form').style.display = 'none'
    //remove style

    const transactionHistory = document.getElementById('transaction')
    const transText = transactionHistory.querySelector('p')
    transactionHistory.style.backgroundColor = '#0DB89A'
    transText.style.color = '#0874F2'
    transText.style.fontWeight = 'bold'
    transactionHistory.style.border = '2px solid #0874F2'
    document.getElementById('transactions-history').style.display =
        'block'
})

document.getElementById('transaction').addEventListener('click', function () {
    const transactionHistory = document.getElementById('transactions-history')
    transactionHistory.style.display = 'block'
    transactionHistory.innerHTML = ''
    for (const data of transHis) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="flex items-center justify-between mb-4">
            <p class="latest-payment text-[18px] text-[#080808] font-semibold">
                Latest Payment
            </p>
            <p class="view-all text-[14px] font-regular text-gray-400">
                View All
            </p>
        </div>

        <div class="bg-white rounded-md">
            <div class="flex justify-between items-center p-4 rounded">
                <div class="flex items-center gap-4">
                    <div class="bg-gray-300 p-2 rounded-full">
                        <img class="m-auto" src="./assets/wallet1.png" alt="">
                    </div>
                    <div>
                        <h1 class="text-[16px] font-semibold text-[#080808]">${data.name}</h1>
                        <p class=" text-[12px] font-regular text-[#080808]">${data.date}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        
        `
        transactionHistory.appendChild(div)
    }
})