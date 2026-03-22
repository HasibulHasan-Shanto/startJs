// javaScript e specific sob tag ke select kore kaj korar jonno document.getElementByTagName use kora hoy like--->

const paragraphs = document.getElementsByTagName('p')
// console.log(paragraph)

// jodi paragraph er sudhu lekha take dekhte chai taholee .innerText use korte hobe like --->
for (const paragraph of paragraphs) {
     paragraph.style.color = 'lightblue'
}

const foods = document.getElementById('food-title')
console.log(foods)
const anotherFood = foods.innerText = 'I love food'
console.log(anotherFood)