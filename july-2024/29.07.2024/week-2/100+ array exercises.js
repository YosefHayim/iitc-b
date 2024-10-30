// # 100+ Array Exercises for JavaScript with Hints and W3Schools Links

// ## Basic Syntax and Declaration
// [W3Schools Array Declaration](https://www.w3schools.com/js/js_arrays.asp)

// 1. Declare an empty array called `fruits`.
//    Hint: Use square brackets `[]` to create an empty array.
let fruits = []
// 2. Create an array `numbers` with the values 1, 2, 3, 4, and 5.
//    Hint: Separate values with commas inside square brackets.
let numbers = [1,2,3,4,5]
// 3. Initialize an array `colors` with three string values: "red", "green", "blue".
//    Hint: Use quotes for string values in the array.
let colors = [`red`,`green`,`blue`]
// 4. Create an array `mixed` with different data types: a number, a string, and a boolean.
//    Hint: JavaScript arrays can hold multiple data types.
let mixedArray = [`yellow`,`potato`,1,`number`,503]
// 5. Declare an array `seasons` with the four seasons as string values.
//    Hint: Think about the names of the four seasons.
let seasons = [`winter`,`summer`,`spring`,`autumn`]
// ## Array Length
// [W3Schools Array Length](https://www.w3schools.com/js/js_array_length.asp)

// 6. Write a statement to print the length of the `numbers` array.
//    Hint: Use the `length` property of the array.
let printLengthNumbers = numbers.length
console.log(`The length of numbers arrays is:`,printLengthNumbers);
// 7. Create an array `emptyCheck` and write an if statement to check if it's empty.
//    Hint: An empty array has a length of 0.
let emptyCheck = []
emptyCheck = emptyCheck.length
console.log(emptyCheck);
if (emptyCheck === emptyCheck) {
    console.log(`This is empty:`,emptyCheck);
} else console.log(`This is not empty`);
// 8. Initialize an array `dynamic` with 5 elements and print its length.
//    Hint: The length will be equal to the number of elements.
let dynamic = [`pizza`,432,`53`,10,`hamburger`]
let dynamicRange = dynamic.length
console.log(dynamicRange);
// 9. Add an element to `dynamic` and print the new length.
//    Hint: Adding an element increases the length by 1.
let newLength = dynamic.push(`hi I am new`)
console.log(dynamic);
// 10. Remove an element from `dynamic` and print the updated length.
//     Hint: Removing an element decreases the length by 1.
let RemoveLength = dynamic.shift()
console.log(dynamic);
// ## Accessing Elements
// [W3Schools Accessing Array Elements](https://www.w3schools.com/js/js_array_access.asp)

// 11. Print the first element of the `colors` array.
//     Hint: Array indices start at 0.
console.log(colors[0]);
// 12. Access and display the last element of the `seasons` array.
//     Hint: Use `array.length - 1` to get the last index.
console.log(seasons.length -1);
// 13. Print the middle element of the `numbers` array.
//     Hint: Calculate the middle index using `Math.floor()`.
let lengthNumb = numbers.length
let dividebyTwo = lengthNumb / 2
let roundMiddle = Math.floor(dividebyTwo)
let numbersMidIndex = numbers[roundMiddle]
console.log(numbersMidIndex);
// 14. Try to access an index that doesn't exist in `fruits` and print the result.
//     Hint: Accessing a non-existent index returns `undefined`.
let indexNotExist = fruits[2]
console.log(indexNotExist);
// 15. Use a template literal to print "The second color is [second color]" using the `colors` array.
//     Hint: Use `${}` in template literals to embed expressions.
let selectColor = (`the second color is: ${colors[1]}`)
console.log(selectColor);
// ## Modifying Elements
// [W3Schools Changing Array Elements](https://www.w3schools.com/js/js_array_methods.asp)

