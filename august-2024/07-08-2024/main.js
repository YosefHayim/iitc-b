"use strict";

// Easy to Medium

// 1. Sum of Array
const numbers1 = [1, 2, 3, 4, 5];
// TODO: Write a function to sum all numbers in an array
function sumArray(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    console.log(sum);
    
    
}
// sumArray(numbers1)

// 2. Reverse String
const string1 = "hello";
// TODO: Write a function to reverse a string
function reverseString(str) {
    let reverseWord = ``
    for (let i = str.length -1; i >= 0; i--) {
        reverseWord += `${str[i]}`
    }
    console.log(reverseWord);
    
}
// reverseString(string1)

// 3. Check Palindrome
const string2 = "is man";
// TODO: Write a function to check if a string is a palindrome
function isPalindrome(str) {
    let reverseWord = ``
    for (let i = str.length -1; i >= 0; i--) {
        reverseWord += `${str[i]}`
    }
    if (str === reverseWord) {
        console.log(`The words: "${str}" and "${reverseWord}" are matched.`);
        
    } else {
        console.log(`The words: "${str}" and "${reverseWord}" are  NOT matched.`);
    }
    
}
// isPalindrome(string2)

// 4. Remove Duplicates
const numbers2 = [1, 2, 2, 3, 4, 4, 5];
// TODO: Write a function to remove duplicates from an array
function removeDuplicates(arr) {
    let numbersWithoutDuplicates = [];
    for (let i = 0; i < arr.length; i++) {
        if (numbersWithoutDuplicates.indexOf(arr[i]) === -1) {
            numbersWithoutDuplicates.push(arr[i]);
        } else {
            console.log(`Number is already inside the array: "${arr[i]}"`);
        }
    }
    console.log(numbersWithoutDuplicates);
}
// removeDuplicates(numbers2);

// 5. Find Maximum
const numbers3 = [2, 10, 5, 8, 1, 7, 4, 3, 9, 67, 3, 8, 2, 10, 5, 6, 1, 4, 9];
// TODO: Write a function to find the maximum number in an array
function findMax(arr) {
    let highestNum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highestNum) {
            highestNum = arr[i]

        } else if (highestNum > arr[i]) {
            highestNum = highestNum
        } else {
            highestNum = highestNum
        }
    } 
    console.log(highestNum); 
}
// findMax(numbers3)

// 6. Average Age
const people = [
  { name: "Tom", age: 25 },
  { name: "Sara", age: 30 },
  { name: "Jim", age: 35 },
];
// TODO: Write a function to calculate the average age of people
function averageAge(people) {
    let sum = 0
    for (let i = 0; i < people.length; i++) {
        sum += people[i].age
        
    }
    sum = sum / people.length
    console.log(`average age is:`,sum);
    
}
// averageAge(people)

// 7. Filter by Category
const items = [
  { name: "Tablet", category: "electronics" },
  { name: "Shoes", category: "clothing" },
  { name: "Camera", category: "electronics" },
];
// TODO: Write a function to filter items by category
function filterByCategory(items, category) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].category === category) {
            console.log(items[i].name);
            
        }
        
    }

}
// filterByCategory(items, "clothing")

// 8. Count Vowels
const string3 = "josephino";
// TODO: Write a function to count the number of vowels in a string
function countVowels(str) {
    let soundsLetters = [`A`,`E`,`O`,`U`,`I`,`a`,`e`,`o`,`u`,`i`]
    let VowelsCount = 0
    for (let i = 0; i < str.length; i++) {
        if(soundsLetters.indexOf(str[i]) === -1) {

        } else {
            console.log(`The letter "${str[i]}" is a vowel`);
            
            VowelsCount++
        }
    
    }
    console.log(`Total count of vowels:`,VowelsCount);
    
}
// countVowels(string3)

// 9. Merge Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
// TODO: Write a function to merge two arrays
function mergeArrays(arr1, arr2) {
    let arr3 = arr1.concat(arr2)
    console.log(arr3);
    
    
}
// mergeArrays(array1,array2)

// 10. Product of Array
const numbers4 = [1, 2, 3, 4, 5];
// TODO: Write a function to find the product of all numbers in an array
function productArray(numbers) {
    let currentNum = 1
    let currentValue = 0
    for (let i = 1; i <= numbers4.length; i++) {
        console.log(`this is round ${i}:`,currentValue = numbers[i] * currentNum)
        currentNum++
    }
    console.log(currentNum);
    
}
// productArray(numbers4)

// Medium

// 11. Find Longest Word
const string4 = "The quick brown fox jumps over the lazy dog";

// TODO: Write a function to find the longest word in a string
function longestWord(str) {
    let arrayWord = str.split(" "); // Split the string into words
    let longestWord = ""; // Initialize the longest word variable

    for (let i = 0; i < arrayWord.length; i++) { // Loop through the array of words
        if (arrayWord[i].length > longestWord.length) { // Compare lengths
            longestWord = arrayWord[i]; // Update the longest word
        }
    }

    console.log(`The longest word is:`, longestWord); // Log the longest word
    return longestWord; // Return the longest word
}

