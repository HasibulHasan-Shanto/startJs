// amra kintu akta array opor easily for of diye looping kort parii jemon 
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        brand: "Dell"
    },
    {
        id: 2,
        name: "Phone",
        price: 20000,
        brand: "Samsung"
    },
    {
        id: 3,
        name: "Headphone",
        price: 2000,
        brand: "Sony"
    }
];
for (const product of products) {
    console.log(product)
}

// thik tmn e amra caile kono akta object opor o looping korte pari for of er jagai for in use kora 

const cars = {
    brand: "Toyota",
    model: "Corolla"
};
for(const key in cars){
    const value = cars[key]
    console.log(key, value)
}