// 16. Change the first element of `fruits` to "apple".
//     Hint: Assign a new value using the index.
fruits[0] = `apple`
console.log(fruits);
// 17. Update the last element of `numbers` to be 10.
//     Hint: Use `array.length - 1` to get the last index.
numbers[length -1] = 10
console.log(numbers);
// 18. Double the value of the third element in the `numbers` array.
//     Hint: Multiply the current value by 2.
numbers[3] = numbers[3] * 2
console.log(numbers);
// 19. Change all elements in `colors` to uppercase.
//     Hint: Use a loop and the `toUpperCase()` method.
colors[0] = colors[0].toUpperCase()
colors[1] = colors[1].toUpperCase()
colors[2] = colors[2].toUpperCase()
console.log(colors);
// 20. Swap the first and last elements of the `seasons` array.
//     Hint: Use a temporary variable to hold one value during the swap.
seasons.push(`random season`)
console.log(seasons);
// ## Array Methods: push() and pop()
// [W3Schools Array push()](https://www.w3schools.com/jsref/jsref_push.asp)
// [W3Schools Array pop()](https://www.w3schools.com/jsref/jsref_pop.asp)

// 21. Add "orange" to the end of the `fruits` array using `push()`.
//     Hint: `push()` adds elements to the end of an array.
fruits.push(`orange`)
console.log(fruits);
// 22. Remove the last element from `numbers` using `pop()` and print the removed element.
//     Hint: `pop()` removes and returns the last element.
numbers.pop()
console.log(numbers);
// 23. Add three colors to `colors` in a single line using `push()`.
//     Hint: `push()` can accept multiple arguments.
colors.push(`brown`,`white`,`black`)
console.log(colors);
// 24. Create a loop that `push()`es numbers 1 to 5 into an empty array.
//     Hint: Use a for loop with `push()` inside.
let loopPush = []
i = 0
for (i; i <= 5; i++) {
    loopPush.push(i)
    console.log(loopPush);
}
// 25. Use `pop()` in a loop to empty an array and print each removed element.
//     Hint: Continue the loop while the array's length is greater than 0.
let popLoop = [5,4,3,2,1]
for (i = 5; i > 0; i--)
    popLoop.pop()
    console.log(`This is empty array`,popLoop);

// ## Array Methods: unshift() and shift()
// [W3Schools Array unshift()](https://www.w3schools.com/jsref/jsref_unshift.asp)
// [W3Schools Array shift()](https://www.w3schools.com/jsref/jsref_shift.asp)

// 26. Add "mango" to the beginning of `fruits` using `unshift()`.
//     Hint: `unshift()` adds elements to the beginning of an array.
fruits.unshift(`mango`)
console.log(fruits);
// 27. Remove the first element from `numbers` using `shift()` and print the removed element.
//     Hint: `shift()` removes and returns the first element.
let removedElement = numbers.shift()
console.log(`the element that was removed:`,removedElement);
// 28. Add three numbers to the beginning of `numbers` in a single line using `unshift()`.
//     Hint: Like `push()`, `unshift()` can accept multiple arguments.
numbers.unshift(200,400,500)
console.log(numbers);
// 29. Create a loop that `unshift()`s numbers 5 to 1 into an empty array.
//     Hint: Use a for loop that counts backwards.
let unshiftArray = []
i;
for (i = 5; i > 0; i--) {
    unshiftArray.unshift(i)
    console.log(`this has been added to the unshift array list:`,unshiftArray);
}
// 30. Use `shift()` in a loop to empty an array and print each removed element.
//     Hint: Similar to the `pop()` loop, but use `shift()` instead.
i;
for (i = 5; i >0; i--) {
    unshiftArray.shift()
    console.log(`empty array using shift():`,unshiftArray);
} 
// ## Array Methods: indexOf() and lastIndexOf()
// [W3Schools Array indexOf()](https://www.w3schools.com/jsref/jsref_indexof_array.asp)
// [W3Schools Array lastIndexOf()](https://www.w3schools.com/jsref/jsref_lastindexof_array.asp)

