const products = [
  {
    id: 1,
    name: "Laptop",
    price: 60000,
    brand: "HP",
    stock: 5
  },
  {
    id: 2,
    name: "Phone",
    price: 30000,
    brand: "Samsung",
    stock: 10
  },
  {
    id: 3,
    name: "Headphone",
    price: 2000,
    brand: "Sony",
    stock: 15
  },
  {
    id: 4,
    name: "Keyboard",
    price: 1500,
    brand: "Logitech",
    stock: 8
  },
  {
    id: 5,
    name: "Mouse",
    price: 800,
    brand: "A4Tech",
    stock: 20
  },
  {
    id: 6,
    name: "Monitor",
    price: 12000,
    brand: "Dell",
    stock: 3
  },
  {
    id: 7,
    name: "Tablet",
    price: 25000,
    brand: "Apple",
    stock: 4
  }
];

function searchProducts(products, search){
    let searchProduct = []
    for (const product of products) {
        if(product.name.toLowerCase().includes(search.toLowerCase()) || product.brand.toLowerCase().includes(search.toLowerCase())){
            searchProduct.push(product)
        }
    }
    return searchProduct
}
const result = searchProducts(products, 'sony')
console.log(result)
