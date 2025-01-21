// # JavaScript Loops Exercises

// ## 'for' Loop Exercises

// 1. Write a loop that counts from 10 to 1 (backwards).
//    Hint: Start your counter at 10 and decrement it in each iteration.
//    [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)
i = 10
for (i = 10; i > 0; i--) {
}
console.log(i);
// 2. Create a loop that prints only even numbers from 2 to 20.
//    Hint: Start at 2 and increment by 2 in each iteration.
//    [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)
i;
let evenNum;
for (i = 2; i < 20; i++) {
    if (i % 2 === 0) {
        evenNum = i
        console.log(evenNum);
    } else (i % 2 !== 0)
}

// 3. Make a loop that adds up all numbers from 1 to 10 and prints the sum.
//    Hint: Use a variable to keep track of the sum and add each number in the loop.
//    [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)
let sum = 0
i;
for (i = 1; i < 10; i++) {
    sum += i
    console.log(sum);
}

// 4. Write a loop that prints the 5 times table (5, 10, 15, ..., 50).
//    Hint: Multiply each number in the loop by 5.
//    [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)
i;
for (i = 5; i <= 50; i += 5) {
    console.log(`${i}`);
}
// 5. Create a loop that prints this pattern:
//    ```
//    *
//    **
//    ***
//    ****
//    *****
//    ```
//    Hint: Use nested loops - one for rows and one for columns.
//    [Learn more about nested loops](https://www.w3schools.com/js/js_loop_for.asp)
for (i = '*'; i !== '******'; i += '*') {
    console.log(`Ex1 of power: ${i}`);
}

// ## 'while' Loop Exercises

// 1. Write a while loop that prints numbers from 1 to 10.
//    Hint: Initialize a counter before the loop and increment it inside.
//    [Learn more about while loops](https://www.w3schools.com/js/js_loop_while.asp)
i = 1
while (i < 10) {
    i+= 1
console.log(i);
}
// 2. Create a while loop that doubles a number until it's bigger than 100.
//    Hint: Start with 1 and multiply by 2 in each iteration.
//    [Learn more about while loops](https://www.w3schools.com/js/js_loop_while.asp)
i = 1
while (i < 100) {
    i = i * 2 
    console.log(i);
}
// 3. Make a while loop that counts down from 20 to 0.
//    Hint: Start with 20 and decrement in each iteration.
//    [Learn more about while loops](https://www.w3schools.com/js/js_loop_while.asp)
i = 20
while (i > 0) {
    i -= 1
    console.log(i);
}
// 4. Write a while loop that keeps asking for a password until the correct one is entered.
//    Hint: Use prompt() to get user input and compare it to the correct password.
//    [Learn more about while loops](https://www.w3schools.com/js/js_loop_while.asp)
let askPassword = `Guess password`
let password = `123`
while (askPassword !== password) {
    console.log(`Correct.`)
    break;
}
// 5. Create a while loop that generates random numbers between 1 and 10 until it gets a 5.
//    Hint: Use Math.random() and Math.floor() to generate random integers.
//    [Learn more about while loops](https://www.w3schools.com/js/js_loop_while.asp)
i = Math.random() * 10
while (i !== 5) {
    console.log(`Random number is: ${5}.`)  
    break;
}
// ## 'do...while' Loop Exercises

// 1. Write a do...while loop that prints numbers from 1 to 5.
//    Hint: Initialize a counter before the loop and increment it inside.
//    [Learn more about do...while loops](https://www.w3schools.com/jsref/jsref_dowhile.asp)
i = 0
do {
    i += 1
    console.log(i);
} while (i < 5)
// 2. Create a do...while loop that asks the user if they want to play again.
//    Hint: Use prompt() to get user input and check if it's "yes" or "no".
//    [Learn more about do...while loops](https://www.w3schools.com/jsref/jsref_dowhile.asp)
i = 0
do {
    i = `yes`
    console.log(i);
    break;
} while (i === `yes`)
// 3. Make a do...while loop that rolls a die (1-6) until it gets a 6.
//    Hint: Use Math.random() and Math.floor() to simulate a die roll.
//    [Learn more about do...while loops](https://www.w3schools.com/jsref/jsref_dowhile.asp)
i = Math.floor(Math.random() * 6) + 1;
do {
    i = Math.floor(Math.random() * 6) + 1;
    if (i === 6) {
        console.log(`Ex 3, dice result: ${i}`);
        break;
    } else (console.log(`Ex 3, not correct: ${i}`))
} while (i !== 6);

// 4. Write a do...while loop that keeps doubling a number until it's over 1000.
//    Hint: Start with 1 and multiply by 2 in each iteration.
//    [Learn more about do...while loops](https://www.w3schools.com/jsref/jsref_dowhile.asp)
i = 1
do {
    i = i * 2 
    console.log(i);

} while (i < 100)
// 5. Create a do...while loop that asks for names and adds them to a list until the user enters "done".
//    Hint: Use prompt() to get names and push them to an array.
//    [Learn more about do...while loops](https://www.w3schools.com/jsref/jsref_dowhile.asp)
let list = [];
i;
do {
    i = prompt('What is your name?');
    if (i !== 'done') {
        list.push(i);
        console.log(list);
    } else (console.log(`You wrote done, so loop is stopping.`))
} while (i !== 'done');

// Remember to test your code with different inputs to ensure your loops work correctly!