// 31. Find the index of "green" in the `colors` array.
//     Hint: `indexOf()` returns the first occurrence of an element.
let findIndex = colors.indexOf(`green`)
console.log(`index of green is:`,findIndex);
// 32. Check if "winter" exists in `seasons` using `indexOf()`.
//     Hint: `indexOf()` returns -1 if the element is not found.
let findIndexSeason = seasons.indexOf(`winter`)
console.log(`index of winter is:`,findIndex);
// 33. Add "purple" to the end of `colors` and find its last occurrence using `lastIndexOf()`.
//     Hint: `lastIndexOf()` searches from the end of the array.
colors.push(`purple`)
console.log(colors);
let findIndexColors = colors.lastIndexOf(`purple`)
console.log(`index location of purple is:`,findIndexColors);
// 34. Create an array with duplicate values and use `indexOf()` and `lastIndexOf()` to find the first and last occurrences.
//     Hint: Compare the results of both methods.
let duplicateArray = [`ABC`,`abc`,`ABC`]
let firstIndex = duplicateArray.indexOf(`ABC`)
let lastIndex = duplicateArray.lastIndexOf(`ABC`)
console.log(`first index is at:`,firstIndex, `and second index is at:`,lastIndex);
// 35. Use `indexOf()` to check if an array contains a specific value, and print a boolean result.
//     Hint: Compare the result of `indexOf()` to -1.
duplicateArray = [`ABC`,`abc`,`ABC`]
firstIndex = duplicateArray.indexOf(`ABC`)
if (firstIndex === length -1) {
    console.log(`exercise 35: this is true`);
} else console.log(`exercise 35: this is false`);
// ## Array Methods: includes()
// [W3Schools Array includes()](https://www.w3schools.com/jsref/jsref_includes_array.asp)

// 36. Check if `fruits` includes "apple" and print the result.
//     Hint: `includes()` returns a boolean.
let CheckArray = fruits.includes(`apple`)
console.log(CheckArray);
// 37. Verify if `numbers` includes the number 10.
//     Hint: `includes()` works with any data type.
CheckArray = numbers.includes(10)
console.log(CheckArray);
// 38. Use `includes()` with a starting index to check for "blue" in the second half of `colors`.
//     Hint: `includes()` accepts an optional second argument for the starting position.
CheckArray = colors.includes(0,`blue`)
console.log(CheckArray);
// 39. Create a function that returns true if an array includes a specific value, false otherwise.
//     Hint: Use `includes()` inside the function.
function specificValue() {
    mixArrays = colors,fruits,dynamicRange
    if (mixArrays.includes(`%`)) {
        console.log(`this is function test: True`);
    } else console.log(`this is a function test: False`);
}
specificValue()
// 40. Use `includes()` in an if statement to print different messages based on whether an element exists.
//     Hint: Use a ternary operator or if-else statement.
if (colors.includes(`%`)) {
    console.log(`this is colors test: True`);
} else console.log(`this is a colors test: False`);
// ## Array Methods: slice()
// [W3Schools Array slice()](https://www.w3schools.com/jsref/jsref_slice_array.asp)

// 41. Extract the first three elements from `numbers` using `slice()`.
//     Hint: `slice()` with one argument extracts from that index to the end.
let cutNumbers = numbers.slice(0,3)
console.log(`I cut 3 numbers`,cutNumbers);
// 42. Get the last two elements from `colors` using `slice()`.
//     Hint: Use negative indices with `slice()`.
let lastTwoColors = colors.slice(-1)
console.log(`this is last colors:`,lastTwoColors);
// 43. Extract elements from index 1 to 3 (exclusive) from `seasons`.
//     Hint: `slice()` second argument is exclusive.
let seasonsCut = seasons.slice(1,3)
console.log(seasonsCut);
// 44. Use `slice()` to create a copy of an entire array.
//     Hint: `slice()` without arguments copies the whole array.
let fruitsCopy = fruits.slice()
console.log(`this is a copy:`, fruitsCopy);
// 45. Extract elements from the middle of an array using `slice()`.
//     Hint: Calculate start and end indices based on array length.
let fruitsLength = fruitsCopy.length
console.log(fruitsLength);
let cutFruits = fruitsCopy.slice(1,2)
console.log(cutFruits);
// ## Array Methods: splice()
// [W3Schools Array splice()](https://www.w3schools.com/jsref/jsref_splice.asp)

