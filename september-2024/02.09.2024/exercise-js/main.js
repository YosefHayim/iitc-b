// // 1. Sum of Two Numbers
// function sum(a, b) {
//     return a + b
// }

// // Example usage:
// console.log("Sum of Two Numbers:");
// console.log(sum(3, 4)); // Expected output: 7
// console.log(sum(10, 5)); // Expected output: 15
// console.log("\n");

// // 2. Even or Odd
// function isEven(num) {
//     if (num % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
// }

// // Example usage:
// console.log("Even or Odd:");
// console.log(isEven(4)); // Expected output: true
// console.log(isEven(7)); // Expected output: false
// console.log("\n");

// // 3. Reverse a String
// function reverseString(str) {
//    let reverseString = ''
//    for (let i = str.length - 1; i > 0; i--){
//         reverseString += str[i]
//    }
//    return reverseString
// }

// // Example usage:
// console.log("Reverse a String:");
// console.log(reverseString("hello")); // Expected output: "olleh"
// console.log(reverseString("JavaScript")); // Expected output: "tpircSavaJ"
// console.log("\n");

// // 4. Find the Largest Number in an Array
// function findLargest(arr) {
//     let currentHighestNum = 0
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] > currentHighestNum) {
//             currentHighestNum = arr[i]
//         }
//     }
//     return console.log(`Highest number is: ${currentHighestNum}`);
    
// }

// // Example usage:
// console.log("Find the Largest Number in an Array:");
// console.log(findLargest([1, 5, 3, 9, 2])); // Expected output: 9
// console.log(findLargest([10, 22, 4, 15])); // Expected output: 22
// console.log("\n");

// 5. FizzBuzz
// function fizzBuzz(n) {
//     for (let i = 1; i < n + 1; i++){
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz'); 
//         } else if (i % 3 === 0) {
//             console.log('Fizz');
            
//         } else if (i % 5 === 0) {
//             console.log('Buzz');
            
//         }
        
//         else {
//             console.log(i);
            
//         }

//         }
//     }
    

// Example usage:
// fizzBuzz(15);
// Expected output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// console.log("\n");

// // 6. Palindrome Checker
// function isPalindrome(str) {
//     let reverseStr = ''
//     for(let i = str.length - 1; i >= 0; i--){
//         reverseStr += str[i]
//     }
//     if (reverseStr === str){
//         return true
//     } else {
//         return false
//     }
// }

// // Example usage:
// console.log("Palindrome Checker:");
// console.log(isPalindrome("racecar")); // Expected output: true
// console.log(isPalindrome("hello")); // Expected output: false
// console.log("\n");

// // 7. Count the Vowels in a String
// function countVowels(str) {
//     let vowels = ['a','e','o','u','i','A','E','O','U','I']
//     let vowelsCount = 0
//     for (let i = 0; i < str.length; i++){
//         for (let j = 0; j < vowels.length; j++){
//             if (str[i] === vowels[j]) {
//                 vowelsCount++
//             }
//         }
//     }
//     return vowelsCount
// }

// // Example usage:
// console.log("Count the Vowels in a String:");
// console.log(countVowels("hello")); // Expected output: 2
// console.log(countVowels("JavaScript")); // Expected output: 3
// console.log("\n");

// 8. Remove Duplicates from an Array
// function removeDuplicates(arr) {
    
//         return [...new Set(arr)]

//         }

// // Example usage:
// console.log("Remove Duplicates from an Array:");
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected output: [1, 2, 3, 4, 5]
// console.log(removeDuplicates(["a", "b", "a", "c", "b"])); // Expected output: ["a", "b", "c"]
// console.log("\n");

// 9. Find the Factorial of a Number
// function factorial(n) {
//     let currentResult = 1
//     for (let i = 1; i < n; i++){        
//         currentResult += i * currentResult
//     }
//     return currentResult
// }

// // Example usage:
// console.log("Find the Factorial of a Number:");
// console.log(factorial(5)); // Expected output: 120
// console.log(factorial(7)); // Expected output: 5040
// console.log("\n");
