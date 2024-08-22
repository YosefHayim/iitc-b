//For loops practice examples:

//for loop  Exercise 1.
let i;
for (i = 10; i > 0; i--) {

}
console.log(`This is for reverse loop: ${i}`);

//while loop  Exercise 2.

while (i < 20) { 
    i += 2;
    if (i === 20) {
        break;
    }
}
console.log(`This is while loop: ${i}`);

//for loop  Exercise 3.
let sum = 0
for (i = 1; i <= 10; i++) {
    sum += i
}
console.log(`This is the total sum of all: ${sum}`);

//for loop  Exercise 4.
for (i = 5; i <= 50; i += 5) {
}
console.log(`this is 5 times table: ${i}`);

//for loop  Exercise 5.
for (i = '*'; i !== '******'; i += '*') {
}
console.log(`Ex1 of power: ${i}`);

// 2nd example for loop  Exercise 5.
let stars;
for (i = 1; i <= 6; i++) {
    stars = '*'.repeat(i);
}
console.log(`Ex2 of power: ${stars}`);


//While loops Examples:
//While loop Exercise 1.
i = 1
while (i < 10) {
    i+= 1
}
console.log(`While loop ex1: ${i}`);

//While loop Exercise 2.
i = 1.1
while (i < 100) {
    i = i*i
}

console.log(`While loop ex2: ${i}`);

//While loop Exercise 3.
i = 20
while (i > 0) {
    i--
}
console.log(`While loop ex3: ${i}`);

//While loop Exercise 4.
let password = `Enter`
// let guessPass = prompt(`What is the password?:`)

// while (guessPass !== password) {
//     console.log(`Try again`);
//     guessPass =prompt(`What is the password?:`)
// }
// console.log(`Correct`);

//do while loops examples:

//Do While Exercise 1.
let number = 0;

do {
    number += 1
    console.log(number);
} while (number < 5)

//Do While Exercise 2.
// let playAgain = prompt(`Want to play again?`)

// do {
//     playAgain = prompt(`Want to play again?`)
//     console.log(playAgain)
// } while (playAgain === `yes`)

//Do While Exercise 3.
let Dice = Math.floor(Math.random() * (7 - 1 + 1))

do {
    Dice = Math.floor(Math.random() * (7 - 1 + 1))

} while (Dice !== 6)
console.log(`Boomed you got the dice number: ${Dice}`)
