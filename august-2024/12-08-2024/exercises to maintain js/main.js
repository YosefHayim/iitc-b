"use strict";


// Exercise 3: Conditional Statements
// 1. Write a function that checks if a number is positive, negative, or zero.
// Expected Output: 
// Input: 10 -> Output: "Positive"
// Input: -5 -> Output: "Negative"
// Input: 0 -> Output: "Zero"
function isNumber(number) {
    if (number > 0) {
        console.log(`The number ${number} is positive.`);
    } else if (number < 0) {
        console.log(`The number ${number} is negative.`);
    } else {
        console.log(`The number is zero.`);
    }
}
// isNumber(10)

// Exercise 4: Loops
// 1. Write a loop that prints numbers from 1 to 10.
// Expected Output: 
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
function tenLoop (n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
        
    }
}
// tenLoop(11)

// Exercise 5: Nested Loops
// 1. Write a nested loop to print a 3x3 matrix of asterisks.
// Expected Output: 
// ***
// ***
// ***
function nestLoop(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++){
            row += `* ` + `* ` + `* `+ `\n`
        }
        console.log(row);
        
    }
    
}
// nestLoop(3)

// Exercise 6: Arrays
// 1. Create an array with 5 elements and print each element using a loop.
// Expected Output: 
// Element 0: value1
// Element 1: value2
// Element 2: value3
// Element 3: value4
// Element 4: value5
function arrays(n) {
    for (let i = 0; i < n; i++) {
        console.log(`Element${i}: value${i+1}`);
        
    }
}
// arrays(5)

// Exercise 7: Functions
// 1. Write a function that takes a string and returns the string in reverse.
// Expected Output: 
// Input: "hello" -> Output: "olleh"
let word = `hello`
function reverseString (str) {
    let reverseWord = ``
    for(let i = str.length -1; i >= 0; i--) {
        reverseWord += str[i]
        

    }
    console.log(reverseWord);
    
}
// reverseString(word)

// Exercise 8: Objects
// 1. Create an object with properties for a person's name, age, and occupation.
// 2. Access each property and print them.
// Expected Output: 
// Name: John Doe
// Age: 30
// Occupation: Engineer
let person = {
    name: 'name',
    age: 'age',
    occupation: 'occupation'
}
// person.name = 'josephino'
// person.age = 24
// person.occupation = 'js'
// console.log(person);


// Exercise 9: If-Else If-Else
// 1. Write a function that takes a score and returns a grade (A, B, C, D, F).
// Expected Output: 
// Input: 85 -> Output: "B"
// Input: 92 -> Output: "A"
// Input: 70 -> Output: "C"
let score = 80
function scoresResults(value) {
    if (value >= 85) {
        console.log('B');
        
    } else if (value >= 92) {
        console.log('A');
        
    } else if (value >= 70) {
        console.log('C');
        
    }
}
// scoresResults(score)

// Exercise 10: String Manipulation
// 1. Write a function that takes a sentence and returns the number of words in it.
// Expected Output: 
// Input: "This is a test." -> Output: 4
let sentence = "This is a test."
function spaceCount(str) {
    let spaceWordCount = 1
    for (let i = 0; i < str.length; i ++){
        console.log(str[i]);
        if (str[i] === ' ') {
            spaceWordCount++
            
        } else{
            console.log(`the string:${i} doesnt count as a space.`);
            
        }
        
    }
    console.log(`Total words found are:${spaceWordCount}`);
    

}
// spaceCount(sentence)