console.log('today im practice add to cart')
const products = [
  {
    id: 1,
    name: "Laptop",
    brand: "HP",
    price: 60000,
    category: "Electronics",
    inStock: true,
    quantity: 2
  },
  {
    id: 2,
    name: "Phone",
    brand: "Samsung",
    price: 30000,
    category: "Electronics",
    inStock: true,
    quantity: 7
  },
  {
    id: 3,
    name: "Headphone",
    brand: "Sony",
    price: 5000,
    category: "Accessories",
    inStock: false,
    quantity: 3
  },
  {
    id: 4,
    name: "Bag",
    brand: "Skybags",
    price: 2000,
    category: "Fashion",
    inStock: true,
    quantity: 2
  },
  {
    id: 5,
    name: "Watch",
    brand: "Casio",
    price: 3500,
    category: "Fashion",
    inStock: false,
    quantity: 6
  }
];

function cartTotal(products){
    let total = 0
    for (const product of products) {
        total += product.price * product.quantity
    }
    return total
}
const cartTotals = cartTotal(products)
console.log(cartTotals)