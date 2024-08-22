let isStudent = true

let person = {
    name: `Joseph`,
    lastName: `Sabag`,
    age: 24,
    height: `1.89 Centimeter`,
    favFood: `Steak`,
    favHobbies: `Gym,running,gaming,hamburgers`,
    isBorn: `Israel`,
    isCity: `Holon`,
    isStudent: isStudent,
}

person.course = `IITC Fullstack`

let laptop = {
    company: `Asus`,
    modelType: `VivoBook`,
    screenSize: 17.3+ `inch`,
    systemType: `Windows`,
    installedApps: `discord,whatsapp,pyCharm,visualStudio,InteractiveTradeBrokers,GoogleChrome,etc...`,
    warranty: `1 year`,
}

let make = `mazda`
let model = `cx-5`
let year = 2022

let car = {
    make: make,
    model: model,
    year: year,
}

car.year = 2024
console.log(car);

let fruit = {
    name:`strawberry`,
    color: `red`,
    isSweet: 9,
}
fruit.color = `green`
console.log(`Fruit name:`,fruit.name,`Sweet level:`,fruit.isSweet);
console.log(fruit);

let book = {
    title: `The secret of secrets`,
    author: `Joseph Sabag`,
    pages: 100,
}

console.log(book.title,book.pages);
book.pages = 150
console.log(`the updated book pages is:`,book.pages);

let bookTwo = {
    title: `find the why`,
    author: `Simon Sink`,
    pages: 100,
}


let bookThree = {
    title: `001`,
    author: `No Author`,
    pages: 100,
}

console.log(bookThree.title,bookThree.pages);
bookThree.pages = 190
console.log(`the updated book pages is:`,bookThree.pages);

let bookFour = {
    title: `Rich Dad, Poor Dad`,
    author: `Robert Kyuaski`,
    pages: 100,
}

console.log(bookFour.title,bookFour.pages);
bookFour.pages = 190
console.log(`the updated book pages is:`,bookFour.pages);

let isWild = true

let animal = {
    species: ``,
    sound: ``,
    isWild: isWild,
}
animal.species = `Fishes`
animal.sound = `blop blop`
animal.isWild = false
console.log(animal);

//Practice time
let motorcycle = {
    make: make,
    model: model,
    year: year,
}
motorcycle.make = `Sun-yang`
motorcycle.model = `Crusim`
motorcycle.year = `2021`

console.log(motorcycle.model);
motorcycle.color = `Black and white`
let motorcycleKeys = Object.keys(motorcycle)
console.log(motorcycleKeys);

let i = 0
for ( i = 0; i < motorcycleKeys.length; i++) {
    console.log(motorcycleKeys[i],motorcycle[motorcycleKeys[i]]);
    }

let personKeys = Object.keys(person)
console.log(personKeys);
let j;

for (j = 0; j < personKeys.length; j++) {
    console.log(personKeys[j],person[personKeys[j]]);
}