// # JavaScript Data Types Quiz

// ## Introduction
// Before starting the quiz, watch this video for an overview of JavaScript data types:
// [JavaScript Data Types](https://www.youtube.com/watch?v=UmSpfdxu3ro)

// ## Questions

// 1. What is the data type of x = 5?
//    Hint: Think about the basic numeric type in JavaScript.
//    [W3Schools: JavaScript Numbers](https://www.w3schools.com/js/js_numbers.asp)
x = 5
console.log(x);
// 2. How do you declare a string variable in JavaScript?
//    Hint: Consider the different ways to enclose text in JavaScript.
//    [W3Schools: JavaScript Strings](https://www.w3schools.com/js/js_strings.asp)
a = 'hi'
var word = 'hello'
const word2 = 'PERM'
// 3. What's the difference between null and undefined?
//    Hint: One is explicitly set, the other is a default state.
//    [W3Schools: JavaScript Data Types](https://www.w3schools.com/js/js_datatypes.asp)
a = undefined
b = null
console.log(a,b);
// 4. How can you check the type of a variable in JavaScript?
//    Hint: There's an operator specifically for this purpose.
//    [W3Schools: JavaScript typeof](https://www.w3schools.com/js/js_typeof.asp)
a = 'hi'
b = 10
console.log(typeof a,"and" ,typeof b);
// 5. What's the data type of the result of 5 / 2?
//    Hint: Consider how JavaScript handles division results.
//    [W3Schools: JavaScript Arithmetic](https://www.w3schools.com/js/js_arithmetic.asp)
a = 5 /2 
console.log(typeof a);
// 6. What's the data type of true?
//    Hint: This is one of the two possible values for this type.
//    [W3Schools: JavaScript Booleans](https://www.w3schools.com/js/js_booleans.asp)
a = true
console.log(typeof a);
// 7. How do you declare an object in JavaScript?
//    Hint: Think about curly braces and key-value pairs.
//    [W3Schools: JavaScript Objects](https://www.w3schools.com/js/js_objects.asp)
let DataObject = {name: "Yosef", lastname: "Sabag", age: "24"}
console.log(DataObject);
// 8. What's the data type of NaN?
//    Hint: Despite its name, it's considered a specific type.
//    [W3Schools: JavaScript NaN](https://www.w3schools.com/jsref/jsref_isnan.asp)
a = NaN
console.log(typeof a);
// 9. What's the difference between == and ===?
//    Hint: One checks value, the other checks value and type.
//    [W3Schools: JavaScript Comparison Operators](https://www.w3schools.com/js/js_comparisons.asp)
a = 5
b = 2
c = a == b
d = b === a
console.log('This is example', a, 'this is example b', b);
// 10. How do you convert a string to a number?
//     Hint: There are multiple methods, including a global function.
//     [W3Schools: JavaScript Type Conversion](https://www.w3schools.com/js/js_type_conversion.asp)
a = "5"
b = Number(a)
console.log(typeof b, b);
// 11. What's the data type of the result of "5" + 3?
//     Hint: Consider how JavaScript handles string concatenation.
//     [W3Schools: JavaScript Type Conversion](https://www.w3schools.com/js/js_type_conversion.asp)
a = "5" + 3
console.log("the data type is", typeof a);
// 12. How can you check if a variable is of a specific type?
//     Hint: You can use a combination of typeof and comparison.
//     [W3Schools: JavaScript typeof](https://www.w3schools.com/js/js_typeof.asp)
a = null
console.log(typeof a);
// 13. How do you create a multi-line string in JavaScript?
//     Hint: There's a specific type of quotation mark that allows this easily.
//     [W3Schools: JavaScript Template Literals](https://www.w3schools.com/js/js_string_templates.asp)
a = `This is a double string.
.`
console.log(a);
// 14. What's the difference between single quotes, double quotes, and backticks for strings?
//     Hint: Two are essentially the same, but one offers additional features.
//     [W3Schools: JavaScript Strings](https://www.w3schools.com/js/js_strings.asp)
a = "hello"
a = 'Hi'
a = `hi there
this provide multi lines.`
// 15. How do you convert a number to a string?
//     Hint: There's a method that all numbers have for this purpose.
//     [W3Schools: JavaScript Number Methods](https://www.w3schools.com/js/js_number_methods.asp)
a = 5
b = a.toString()
console.log(`the value 5 is a`, typeof b);
// 16. What's the result of typeof null?
//     Hint: This is a longstanding quirk in JavaScript.
//     [W3Schools: JavaScript typeof](https://www.w3schools.com/js/js_typeof.asp)
a = null
console.log(`the typeof null is`, typeof a);
// 17. How do you declare a constant variable in JavaScript?
//     Hint: There's a specific keyword introduced in ES6 for this.
//     [W3Schools: JavaScript let and const](https://www.w3schools.com/js/js_let.asp)

// 18. What happens when you add a string and a number? How can you handle this?
//     Hint: JavaScript has implicit type conversion rules.
//     [W3Schools: JavaScript Type Conversion](https://www.w3schools.com/js/js_type_conversion.asp)
a = 5
b = "5"
console.log(`I combined them both and the type of a is` ,typeof a ,`and b are`, typeof b);
// 19. What's the data type of the result of 3 > 2?
//     Hint: Comparison operations return a specific type.
//     [W3Schools: JavaScript Comparisons](https://www.w3schools.com/js/js_comparisons.asp)
a = 3 > 2
console.log(`the result of a is ${a}`,`and it is`, typeof a);
// 20. How do you escape special characters in a string?
//     Hint: There's a specific character used for escaping in many programming languages.
//     [W3Schools: JavaScript Strings](https://www.w3schools.com/js/js_strings.asp)
a = "Hi /there/"
console.log(a);
// 21. What's the difference between var, let, and const?
//     Hint: These have different scoping rules and reassignment capabilities.
//     [W3Schools: JavaScript let and const](https://www.w3schools.com/js/js_let.asp)
let new3 = 'let provides the option to re-assign again new variables'
var new1 = 'same like let but older'
const new2 ='this one is a perm variable which you cannot re-assign.'
console.log(new1,new2,new3);
// 22. How do you check if a variable is undefined?
//     Hint: You can use either the typeof operator or a direct comparison.
//     [W3Schools: JavaScript undefined](https://www.w3schools.com/jsref/jsref_undefined.asp)
a = undefined
console.log(typeof a);
// 23. What's the result of 10 + "5"?
//     Hint: Consider how JavaScript handles operations between different types.
//     [W3Schools: JavaScript Type Conversion](https://www.w3schools.com/js/js_type_conversion.asp)
a = 10 + "5"
console.log(a);
// 24. How do you create a boolean variable?
//     Hint: You can either use the literal values or expressions that evaluate to true or false.
//     [W3Schools: JavaScript Booleans](https://www.w3schools.com/js/js_booleans.asp)
a = true
b = false
console.log(`if a is true it will print out = ${a}, else its false it will print = ${b}`);
// 25. What's the difference between primitive data types and objects in JavaScript?
//     Hint: Consider how these types are stored and passed in JavaScript.
//     [W3Schools: JavaScript Data Types](https://www.w3schools.com/js/js_datatypes.asp)
a = { name: "josepinyo" };
b = a
a.name = "Bojosepinyo the 3rd"
console.log(a.name)
console.log(b.name)