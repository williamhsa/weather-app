// Object property shorthand

const  name = 'William'
const userAge = 27

// name is equal property user.name, i can use a shorthand

const user = {
  name,
  age: userAge,
  location: 'Uberlandia'
}

console.log(user)

// Object destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined
}

const {label: productLabel, price, stock, salePrice = 5} = product
console.log(price, stock, salePrice)
console.log(productLabel) // new name that i created

// const transaction = (type, myProduct) => {
//   const { label } = myProduct
// }

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock)
}

transaction('order', product)
