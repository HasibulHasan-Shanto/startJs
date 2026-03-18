console.log('object')

const heights2 = [167, 190, 120, 165, 137];
let mini = heights2[0]
for (const element of heights2) {
    if(element < mini){
        mini = element
    }
}
// console.log(mini)

const smallestName =  ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let smallName = smallestName[0]
for (const element of smallestName) {
    if(element.length < smallName.length){
        smallName = element
    }
}
// console.log(smallName)

function calculateElectronicsBudget(quantityOfLaptop, quantityOfTablets, quantityOfMobile){
    const laptop = 35000
    const tablet = 15000
    const mobile = 20000

    const totalLaptopPrice = laptop * quantityOfLaptop
    const totalTabletPrice = tablet * quantityOfTablets
    const totalMobilePrice = mobile * quantityOfMobile

    const totalMoney = totalLaptopPrice + totalTabletPrice + totalMobilePrice
    return totalMoney

}
const totalMoney = calculateElectronicsBudget(12, 3, 3)
// console.log(totalMoney)

    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];


function findAveragePhonePrice(phones){
    let average = 0
    for (const phone of phones) {
        average += phone.price
    }
    const averagePrice = average / phones.length
    return averagePrice
}
const averagePrice = findAveragePhonePrice(phones)
// console.log(averagePrice)

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];

        let total = 0
        for (const employee of employees) {
            const currentSalary = employee.starting+ (employee.experience * employee.increment)
            // console.log(currentSalary)
             total += currentSalary 
        }
        console.log(total)