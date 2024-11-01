// # JavaScript Array Exercises

// 1. Create an array called `fruits` with three favorite fruits.
//    Hint: Use square brackets `[]` to create an array.
//    [Learn more about arrays](https://www.w3schools.com/js/js_arrays.asp)
 let fruits = [`Orange juice`,`Peach`,`Watermelon`]
// 2. Add a new fruit to the end of the `fruits` array using the `push()` method.
//    Hint: `arrayName.push(newElement)` adds an element to the end.
//    [Learn more about push()](https://www.w3schools.com/jsref/jsref_push.asp)
fruits.push(`Apple`,`Grapes`)
// 3. Remove the last fruit from the `fruits` array using the `pop()` method and store it in a variable called `lastFruit`.
//    Hint: `var lastItem = arrayName.pop()` removes and returns the last element.
//    [Learn more about pop()](https://www.w3schools.com/jsref/jsref_pop.asp)
var lastFruit = fruits.pop(`Apple`)
fruits.pop(`lastFruit`)
console.log(fruits);
// 4. Create an array of numbers from 1 to 5. Then, use `console.log()` to print the third element of this array.
//    Hint: Array indices start at 0, so the third element is at index 2.
//    [Learn more about accessing array elements](https://www.w3schools.com/js/js_arrays.asp)
let numbers = [1,2,3,4,5]
console.log(`this is the 2nd index which is number`,numbers[2]);
// 5. Change the second element of your `fruits` array to "kiwi".
//    Hint: Use array indexing to modify an element: `arrayName[1] = "kiwi"`.
//    [Learn more about changing array elements](https://www.w3schools.com/js/js_arrays.asp)
fruits[0] = `Kiwi`
console.log(fruits);
// 6. Create an empty array called `colors`. Then add "red", "green", and "blue" to it using the `push()` method.
//    Hint: You can chain multiple `push()` calls or use one with multiple arguments.
//    [Learn more about push()](https://www.w3schools.com/jsref/jsref_push.asp)
let colors = []
colors.push(`blue`,`black`,`yellow`,`red`,`green`)
console.log(colors);
// 7. Remove the first element from your `colors` array using the `shift()` method.
//    Hint: `arrayName.shift()` removes the first element and returns it.
//    [Learn more about shift()](https://www.w3schools.com/jsref/jsref_shift.asp)
colors.shift([0])
console.log("I removed the first index inside the array of colors:", colors);
// 8. Add "yellow" to the beginning of your `colors` array using the `unshift()` method.
//    Hint: `arrayName.unshift(newElement)` adds an element to the beginning.
//    [Learn more about unshift()](https://www.w3schools.com/jsref/jsref_unshift.asp)
colors.unshift(`brown`)
console.log(colors);
// 9. Create an array of numbers and use a `for` loop to calculate the sum of all numbers in the array.
//    Hint: Initialize a sum variable to 0, then add each array element to it in the loop.
//    [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Total sum is", sum);
// 10. Use the `indexOf()` method to find the position of "green" in your `colors` array.
//     Hint: `arrayName.indexOf(element)` returns the index of the first occurrence of the element.
//     [Learn more about indexOf()](https://www.w3schools.com/jsref/jsref_indexof_array.asp)
let findIndex = colors.indexOf(`green`)
console.log(`the index position of the color green is:`, findIndex);
// 11. Create an array of five random numbers. Then use a `for` loop to find and console.log the largest number in the array.
//     Hint: Initialize a variable with the first element, then compare it with other elements in the loop.
//     [Learn more about Math.random()](https://www.w3schools.com/js/js_random.asp)
let randomNumbers = [23, 89, 45, 12, 67];
let largestNumber = randomNumbers[0];
for (let i = 1; i < randomNumbers.length; i++) {
    if (randomNumbers[i] > largestNumber) {
        largestNumber = randomNumbers[i];
    }
}
console.log("The largest number is:", largestNumber);

// 12. Use the `slice()` method to create a new array containing the second and third elements of your `fruits` array.
//     Hint: `arrayName.slice(startIndex, endIndex)` extracts a portion of an array.
//     [Learn more about slice()](https://www.w3schools.com/jsref/jsref_slice_array.asp)
let Secondfruits = fruits.slice(1,2)
console.log(Secondfruits);
// 13. Create an array of numbers. Use the `filter()` method to create a new array containing only the even numbers.
//     Hint: The callback function for `filter()` should return `true` for even numbers.
//     [Learn more about filter()](https://www.w3schools.com/jsref/jsref_filter.asp)
numbers = [1,4,3,9,14,435,91,20,88,23]
console.log(numbers);

