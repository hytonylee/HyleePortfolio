// ================= OBJ DESTRUCTING =============================

// const person = {
//     name: 'Tony',
//     age: 35,
//     location: {
//         city: 'Vancouver',
//         province: 'BC',
//         country: 'Canada',
//         temp: 21
//     }
// }

// const { name: firstName = 'John', age } = person;
// console.log(`${firstName} is ${age}.`)

// const { temp: temperature, city } = person.location;
// if (city && temperature && typeof temperature === 'number') {
//     console.log(`It's ${temperature} in ${city}.`)
// }

// ------------------ Example -----------------------------------

// const book = {
//     title: 'educated',
//     author: 'Tara Westover',
//     publisher: {
//         name: 'Penguin',
//         year: '2018'
//     }
// }

// const { name: publisherName = 'Self Published', year } = book.publisher
// console.log(`${publisherName}`)


// ================= ARR DESTRUCTING =============================

const address = ['8123 Shaughnessy Street', 'Vancouver', , 'V6P3X9']
const [, city, province = 'WA',] = address
console.log(`You are in ${city}, ${province}.`)

// ------------------Example -----------------------------------

const item = ['Coffee', 'Americano', '$1.50', '$2.50', '$3.50']
const [product, type = 'Latte', small, medium, large] = item
console.log(`The price of medium size of ${type} ${product} is ${medium}.`)
