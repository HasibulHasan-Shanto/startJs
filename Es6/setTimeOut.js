console.log('today im learning setTimeOut')

// nirdistoy somoy por kono kaj korar jonno setTimeOut use kora jay jmn

const setTimeOut = () => {
    console.log(1)
    console.log(2)
    setTimeout(() => {
       console.log('set time out loading...') 
    }, 3000);
    console.log(3)
    console.log(4)
}
setTimeOut()


// set time out ke off korar jonno clearTimeout use kroa  hoy  jemon 
const clearTime = () => {
    console.log(1)
    console.log(2)
    const clearTimeId = setTimeout (() => {
        console.log('clear set time out')
    }, 3000)
    clearTimeout(clearTimeId)
    console.log(3)
    console.log(4)
}
clearTime()

// nirdisto kaj bar bar infinity time korar jonno setinterval user kora hoy jemon

let count = 0
const interval = () => {
    console.log(1)
    console.log(2)
    setInterval(() => {
        count++
        console.log(count)
    }, 2000);
}
interval()

// ai infinity kaj ke off korar jonno clearInterval user kora hoy jemon

const clearInter = () => {
    console.log('interval 1')
    console.log('interval 2')
    const inter = setInterval(() => {
        count += 2
        if (count === 10) {
            clearInterval(inter)
        }
        console.log(count)
    }, 3000)
}
clearInter()

let counter = 0

const counterUp = () => {
    const clear = setInterval(() => {
        counter++
        console.log(counter)
        if (counter === 5) {
            console.log('Done')
            clearInterval(clear)
        }
    }, 1000)
}
counterUp()

let startUp = 0
const start = () => {
    const running = setInterval(() => {
        startUp++
        console.log(startUp, 'Running')
        if (startUp === 3) {
            console.log('start')
        }
        if (startUp === 5) {
            console.log('Stop')
            clearInterval(running)
        }
    }, 1000)
}
start()

let down = 10
const counterDown = () => {
    const countD = setInterval(() => {
        down--
        console.log('count down start', down)
        if(down === 0){
            console.log('Finished counter down', down)
            clearInterval(countD)
        }

    }, 1000)

}
counterDown()