// longestWord(string4); // Should return "jumps"



// 12. Count Words
const string5 = "The quick brown fox jumps over the lazy dog";
// TODO: Write a function to count the number of words in a string
function countWords(str) {
    let arrayWord = str.split(" "); 
    let wordsCount = 0
    for (let i = 0; i < arrayWord.length; i++) {
        wordsCount++
        
    }
    console.log(`Total words count:`,wordsCount);
    
}
// countWords(string5)

// 13. Sort Array
const numbers5 = [5, 3, 8, 1, 2];
// TODO: Write a function to sort an array of numbers in ascending order
function sortArray(arr) {
    arr.sort(function(a, b){return a-b})
    console.log(arr);
    
    
}
// sortArray(numbers5)

// 14. Flatten Array
const nestedArray = [[1, 2], [3, 4], [5, 6]];
// TODO: Write a function to flatten a nested array
function flattenArray(arr) {
    let flatArray = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            flatArray.push(arr[i][j])
        }
        console.log(flatArray);
        
    }
}
// flattenArray(nestedArray)

// 15. Capitalize Words
const string6 = "the quick brown fox";
// TODO: Write a function to capitalize the first letter of each word in a string
function capitalizeWords(str) {
    let splitWord = str.split(" ");
    let arrayWords = [];
    for (let i = 0; i < splitWord.length; i++) {
        let word = splitWord[i];
        // Capitalize the first letter of the word
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        // Push the capitalized word into arrayWords
        arrayWords.push(capitalizedWord);
    }
    // Join the array back into a string
    let result = arrayWords.join(" ");
    console.log(result);
}
// capitalizeWords(string6);

// 16. Find Common Elements
const array3 = [1, 2, 3, 4, 5];
const array4 = [4, 5, 6, 7, 8];
// TODO: Write a function to find common elements in two arrays
function findCommonElements(arr1, arr2) {
    let matchedElements = []
    for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                matchedElements.push(arr1[i])
            }
            
        }
            
        }
        console.log(`Matched numbers are:`,matchedElements);
    }
    
// findCommonElements(array3,array4)

// 17. Sum of Even Numbers
const numbers6 = [1, 2, 3, 4, 5, 6];
// TODO: Write a function to find the sum of even numbers in an array
function sumEvenNumbers(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i]
        }
    }
    console.log(sum);
    
}
// sumEvenNumbers(numbers6)

// 18. Count Occurrences
const numbers7 = [1, 2,2,2,2,2,2,2,2, 3, 3, 3, 4, 4, 4, 4];
// TODO: Write a function to count the occurrences of each element in an array
function countOccurrences(arr) {
    let count = {}

    for (let i = 0; i < arr.length; i++) {
        count[`Num Count Of ${arr[i]}`] = 0;

        for (let j = 0; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                count[`Num Count Of ${arr[i]}`] += 1



            }
        }
    }
    console.log(count);
}
// countOccurrences(numbers7)

// 19. Remove Vowels
const string7 = "hello world";
// TODO: Write a function to remove vowels from a string
function removeVowels(str) {
    let newWord = ``
    let soundsLetters = [`A`,`E`,`O`,`U`,`I`,`a`,`e`,`o`,`u`,`i`]
    for (let i = 0; i < str.length; i++) {
        if (soundsLetters.includes(str[i])) {
            continue
        } else {
            newWord += `${str[i]}`
        }
    }
    console.log(newWord);   
}
// removeVowels(string7)

// 20. Group by Property
const vehicles = [
  { model: "Sedan", type: "car" },
  { model: "Roadster", type: "motorcycle" },
  { model: "SUV", type: "car" },
];
// TODO: Write a function to group vehicles by type
function groupByProperty(vehicles, property) {
    for (let i = 0; i < vehicles.length; i++) {
        if (vehicles[i].type === property) {
            console.log(vehicles[i]);
        }
    }
    return vehicles
}
// groupByProperty(vehicles, "car")

// Hard

// 23. Find Missing Number
const numbers8 = [1, 2, 4, 5];
// TODO: Write a function to find the missing number in an array of 1 to n
function findMissingNumber(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + arr[i+1] !== -1) {
            console.log(`The missing number is:`,arr[i] + arr[i+1]);
            
        }
        
    }
}
// findMissingNumber(numbers8,)

// 25. Matrix Transpose
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
// TODO: Write a function to transpose a matrix
function transposeMatrix(matrix) {
    for(let i = 0; i < matrix.length; i++) {
        let row = " "
        for (let j = 0; j < matrix.length; j++) {
            row += ` ${matrix[j][i]} `            
        }
        console.log(row);

    }
    
}
// transposeMatrix(matrix)
