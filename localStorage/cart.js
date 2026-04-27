
const handleProducts = () => {
    const productElement = document.getElementById('product')
    const quantityElement = document.getElementById('quantity')
    const product = productElement.value
    const quantity = parseInt(quantityElement.value)
    console.log('product added', product, quantity)
    displayProducts(product, quantity)
    addToCart(product, quantity)
    productElement.value = ''
    quantityElement.value = ''
}

const displayProducts = (product, quantity) => {
    const li = document.createElement('li')
    li.innerText = `${product}: ${quantity}`
    const cartContainer = document.getElementById('cart-container')
    cartContainer.appendChild(li)
}

const getStoreCart = () => {
    let cart = {}
    const cartJson = localStorage.getItem('cart')
    if(cartJson){
        cart = JSON.parse(cartJson)
    }
    return cart
}
const addToCart = (product, quantity) => {
    const cart = getStoreCart()
    if (cart[product]){
        cart[product] += quantity
    }
    else{
        cart[product] = quantity
    }
    console.log('cart', cart)
    cartJson = JSON.stringify(cart)
    localStorage.setItem('cart', cartJson)
}

const displayStoreProducts = () => {
    const cart = getStoreCart()
    for (const product in cart) {
        const quantity = cart[product]
        // console.log(product, quantity)
        displayProducts(product, quantity)
    }
}
displayStoreProducts()