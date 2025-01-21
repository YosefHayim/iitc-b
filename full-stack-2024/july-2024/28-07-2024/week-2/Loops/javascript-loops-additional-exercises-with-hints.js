// # Additional JavaScript Loops Exercises

// 1. Write a for loop that prints the numbers from 1 to 20.
//    Hint: Use a for loop with a counter that starts at 1 and ends at 20.
//    [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)
let i = 0
for (i = 0; i < 20; i++) {
}
console.log(i);
// 2. Create a while loop that prints odd numbers from 1 to 15.
//    Hint: Use a counter that increments by 2 in each iteration.
//    [Learn more about while loops](https://www.w3schools.com/js/js_loop_while.asp)
i = 0
while (i < 15) {
    if (i % 2 !== 0) {

}
    i += 1
}
console.log(i);

// 3. Use a do...while loop to ask the user for a number between 1 and 10 until they enter a valid number.
//    Hint: Use prompt() to get user input and parseInt() to convert it to a number.
//    [Learn more about do...while loops](https://www.w3schools.com/jsref/jsref_dowhile.asp)
num = 10

do {
    num = parseInt(num);
    if (num >= 1 && num <= 10) {
        console.log(`Number accepted: ${num}`);
    } else {
        console.log(`Invalid number. Please choose a number between 1 and 10.`);
    }
} while (num < 1 || num > 10);


// 4. Write a for loop that calculates the sum of all numbers from 1 to 100.
//    Hint: Initialize a sum variable to 0 and add each number in the loop.
//    [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)
i = 0
sum = 0
for(i = 0; i <= 100; i++) {
    sum += i
    if(i === 100) {
        break;
    }
}
console.log(sum);
// 5. Create a while loop that prints a countdown from 10 to "Blast off!".
//    Hint: Start with a counter at 10 and decrement it in each iteration.
//    [Learn more about while loops](https://www.w3schools.com/js/js_loop_while.asp)
i = 10
while (i !== 0) {
    i -= 1
    console.log(i);
    if (i === 0) {
  
    }
}
console.log(`Blast off!`);
// 6. Use a for loop to print the first 10 numbers in the Fibonacci sequence.
//e.g. 0, 1, 1, 2, 3, 5, 8, 13
//    Hint: Start with two variables for the first two numbers, then calculate the next.
//    [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)
let FiboNums = [1, 2];

for (let i = FiboNums.length; i < 10; i++) { 
    let nextNumber = FiboNums[i - 1] + FiboNums[i - 2]; 
    FiboNums.push(nextNumber);
}
console.log(FiboNums);

// 7. Write a do...while loop that generates random numbers between 1 and 6 (simulating a die roll) until it rolls a 3.
//    Hint: Use Math.random() and Math.floor() to generate random integers.
//    [Learn more about do...while loops](https://www.w3schools.com/jsref/jsref_dowhile.asp)
let dice;

do {
    dice = Math.floor(Math.random() * 6) + 1;
} while (dice !== 6);
console.log(`Dice got the result:`,dice);
// 8. Create a for loop that prints the multiplication table for the number 7 (up to 10).
//    Hint: Use the loop counter as one factor and 7 as the other.
//    [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)
i = 7
sum = 0
for (i = 7; i < 10; i++) {
    sum += i * i
}
console.log(sum);

// 9. Use a while loop to find the first number greater than 1000 that is divisible by both 3 and 7.
//    Hint: Start at 1001 and use the modulus operator (%) to check divisibility.
//    [Learn more about while loops](https://www.w3schools.com/js/js_loop_while.asp)
i = 1001
while (true) {
    if (i % 3 === 0 && i % 7 === 0) {
        break;
    }
    i++;
}
console.log(i);

// 10. Write a for loop that calculates the factorial of a given number.
//     Hint: Start with a result of 1 and multiply by each number up to the given number.
//     [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)
let factoNum = 1;
for (let i = 9; i !== 0; i--) {
    factoNum = factoNum * i; 
}
console.log(`The factorial is ${factoNum}`);


// 11. Create a do...while loop that asks the user to guess a secret number between 1 and 20, giving "higher" or "lower" hints.
//     Hint: Generate a random number at the start and compare it with the user's guess.
//     [Learn more about do...while loops](https://www.w3schools.com/jsref/jsref_dowhile.asp)
let guessNum = 10
let secretNum = 10;

do {
    guessNum = parseInt(guessNum);

    if (guessNum > secretNum) {
        console.log(`Lower...`);
        guessNum = 10
        } else if (guessNum < secretNum) {
        console.log(`Higher...`);
        guessNum = 10
        } else {
        console.log(`Correct`);
    }
} while (guessNum !== secretNum);

// 12. Use a for loop to check if a given number is prime.
//     Hint: Check if the number is divisible by any integer from 2 to its square root.
//     [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)
for (let num = 2; num < 10; num++) {
    let isPrime = true;

    if (num === 1) {
        isPrime = false; // 1 is not a prime number
    } else {
        for (let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j === 0) {
                isPrime = false; // Found a divisor, so not prime
                break;
            }
        }
    }

    if (isPrime) {
        console.log(`prime number: ${num}`);
    } else {
    }
}

