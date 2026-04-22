console.log('cons')

const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
}

const displayCategories = (cats) => {
    const categoriesContainer = document.getElementById('catContainer')

    const allTrees = document.createElement('p')
    allTrees.className = 'hover:bg-[#15803D] hover:text-white p-2 rounded-sm text-white mb-1 bg-[#15803D]'
    allTrees.innerText = "All Trees"
    categoriesContainer.appendChild(allTrees)

    const allActiveButton = []

    allTrees.addEventListener('click', () => {
        for (const btn of allActiveButton) {
            allPlants()
            btn.classList.remove('bg-[#15803D]', 'text-white')
            btn.classList.add('text-black')
        }

        allTrees.classList.add('bg-[#15803D]', 'text-white')
        allTrees.classList.remove('text-black')
    })

    for (const cat of cats) {
        const p = document.createElement('p')
        p.className = 'hover:bg-[#15803D] hover:text-white p-2 rounded-sm text-black mb-1'
        p.innerHTML = `${cat.category_name}`

        p.addEventListener('click', () => {
            for (const activeBtn of allActiveButton) {
                activeBtn.classList.remove('bg-[#15803D]', 'text-white')
                activeBtn.classList.add('text-black')
            }

            allTrees.classList.remove('bg-[#15803D]', 'text-white')
            allTrees.classList.add('text-black')

            p.classList.add('bg-[#15803D]', 'text-white')

            loadSinglePlant(cat.id)
        })

        categoriesContainer.appendChild(p)
        allActiveButton.push(p)
    }
}

const allPlants = () => {
    fetch('https://openapi.programming-hero.com/api/plants')
        .then(res => res.json())
        .then(data => displayAllPlants(data.plants))
}

const displayAllPlants = (plants) => {
    const allPlants = document.getElementById('allPlants')
    allPlants.innerHTML = ''

    for (const plant of plants) {
        const div = document.createElement('div')
        div.className = "bg-[#FFFFFF] p-2 rounded-md shadow-lg"

        div.innerHTML = `
            <img class="w-84 h-74 rounded-md modaDiv" src=${plant.image} alt="">
            <h3 class="catName font-bold">${plant.name}</h3>
            <p class="line-clamp-3">${plant.description}</p>

            <div class="flex justify-between py-2">
                <p class="bg-[#DCFCE7] px-3 py-1 rounded-sm text-[#15803D]">
                    ${plant.category}
                </p>
                <p class="catPrice font-bold">
                    <span class="font-extrabold">৳</span>${plant.price}
                </p>
            </div>

            <button class="addToCart bg-[#15803D] py-2 rounded-md text-white w-full">
                Add To Cart
            </button>
        `

        const modaDiv = div.querySelectorAll('.modaDiv')
        for (const moda of modaDiv) {
            moda.addEventListener('click', () => {
                loadPlant(plant.id)
            })
        }

        const addToCartButton = div.querySelectorAll('.addToCart')
        for (const cartBtn of addToCartButton) {
            cartBtn.addEventListener('click', () => {
                addToCartPrice(plant)
            })
        }

        allPlants.appendChild(div)
    }
}

let totalPrice = 0

const addToCartPrice = (plant) => {
    const cartContainer = document.getElementById('cartContainer')
    const price = document.getElementById('price')

    const div = document.createElement('div')
    div.className = 'bg-[#DDF5E7] p-2 rounded-md mb-2'

    div.innerHTML = `
        <div class="flex items-center justify-between">
            <div>
                <p class="text-[#1F2937] font-semibold">${plant.name}</p>
                <p>
                    <span class="font-extrabold">৳</span>${plant.price} * 1
                </p>
            </div>
            <div class="remove">
                <i class="fa-solid fa-x"></i>
            </div>
        </div>
    `

    totalPrice += parseInt(plant.price)
    console.log(totalPrice)

    price.innerText = totalPrice

    const removeBtn = div.querySelector('.remove')
    removeBtn.addEventListener('click', () => {
        totalPrice -= parseInt(plant.price)
        price.innerText = totalPrice
        div.remove()
    })

    cartContainer.appendChild(div)
}

const loadSinglePlant = (id) => {
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
        .then(res => res.json())
        .then(data => displaySinglePlant(data.plants))
}

const displaySinglePlant = (singlePlants) => {
    const allPlants = document.getElementById('allPlants')
    allPlants.innerHTML = ''

    for (const singlePlant of singlePlants) {
        const div = document.createElement('div')
        div.className = "bg-[#FFFFFF] p-2 rounded-md shadow-lg"

        div.innerHTML = `
            <img class="w-84 h-74 rounded-md modaDiv" src=${singlePlant.image} alt="">
            <h3 class="font-bold">${singlePlant.name}</h3>
            <p class="line-clamp-3">${singlePlant.description}</p>

            <div class="flex justify-between py-2">
                <p class="bg-[#DCFCE7] px-3 py-1 rounded-sm text-[#15803D]">
                    ${singlePlant.category}
                </p>
                <p class="font-bold">
                    <span class="font-extrabold">৳</span>${singlePlant.price}
                </p>
            </div>

            <button class="addToCart bg-[#15803D] py-2 rounded-md text-white w-full">
                Add To Cart
            </button>
        `

        const modaDiv = div.querySelectorAll('.modaDiv')
        for (const moda of modaDiv) {
            moda.addEventListener('click', () => {
                loadPlant(singlePlant.id)
            })
        }

        const addToCartButton = div.querySelectorAll('.addToCart')
        for (const btn of addToCartButton) {
            btn.addEventListener('click', () => {
                addToCartPrice(singlePlant)
            })
        }

        allPlants.appendChild(div)
    }
}

const loadPlant = (id) => {
    fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
        .then(res => res.json())
        .then(data => displayPlant(data.plants))
}

const displayPlant = (plants) => {
    const modalContainer = document.getElementById('modalContainer')
    modalContainer.innerHTML = ''

    const modalDiv = document.createElement('div')
    modalDiv.innerHTML = `
        <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>

        <img src="${plants.image}" class="w-full h-80 rounded-md mb-3 mt-5" />
        <h3 class="text-lg font-bold">${plants.name}</h3>
        <p class="py-2">${plants.description}</p>

        <p class="bg-[#DCFCE7] py-1 rounded-sm text-[#15803D] w-30 p-2">
            ${plants.category}
        </p>
    `

    modalContainer.appendChild(modalDiv)

    document.getElementById('my_modal_3').showModal()
}

allPlants()
loadCategories()