// 46. Remove two elements from the middle of `fruits` using `splice()`.
//     Hint: `splice()` can remove elements from any position.
fruits.splice(0,1)
console.log(`this is splice:`,fruits);
// 47. Replace an element in `numbers` with two new elements using `splice()`.
//     Hint: Use `splice()` with 3 or more arguments to replace elements.
numbers.splice(0,0, 50, 999, 20492)
console.log(numbers);
// 48. Insert three new elements between existing elements in `colors` without removing any.
//     Hint: Set the delete count to 0 when using `splice()` to insert.
colors.splice(0,0,`newcolor1`,`newcolor2`,`newcolor3`)
console.log(colors);
// 49. Remove the first element and add two new elements at the beginning using a single `splice()` call.
//     Hint: `splice()` can remove and add elements simultaneously.
colors.splice(0,3,`newcolor4`,`newcolor5`)
console.log(colors);
// 50. Use `splice()` to empty an array by removing all elements.
//     Hint: Remove elements from index 0 to the array's length.
colors.splice(0, colors.length);
console.log(`this is empty now cause i use splice():`, colors);
// ## Array Methods: concat()
// [W3Schools Array concat()](https://www.w3schools.com/jsref/jsref_concat_array.asp)

// 51. Concatenate `fruits` and `colors` into a new array.
//     Hint: `concat()` returns a new array without modifying the original arrays.
fruits = ['apple', 'banana', 'orange'];
colors = ['red', 'green', 'blue'];
numbers = [1,2,3,4,5,6]

let colorFruits = fruits.concat(colors);
console.log('this is mixed arrays:', colorFruits);

// 52. Join three different arrays using `concat()`.
//     Hint: Chain multiple `concat()` calls or pass multiple arguments.
let threeArrays = numbers.concat(fruits,colors)
console.log(`this is 3 arrays in one concat:`,threeArrays);
// 53. Use `concat()` to add new elements to the end of an array without modifying the original.
//     Hint: `concat()` can take both arrays and individual elements as arguments.
fruits = fruits.concat(`grapes`,`watermelon`,`melon`)
console.log(fruits);
// 54. Combine an array with itself to create a doubled array.
//     Hint: Use an array as an argument to `concat()`.
numbers = numbers.concat(numbers)
console.log(numbers);
// 55. Concatenate an array with multiple individual elements.
//     Hint: Pass individual elements as separate arguments to `concat()`.
let arrayMultiple = [`fruits`,0,`%#@`,`hat`,20,50,1,0]
arrayMultiple = arrayMultiple.concat(`word`,430,120,22,`hi there`)
console.log(`This is exercise 55:`,arrayMultiple);
// ## Array Methods: join()
// [W3Schools Array join()](https://www.w3schools.com/jsref/jsref_join.asp)

// 56. Convert `fruits` into a comma-separated string using `join()`.
//     Hint: Default separator for `join()` is a comma.
fruits = fruits.join(`,`)
console.log(`this is seperated by comma:`,fruits);
// 57. Join elements of `numbers` with a dash between them.
//     Hint: Pass the desired separator as an argument to `join()`.
numbers = [1, 2, 3, 4, 5, 6];
numbers = numbers.join('-');
console.log(numbers);
// 58. Create a function that takes an array and a separator, then returns the joined string.
//     Hint: Use the separator parameter in the `join()` method.
let chosenString;
fruits = [`apple`,`melon`,`watermelon`,`peach`]

function separatorFruits() {
    chosenString = '.'
    fruits = fruits.join(chosenString)
    console.log(fruits);
}
separatorFruits()
// 59. Join array elements with an empty string to create a single word.
//     Hint: Pass an empty string as the separator.
fruits = [`apple`,`melon`,`watermelon`,`peach`]
fruits = fruits.join(``)
console.log(fruits);
// 60. Use `join()` and `split()` to reverse the order of words in a sentence.
//     Hint: Split the sentence into words, reverse the array, then join.
let sentence = `Java script`
sentence = sentence.split(``)
sentence = sentence.reverse()
sentence = sentence.join(`+`)
console.log(sentence);
// ## Array Methods: reverse()
// [W3Schools Array reverse()](https://www.w3schools.com/jsref/jsref_reverse.asp)

