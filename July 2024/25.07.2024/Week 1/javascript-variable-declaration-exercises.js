// <!-- # JavaScript Variable Declaration Exercises

// ## Introduction
// Before starting the exercises, you might want to review the basics of JavaScript variables:
// [JavaScript Variables](https://www.w3schools.com/js/js_variables.asp)

// ## Exercises

// 1. Declare a variable named firstName and assign it your first name as a string.
//    Hint: Use the `let` keyword for variable declaration.
//    [Learn more about variables](https://www.w3schools.com/js/js_variables.asp)
let firstName = 'Yosef'
// 2. Create a variable age as a number and set it to your current age.
//    Hint: Numbers don't need quotes in JavaScript.
//    [Learn more about numbers](https://www.w3schools.com/js/js_numbers.asp)
let age = '24'
// 3. Declare a variable isRaining as a boolean and set it to false.
//    Hint: Boolean values in JavaScript are `true` or `false` (without quotes).
//    [Learn more about booleans](https://www.w3schools.com/js/js_booleans.asp)
let isRising = false
// 4. Declare a **constant** variable PI as a number and assign it the value 3.14159.
//    Hint: Use the `const` keyword for constants.
//    [Learn more about const](https://www.w3schools.com/js/js_const.asp)
const PI = 3.14159
// 5. Declare a variable isStudent as a boolean and set it to true.
//    Hint: Boolean values in JavaScript are `true` or `false`.
//    [Learn more about booleans](https://www.w3schools.com/js/js_booleans.asp)
let isStudent = true
// 6. Create a variable named favoriteColor as a string without assigning it a value.
//    Hint: You can declare a variable without initializing it.
//    [Learn more about variable declaration](https://www.w3schools.com/js/js_variables.asp)
let favoriteColor = undefined
// 7. Declare a variable temperature as a number and assign it the value 72.5.
//    Hint: JavaScript doesn't distinguish between integers and floats.
//    [Learn more about numbers](https://www.w3schools.com/js/js_numbers.asp)
let temperature = 72.5
// 8. Create a **constant** variable DAYS_IN_WEEK as a number and set it to 7.
//    Hint: Use uppercase for constant names as a convention.
//    [Learn more about const](https://www.w3schools.com/js/js_const.asp)
const DAYS_IN_WEEK = 7
// 9. Declare a variable username as a string and assign it the value "coder123".
//    Hint: Strings can be enclosed in single or double quotes.
//    [Learn more about strings](https://www.w3schools.com/js/js_strings.asp)
let username = "coder123"
// 10. Create a variable score as a number and set it to 0.
//     Hint: Initialize variables with a starting value when appropriate.
//     [Learn more about variable initialization](https://www.w3schools.com/js/js_variables.asp)
let score = 0
// 11. Declare a variable isLoggedIn as a boolean and assign it the value false.
//     Hint: Boolean values don't need quotes.
//     [Learn more about booleans](https://www.w3schools.com/js/js_booleans.asp)
let isLoggedIn = false
// 12. Create a **constant** variable COMPANY_NAME as a string and set it to "Tech Solutions Inc.".
//     Hint: Constants can also be strings.
//     [Learn more about const](https://www.w3schools.com/js/js_const.asp)
const COMPANY_NAME = "Tech Solutions Inc."
// 13. Declare a variable currentYear as a number and assign it the current year.
//     Hint: You can use the `Date` object to get the current year.
//     [Learn more about Date object](https://www.w3schools.com/js/js_dates.asp)
let currentYear = 2024
// 14. Create a variable price as a number (float) and set it to 19.99.
//     Hint: JavaScript automatically handles decimal numbers.
//     [Learn more about numbers](https://www.w3schools.com/js/js_numbers.asp)
let price = 19.99
// 15. Declare a variable quantity as a number and assign it the value 100.
//     Hint: Whole numbers are also of type "number" in JavaScript.
//     [Learn more about numbers](https://www.w3schools.com/js/js_numbers.asp)
let quantity = 100
// 16. Declare a variable counter as a number and set it to 0. Then **increment** it by 1.
//     Hint: You can use the increment operator (++) or addition assignment (+=).
//     [Learn more about operators](https://www.w3schools.com/js/js_operators.asp)
let counter = 0
counter ++
console.log(counter);
// 17. Create a variable message as a string and set it to "Hello". Then **reassign** it to "Hello, World!".
//     Hint: Variables declared with `let` can be reassigned.
//     [Learn more about let](https://www.w3schools.com/js/js_let.asp)
let message = `Hello`
message = `Hello, World!`
// 18. Declare a variable using `let` named myVariable and assign it the value 42. Then, on the next line, reassign it to "forty-two".
//     Hint: JavaScript allows you to reassign variables to different types.
//     [Learn more about let](https://www.w3schools.com/js/js_let.asp)
let myVariable = 42
myVariable = `forty-two`
// 19. Create a variable totalCost as a number and set it to 50. Then **add** 10 to its current value.
//     Hint: You can use the addition assignment operator (+=).
//     [Learn more about assignment operators](https://www.w3schools.com/js/js_assignment.asp)
let totalCost = 50
totalCost += 10
// 20. Declare a variable username and assign it the value "user1". Then reassign it to "admin".
//     Hint: Variables can be reassigned to different values of the same type.
//     [Learn more about variable reassignment](https://www.w3schools.com/js/js_variables.asp)
username = "user1"
username = "admin"
// 21. Create a variable temperature and set it to 20. Then multiply its value by 1.8 and add 32 to convert from Celsius to Fahrenheit.
//     Hint: You can perform multiple operations in one statement.
//     [Learn more about arithmetic](https://www.w3schools.com/js/js_arithmetic.asp)
temperature = 20
temperature = (temperature * 1.8) + 32
// 22. Declare a variable fruits as an array and set it to ["apple", "banana"]. Then add "orange" to the array.
//     Hint: You can use the push() method to add elements to an array.
//     [Learn more about arrays](https://www.w3schools.com/js/js_arrays.asp)
let fruits = [`apple`,`banana`,`grape`]
fruits.push("Yellow")
console.log(fruits);
// 23. Create a variable person as an object with properties name and age. Then add a new property city.
//     Hint: You can add new properties to objects after creation.
//     [Learn more about objects](https://www.w3schools.com/js/js_objects.asp)
let person = {
name: "Yosef",
age: "24",
city:" Tel aviv"
}
person.zipcode = "5840458"
console.log(person);
// 24. Declare a variable count and set it to 5. Then decrement it by 1.
//     Hint: You can use the decrement operator (--) or subtraction assignment (-=).
//     [Learn more about operators](https://www.w3schools.com/js/js_operators.asp)
let count = 5
count --
console.log(count);
// 25. Create a variable greeting and set it to "Good". Then concatenate it with "morning" to form "Good morning".
//     Hint: You can use the + operator to concatenate strings.
//     [Learn more about string methods](https://www.w3schools.com/js/js_string_methods.asp) -->
let greeting = "good" + " morning"
console.log(greeting);