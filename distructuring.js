console.log('Destructuring');

const product = {
    name: 'Laptop',
    price: 32000,
    quantity: 7
}

const discount = product.price * 20 / 100
const payableAmount = product.price - discount
const vat = product.price * 5 / 100
const total = payableAmount + vat
console.log(total)

// Destructuring
const { price, quantity, name} = { name: 'Laptop', price: 32000, quantity: 7}
console.log(price, quantity, name)