// 61. Reverse the order of elements in `seasons`.
//     Hint: `reverse()` modifies the original array.
seasons = seasons.reverse()
console.log(`this is reversed`,seasons);
// 62. Create a function to check if a word is a palindrome using `split()`, `reverse()`, and `join()`.
//     Hint: Compare the original word with its reversed version.
let testWord;
let testWordAfterChanges;
function palindrome() {
    testWord = `A man`
    console.log(`Comparing this type A:`,testWord);
    testWordAfterChanges = testWord.split().reverse().join(" ")
    console.log(`to this type B:`,testWordAfterChanges);
    if (testWord === testWordAfterChanges) {
        console.log(`This is matching`);
    } else console.log(`This is'nt matching.`);
}
palindrome()
// 63. Reverse `numbers` and then map each element to its square.
//     Hint: Chain `reverse()` and `map()` methods.
numbers = [1, 2, 3, 4, 5, 6];
numbers = numbers.reverse().map(function(num) {
    return num * 2;
});
console.log(numbers);

// 64. Use `reverse()` to reverse the order of characters in a string (Hint: use `split()` first).
//     Hint: Convert the string to an array, reverse it, then join back to a string.
let hats = 'nike, adidas, jordan, diadora';
console.log(hats);
hats = hats.split('');
hats.reverse();
hats = hats.join('');
console.log(hats); 
// 65. Implement a function that reverses an array without using the `reverse()` method.
//     Hint: Use a loop to swap elements from the start and end of the array.
let animals = ['cat', 'dog', 'elephant', 'lion', 'tiger'];
let newAnimals = []
i;
function reverseArray() {
    for (i = animals.length; i > 0; i--) {
        newAnimals = newAnimals.concat(animals[i])
        console.log(`this is a new array:`,newAnimals);
    }  
}
reverseArray()
// ## Array Methods: sort()
// [W3Schools Array sort()](https://www.w3schools.com/jsref/jsref_sort.asp)

// 66. Sort the `fruits` array in alphabetical order.
//     Hint: Default `sort()` works alphabetically for strings.
fruits = [`apple`,`orange juice`,`cherry`,`grapes`,`watermelon`,`strawberry`]
fruits.sort()
console.log(fruits);

// 67. Sort `numbers` in ascending order.
//     Hint: Use a compare function for numerical sort.
numbers = [1,100,2,0,1,3,42,29,10,9,38]
numbers.sort(function(a, b){return a-b});
console.log(numbers);

// 68. Sort `numbers` in descending order.
//     Hint: Modify the compare function to sort in reverse order.
numbers = [1,100,2,0,1,3,42,29,10,9,38]
numbers.sort(function(a, b){return a-b});
numbers.reverse()
console.log(numbers);

// 69. Create an array of words and sort them by length.
//     Hint: Use a compare function that compares string lengths.
let cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
cities.sort(function(a, b) {
    return a.length - b.length;
});
console.log(cities); 
for (let i = 0; i < cities.length; i++) {
    console.log(`The length of ${cities[i]}: ${cities[i].length}`);
}
// 70. Implement a custom sort to order an array of numbers based on their remainder when divided by 3.
//     Hint: Use the modulo operator (%) in the compare function.
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); 
let NewNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    NewNumbers.push(numbers[i]);
    console.log(`This num is with 0 reminder:`,numbers[i]);
  }
}
console.log(NewNumbers); 

// SKIP IT:
// ## Array Iteration: forEach()
// [W3Schools Array forEach()](https://www.w3schools.com/jsref/jsref_foreach.asp)

// 71. Use `forEach()` to print each element in `colors`.
//     Hint: The callback function in `forEach()` receives each element as an argument.
colors.forEach(function(color) {
    console.log(color);
  });