// 13. Write a while loop that converts a decimal number to its binary representation.
//     Hint: Repeatedly divide by 2 and keep track of the remainders.
//     [Learn more about while loops](https://www.w3schools.com/js/js_loop_while.asp)
let decimalNumber = 13;
let binary = '';
num = decimalNumber;

if (num === 0) {
    binary = '0';
} else {
    while (num > 0) {
        let remainder = num % 2;
        binary = remainder + binary;
        num = Math.floor(num / 2);   
    }
}
console.log(`binary of:${decimalNumber}, is ${binary}`);


// 14. Create a for loop that prints a triangle pattern of numbers:
//     ```
//     1
//     22
//     333
//     4444
//     55555
//     ```
//     Hint: Use nested loops - one for rows and one for columns.
//     [Learn more about nested loops](https://www.w3schools.com/js/js_loop_for.asp)
num = '1'
i; 
for (i = 1; i <= 5; i++) {
    console.log(num);
    num += (i + 1).toString(); 
}

// 15. Use a do...while loop to implement a simple calculator that performs operations until the user chooses to exit.
//     Hint: Use prompt() to get user input for numbers and operations.
//     [Learn more about do...while loops](https://www.w3schools.com/jsref/jsref_dowhile.asp)
isUserNum = '64'
do {
    if (isUserNum === typeof String) {
        isUserNum = '64'
        } else console.log(`Invalid input`);
    isUserNum = parseFloat(isUserNum)
    isUserNum = isUserNum*isUserNum
    isUserExit = `yes`
}while (isUserExit === `no`)

console.log(`The result of your number is: ${isUserNum}`);

// 16. Write a for loop that finds the greatest common divisor (GCD) of two numbers.
//     Hint: Use the Euclidean algorithm: repeatedly replace the larger number with the remainder of the larger divided by the smaller.
//     [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)
let numberA = 48;
let numberB = 18;
let gcd = 1;

for (let i = 1; i <= numberA && i <= numberB; i++) {
    if (numberA % i === 0 && numberB % i === 0) {
        gcd = i; 
    }
}
console.log(`The GCD of ${numberA} and ${numberB} is ${gcd}`);

// 17. Create a while loop that implements the Caesar cipher for a given string and shift value.
//     Hint: Use charCodeAt() and String.fromCharCode() to manipulate character codes.
//     [Learn more about while loops](https://www.w3schools.com/js/js_loop_while.asp)

// 18. Use a for loop to print the first n numbers in the sequence: 2, 4, 8, 16, 32, ...
//     Hint: Start with 2 and multiply by 2 in each iteration.
//     [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)
i;
let j = 2; 

for (i = 1; i <= 5; i++) {
    console.log(`this is exercise 18: ${j}`);
    j = j * 2; 
}
// 19. Write a do...while loop that simulates flipping a coin until it lands on heads 3 times in a row.
//     Hint: Use Math.random() to simulate a coin flip and keep a counter for consecutive heads.
//     [Learn more about do...while loops](https://www.w3schools.com/jsref/jsref_dowhile.asp)
coinFlip = 0; 
let randomNum;
do {
    randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        console.log("Heads");
        coinFlip += 1;
    } else {
        console.log("Tails");
        coinFlip = 0;
    }
} while (coinFlip !== 3);
console.log("3 Heads in a row...");

// 20. Create a for loop that calculates the sum of the squares of numbers from 1 to n.
//     Hint: Square each number and add it to a running total.
//     [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)
i = 0
let sumTotal = 0
for (i = 0; i <= 6; i++) {

    sumTotal += i*i
    console.log(sumTotal);
}
// 21. Use a while loop to find the smallest number of terms in the series 1 + 2 + 3 + ... that exceeds a given value.
//     Hint: Keep adding terms to a sum until it exceeds the given value.
//     [Learn more about while loops](https://www.w3schools.com/js/js_loop_while.asp)

// 22. Write a for loop that prints a diamond pattern of asterisks.
//     Hint: Use nested loops and pay attention to spaces and asterisks in each row.
//     [Learn more about nested loops](https://www.w3schools.com/js/js_loop_for.asp)

// 23. Create a do...while loop that implements a guessing game where the computer tries to guess a number the user is thinking of.
//     Hint: Use binary search algorithm to guess efficiently.
//     [Learn more about do...while loops](https://www.w3schools.com/jsref/jsref_dowhile.asp)
let pcGuessNum = Math.ceil(Math.random() * 5);
let userNum = 4

do {
    if (pcGuessNum === userNum) {
        console.log(pcGuessNum)
        console.log(`PC correct.`)
        break;
    } else; console.log(`PC didn't success.`)
    break;

} while (pcGuessNum !== userNum)
// 24. Use a for loop to calculate the sum of the series: 1 - 1/2 + 1/3 - 1/4 + ... for n terms.
//     Hint: Use the loop counter in the denominator and alternate between adding and subtracting.
//     [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)

// 25. Write a while loop that simulates the Collatz conjecture: start with a number n, if it's even, divide it by 2, if it's odd, multiply it by 3 and add 1. Repeat until you reach 1.
//     Hint: Use an if-else statement inside the loop to handle even and odd cases.
//     [Learn more about while loops](https://www.w3schools.com/js/js_loop_while.asp)

// Remember to use only concepts that have been covered so far, focusing on loops and basic arithmetic operations!
