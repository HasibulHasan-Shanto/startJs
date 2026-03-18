function removeDuplicate(arr){
    const unique = []
    for (const element of arr) {
        if(!unique.includes(element)){
            unique.push(element)
        }
    }
    return unique
}
const names = ["rahim", "karim", "rahim", "hasan", "karim", "salam"];
const result = removeDuplicate(names)
console.log(result)

function duplicateNumber(number){
    const uniqueNumber = []
    for (const element of number) {
        if(!uniqueNumber.includes(element)){
            uniqueNumber.push(element)
        }
    }
    return uniqueNumber
}
const numbers = [10, 20, 30, 20, 40, 10, 50, 30];
const results = duplicateNumber(numbers)