// 72. Double each number in `numbers` using `forEach()`.
//     Hint: Modify the original array within the `forEach()` callback.
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function(number, index) {
    numbers[index] = number * 2;
});
console.log(numbers); 

// 73. Use `forEach()` to create an HTML list from an array of strings.
//     Hint: Concatenate HTML tags within the `forEach()` callback.
let listHtml = ['h2', 'h1', 'script', 'header'];
let RemoveTheH = 'h'; // The string you want to remove
let list2Html = [];

listHtml.forEach(function(word) {
    let updatedWord = word.replace(RemoveTheH, '');
    list2Html.push(updatedWord);
});
console.log(list2Html);

// 74. Implement a simple search function using `forEach()`.
//     Hint: Use a condition inside the `forEach()` callback to find matching elements.
let foodList = ["Pizza", "Burger", "Pasta", "Sushi", "Salad", "Tacos", "Ice Cream"];
foodList.forEach(function(food){
    if (food.includes(`Pizza`) ) {
        console.log(`There is Pizza`);
    } else {}
})
// 75. Use `forEach()` to count how many elements in an array meet a certain condition.
//     Hint: Increment a counter variable in the `forEach()` callback when the condition is met.
foodList = ["Pizza", "Burger", "Pasta", "Sushi", "Salad", "Tacos", "Ice Cream"];
let aCount = 0;  // Initialize aCount

foodList.forEach(function(food) {
    if (food.includes('a')) {
        aCount += 1;  // Increment aCount by 1
        console.log(`"a" found from: ${food}`);
    }
});
console.log(`Total "a" count: ${aCount}`);

// SKIP IT:
// ## Array Iteration: map()
// [W3Schools Array map()](https://www.w3schools.com/jsref/jsref_map.asp)

// 76. Use `map()` to create a new array with the lengths of each string in `fruits`.
//     Hint: Return the length of each string in the `map()` callback.
console.log(`this is exercise 70:`,fruits);
let lengthFruits = []
lengthFruits = fruits.map(function(fruit) {
    fruit = fruit.length
    lengthFruits.push(fruit)
    return fruit
})
console.log(lengthFruits);

// 77. Square all numbers in `numbers` using `map()`.
//     Hint: Return the square of each number in the `map()` callback.
numbers = [10, 25, 37, 42, 58];
console.log(`this is exercise 71:`,numbers);
let squareNum = []
squareNum = numbers.map(function(num){
    num = num * num
    squareNum.push(num)
    return num

})
console.log(squareNum);
// 78. Create a new array where each element is a boolean indicating if the original element is even.
//     Hint: Use the modulo operator (%) to check for even numbers.

// 79. Use `map()` to format an array of names into a new array of greetings.
//     Hint: Return a greeting string that includes the name in the `map()` callback.
let names = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];
let greeting = []

greeting = names.map(function(word) {
    word = "Hello there " + word
    greeting.push(word)
    return word
})
console.log(greeting);
// 80. Implement a function that uses `map()` to convert an array of Celsius temperatures to Fahrenheit.
//     Hint: Use the formula (C * 9/5) + 32 in the `map()` callback.

// ## Array Iteration: filter()
// [W3Schools Array filter()](https://www.w3schools.com/jsref/jsref_filter.asp)

// 81. Use `filter()` to create a new array with only the even numbers from `numbers`.
//     Hint: Use the modulo operator (%) to check for even numbers in the `filter()` callback.
numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(`exercise 81: the even numbers are:`,evenNumbers); 
// 82. Filter `fruits` to only include fruits with more than 5 characters.
//     Hint: Check the length of each string in the `filter()` callback.
console.log(fruits);
let fruitsLengthFive = []

fruitsLengthFive = fruits.filter(function(fruit) {
    if (fruits.length >= 5) {
        fruitsLengthFive.push(fruit)
        console.log(`the fruit: ${fruit} has ${fruit.length} letters`);
        return fruit
    }
})
console.log(`exercise 82: fruits with 5 letters :`,fruitsLengthFive); 
// 83. Create a function that filters an array to only include unique values.
//     Hint: Use `indexOf()` in the `filter()` callback to check for duplicates.

