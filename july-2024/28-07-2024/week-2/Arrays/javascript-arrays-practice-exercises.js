// # JavaScript Arrays Practice Exercises

// 1. Create an array of your five favorite foods.
//    Hint: Use square brackets and separate items with commas.
//    [Learn more about creating arrays](https://www.w3schools.com/js/js_arrays.asp)
let favorFood = [`banana`,`meat`,`pizza`,`hamburger`,`sweets`]
// 2. Access and print the third item in your favorite foods array.
//    Hint: Remember that array indexing starts at 0.
//    [Learn more about accessing array elements](https://www.w3schools.com/js/js_arrays.asp)
let threeFood = favorFood[3]
console.log(threeFood);
// 3. Change the second item in your array to a different food.
//    Hint: Use array indexing to modify an element.
//    [Learn more about changing array elements](https://www.w3schools.com/js/js_arrays.asp)
favorFood[2] = `Mac N Cheese`
console.log(favorFood);
// 4. Add a new food to the end of your array using `push()`.
//    Hint: The push() method adds an element to the end of an array.
//    [Learn more about push()](https://www.w3schools.com/jsref/jsref_push.asp)
favorFood.push(`Salmon`)
console.log(favorFood);
// 5. Remove the first food from your array using `shift()`.
//    Hint: The shift() method removes the first element from an array.
//    [Learn more about shift()](https://www.w3schools.com/jsref/jsref_shift.asp)
favorFood.shift()
console.log(favorFood);
// 6. Create a loop that prints all the foods in your array.
//    Hint: Use a for loop and the array's length property.
//    [Learn more about looping through arrays](https://www.w3schools.com/js/js_array_iteration.asp)
i = 0
for (i = 0; i < favorFood.length; i++)
    console.log(favorFood[i]);
// 7. Find the index of a specific food in your array using `indexOf()`.
//    Hint: indexOf() returns the first index at which a given element can be found.
//    [Learn more about indexOf()](https://www.w3schools.com/jsref/jsref_indexof_array.asp)
favorFood = favorFood.indexOf(`Pizza`)
console.log(`the index of the pizza is:`,favorFood);
// 8. Create an array of numbers and use a loop to calculate their sum.
//    Hint: Initialize a sum variable to 0, then add each array element to it in the loop.
//    [Learn more about array iteration](https://www.w3schools.com/js/js_array_iteration.asp)
let numbers = [5,3,5,6,324,32]
i = 0
sum = 0
for (i = 0; i < numbers.length; i++) {
    sum+= numbers[i]
}
console.log(sum);
// Remember to test your code and experiment with different inputs!

