// javaScript e specific sob tag ke select kore kaj korar jonno document.getElementByTagName use kora hoy like--->

const paragraphs = document.getElementsByTagName('p')
// console.log(paragraph)

// jodi paragraph er sudhu lekha take dekhte chai taholee .innerText use korte hobe like --->
for (const paragraph of paragraphs) {
     paragraph.style.color = 'lightblue'
}

const foods = document.getElementById('food-title')
// console.log(foods)
const anotherFood = foods.innerText = 'I love food'
// console.log(anotherFood)

// js dom e kono kisu add, remove, replace korte classList property use korte hoy like ===>
const foodName = document.getElementsByClassName('food-name')
for (const food of foodName) {
     // food.style.backgroundColor = 'red'
     // food.style.textAlign = 'center'
     // food.style.margin = '20px'
     // food.style.padding = '20px'
     // food.style.borderRadius = '30px'
     food.classList.add('food-name')
     // food.classList.remove('food-name')
}
const createE = document.getElementById('create')
const createElement = document.createElement('div')
createElement.innerHTML = `
         <div>
        <h1>Create Element</h1>
                <ul>
            <li class="food-name">Apple</li>
            <li class="food-name">Banana</li>
            <li class="food-name">Mango</li>
            <li class="food-name">Jackfruit</li>
            <li class="food-name">Orange</li>
            <li class="food-name">Coconut</li>
            <li class="food-name">Graphs</li>
        </ul>
    </div>
`
createE.appendChild(createElement)