// 84. Use `filter()` to remove all falsy values from an array.
//     Hint: The callback can simply return the element itself, as falsy values will be filtered out.

// 85. Implement a search function using `filter()` that returns all elements containing a specific substring.
//     Hint: Use the `includes()` method on each element in the `filter()` callback.

// ## Array Iteration: find() and findIndex()
// [W3Schools Array find()](https://www.w3schools.com/jsref/jsref_find.asp)
// [W3Schools Array findIndex()](https://www.w3schools.com/jsref/jsref_findindex.asp)


// 86. Use `find()` to get the first element in `numbers` that's greater than 3.
//     Hint: Return true in the callback when the condition is met.
numbers = [1,2,1,2,8];
let greaterThree = numbers.find(numbers => numbers > 3);
console.log(greaterThree);

// 87. Find the index of the first color in `colors` that starts with the letter 'b'.
//     Hint: Use `startsWith()` method in the `findIndex()` callback.

// 88. Implement a function that finds the first prime number in an array.
//     Hint: Create a helper function to check if a number is prime, then use it in the `find()` callback.

// 89. Use `findIndex()` to locate the position of a specific season in `seasons`.
//     Hint: Compare each element to the target season in the `findIndex()` callback.

// 90. Create a function that uses `find()` to get the first element that satisfies a custom condition.
//     Hint: Pass the custom condition as a callback function to `find()`.

// ## Array Iteration: some() and every()
// [W3Schools Array some()](https://www.w3schools.com/jsref/jsref_some.asp)
// [W3Schools Array every()](https://www.w3schools.com/jsref/jsref_every.asp)

// 91. Check if `numbers` contains any even numbers using `some()`.
//     Hint: Use the modulo operator (%) to check for even numbers in the callback.

// 92. Verify if all elements in `fruits` have more than 3 characters using `every()`.
//     Hint: Check the length of each string in the `every()` callback.

// 93. Use `some()` to check if an array contains any negative numbers.
//     Hint: Compare each number to zero in the `some()` callback.

// 94. Implement a function using `every()` to check if all elements in an array are unique.
//     Hint: Use `indexOf()` and the current index in the `every()` callback to check for duplicates.

// 95. Use `some()` and `every()` together to check various conditions on an array.
//     Hint: Combine `some()` and `every()` checks using logical operators.

// SKIP IT:
// ## Array Iteration: reduce()
// [W3Schools Array reduce()](https://www.w3schools.com/jsref/jsref_reduce.asp)

// 96. Sum all numbers in `numbers` using `reduce()`.
//     Hint: The accumulator in `reduce()` should be updated with each element.

// 97. Find the longest word in `fruits` using `reduce()`.
//     Hint: Compare the length of the current element with the accumulator in each iteration.

// 98. Use `reduce()` to count the occurrences of each element in an array.
//     Hint: Use an object as the accumulator to store counts.

// 99. Implement a `flatten()` function for nested arrays using `reduce()`.
//     Hint: Use `concat()` within the `reduce()` callback to merge nested arrays.

// 100. Use `reduce()` to group an array of objects by a specific property.
//      Hint: The accumulator should be an object with keys based on the grouping property.

// ## Advanced Exercises - for PROS
// 101. Implement a function that removes duplicate elements from an array without using Set.
//      Hint: Use `reduce()` or `filter()` with `indexOf()`.

// 102. Create a function that rotates an array by a given number of positions.
//      Hint: Use `slice()` and spread operator to rearrange elements.

// 103. Implement a simple version of `map()` using `reduce()`.
//      Hint: Build a new array within the `reduce()` callback.

// 104. Write a function that finds the intersection of two arrays.
//      Hint: Use `filter()` and `includes()` methods.

// 105. Create a function that generates an array of specified length containing random numbers.
//      Hint: Use a loop or `Array.from()` with a mapping function.