console.log('assignment')

function totalFine( fare ) {
    if(typeof fare !== 'number' || fare <= 0){
        return 'Invalid'
    }
    else{
        const output =  fare + fare * ( 20 / 100) + 30 
        return output
    }
}
const fine = totalFine('hello')
// console.log(fine)

function onlyCharacter(char){
    if(typeof char !== 'string'){
        return 'Invalid'
    }
    else{
      const result = char.replace(/\s/g, "").toLocaleUpperCase()
      return result
    }
}
const name = true
const result = onlyCharacter(name)
// console.log(result)

function  bestTeam( player1, player2 ) {
    if(typeof player1 !== 'object' || typeof player2 !== 'object'){
        return 'Invalid'
    }else if(player1.foul + player1.cardY + player1.cardR <  player2.foul + player2.cardY + player2.cardR){
        return player1.name
    }else if(player1.foul + player1.cardY + player1.cardR >  player2.foul + player2.cardY + player2.cardR){
        return player2.name
    }else{
        return 'Tie'
    }

}
const firstPlayer = { name: "Germany", foul: 10, cardY: 1, cardR: 1 }

const secondPlayer = "France"
const result2 = bestTeam(firstPlayer, secondPlayer)
// console.log(result2)

function  isSame(arr1 , arr2 ) {
    if(!Array.isArray(arr1 ) || !Array.isArray(arr2)){
        return 'Invalid'
    }
    else if(arr1.length !== arr2.length){
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
}

const firstArray = [34 , 5 ,7 ,9 ]
const secondArray = [ 34 , 5 , 7 ]
const finalArray = isSame(firstArray, secondArray)
console.log(finalArray)