let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;});
console.log(evenNumbers);
// 14. Use the `join()` method to convert your `colors` array into a string where colors are separated by commas.
//     Hint: `arrayName.join(separator)` joins all elements into a string.
//     [Learn more about join()](https://www.w3schools.com/jsref/jsref_join.asp)
let Combine = colors.join()
console.log(Combine);
// 15. Create two arrays of numbers. Use the `concat()` method to combine them into a single array.
//     Hint: `array1.concat(array2)` combines two arrays.
//     [Learn more about concat()](https://www.w3schools.com/jsref/jsref_concat_array.asp)
let NumberOneArray = [1,3,5,7,9]
let NumberTwoArray = [2,4,6,8,10,12]
let NumbersArrays = NumberOneArray.concat(NumberTwoArray)
console.log(NumbersArrays);
// 16. Use the `reverse()` method to reverse the order of elements in your `fruits` array.
//     Hint: `arrayName.reverse()` reverses the array in place.
//     [Learn more about reverse()](https://www.w3schools.com/jsref/jsref_reverse.asp)
fruits = fruits.reverse()
console.log(fruits);
// 17. Create an array of names. Use the `map()` method to create a new array where each name is prefixed with "Hello, ".
//     Hint: The callback function for `map()` should return the modified string.
//     [Learn more about map()](https://www.w3schools.com/jsref/jsref_map.asp)
let names = ['Michelle', 'Karin', 'Yoseph', 'Jennifer'];
let newNames = names.map(function(name) {
    return `Hello ${name}`;
});
console.log(newNames); 

// 18. Use the `every()` method to check if all numbers in an array are greater than 0.
//     Hint: The callback function for `every()` should return a boolean.
//     [Learn more about every()](https://www.w3schools.com/jsref/jsref_every.asp)
numbers = [1, 2, 3, 4, 5];

let allPositive = numbers.every(function(number) {
    return number > 0;
});

console.log(allPositive)

// 19. Create an array of numbers. Use the `find()` method to get the first number greater than 10.
//     Hint: The callback function for `find()` should return `true` for the desired element.
//     [Learn more about find()](https://www.w3schools.com/jsref/jsref_find.asp)
numbers = [1,3,4,6,8,9,421]

let found = numbers.find(function(element) {
    return element > 10;
});

console.log(found);
// 20. Use the `some()` method to check if your `fruits` array contains the fruit "banana".
//     Hint: The callback function for `some()` should return `true` if the element is "banana".
//     [Learn more about some()](https://www.w3schools.com/jsref/jsref_some.asp)
let foundFruit = fruits.some(function(element) {
    return element === 'banana';
});
console.log(foundFruit)
// 21. Create an array of numbers. Use the `reduce()` method to calculate the product of all numbers in the array.
//     Hint: The callback function for `reduce()` should multiply the accumulator by the current value.
//     [Learn more about reduce()](https://www.w3schools.com/jsref/jsref_reduce.asp)
numbers = [1, 3, 4, 5, 6, 78];
let calculate = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(calculate);
// 22. Use a `for` loop to create an array containing the squares of numbers from 1 to 10.
//     Hint: Initialize an empty array and use `push()` inside the loop to add squared values.
//     [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)
let SquareNumbers = [];
for (let i = 1; i <= 10; i++) {
    SquareNumbers.push(i ** 2);
}
console.log(`Total value of square numbers are:`+SquareNumbers);

// 23. Create an array of words. Use the `filter()` method to create a new array containing only words with more than 5 letters.
//     Hint: The callback function for `filter()` should check the length of each word.
//     [Learn more about filter()](https://www.w3schools.com/jsref/jsref_filter.asp)
let words = ['elephant', 'giraffe', 'computer', 'avocado', 'pineapple', 'mountain', 'happiness', 'umbrella', 'notebook', 'building'];
let wordsFiveL = words.filter(function(word) {
    return word.length > 5;
});
console.log(wordsFiveL);
// 24. Use the `includes()` method to check if your `colors` array includes the color "purple".
//     Hint: `arrayName.includes(element)` returns `true` if the element is in the array.
//     [Learn more about includes()](https://www.w3schools.com/jsref/jsref_includes_array.asp)
let checkColors = colors.includes('purple');
if (checkColors) {
    console.log('True');
} else {
    console.log('False');
}
// 25. Create a 2D array representing a tic-tac-toe board. Fill it with "X", "O", and empty strings. Then, write a function that console.logs the board in a readable format.
//     Hint: Use nested arrays to create a 2D array. Use nested loops to print the board.
//     [Learn more about multidimensional arrays](https://www.w3schools.com/js/js_array_methods.asp)
let ticTacToe = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
 ticTacToe[0][0] = 'X'
 ticTacToe[1][0] = 'X'
 ticTacToe[2][0] = 'X'
console.log(ticTacToe);
// Remember to test your code and experiment with different inputs!

