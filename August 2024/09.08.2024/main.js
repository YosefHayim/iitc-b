"use strict";

// 1. Combine and Print
// Combine two strings and print the result.
let stringA = "Hello";
let stringB = "World";
function combineStrings(string1,string2) {
    let string3 = string1+' '+string2
    console.log(string3);
}
// combineStrings(stringA,stringB)

// 2. Add Numbers
// Add two numbers and print the result.
function addNumbers() {
    let num1 = 10;
    let num2 = 20;
    console.log(num1+num2);
    
}
// addNumbers()

// 3. Boolean Check
// Print "True" if the boolean variable is true, otherwise print "False".
function checkBoolean() {
    let isTrue = true;
    if (isTrue === true){
        console.log(true);
        
    } else {
        console.log(false);
        
    }
}
// checkBoolean()

// 4. Concatenate Different Types
// Concatenate a number and a string, then print the result.
function concatNumberString() {
    let num = 100;
    let str = " is a big number";
    console.log(num+str);
    
}
// concatNumberString()

// 5. Undefined Check
// Check if a variable is undefined, and print "Undefined" if it is.
function checkUndefined() {
    let someVariable;
    if (someVariable === undefined) {
        console.log("This is undefined");
        
    }
}
// checkUndefined()

// 6. Null Assignment
// Assign null to a variable and print it.
function assignNull() {
    let emptyVariable = null;
   console.log(emptyVariable);
   
}
// assignNull()

// 7. Array with Different Types
// Create an array with different data types (string, number, boolean) and print each element.
function arrayDifferentTypes() {
    let mixedArray = ["Hello", 42, false];
    for (let i = 0; i < mixedArray.length; i++) {
        console.log(mixedArray[i]);
        
    }
}
// arrayDifferentTypes()

// 8. Increment Number
// Increment a number by 1 and print the result.
function incrementNumber() {
    let counter = 7;
    counter++
    console.log(counter);
    
}
// incrementNumber()

// 9. Boolean to Number
// Convert a boolean value to a number and print it.
function booleanToNumber() {
    let isTrue = false;
    isTrue = 10
    console.log(isTrue);
}
// booleanToNumber()

// 10. Compare Numbers
// Compare two numbers and print "Equal" if they are equal, otherwise print "Not Equal".
function compareNumbers() {
    let num1 = 15;
    let num2 = 20;
    if (num1 === num2) {
        console.log("Equal");
        
    } else {
        console.log("Not Equal");
        
    }
}
// compareNumbers()
