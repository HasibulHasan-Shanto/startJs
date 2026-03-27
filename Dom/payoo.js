const loginButton = document.getElementById('login-button').addEventListener('click', function(e){
    e.preventDefault()
    const inputNum = document.getElementById('input-number')
    const getInputNum = inputNum.value
    const inputPin = document.getElementById('input-pin')
    const getInputPin = inputPin.value
    if(getInputNum === '01912379742' && getInputPin === '88621'){
        window.location.href = 'home.html'
    }else if(getInputNum === '' && getInputPin === ''){
        alert('Please enter input field')
    }
    else{
        alert('Login information has been incorrect')
    }
})
