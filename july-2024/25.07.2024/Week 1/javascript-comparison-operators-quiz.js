// # JavaScript Comparison Operators Quiz

// ## Introduction
// Before starting the quiz, watch this video for an overview of JavaScript comparison operators:
// [JavaScript Comparison Operators](https://www.youtube.com/watch?v=KwOTbF1kEcU)

// ## Questions

// 1. What is the equality operator in JavaScript?
//    Hint: There are two types of equality operators in JavaScript.
//    [Learn more about equality operators](https://www.w3schools.com/js/js_comparisons.asp)
a == a
console.log(a);
// 2. What's the difference between == and ===?
//    Hint: One checks for equality without type conversion, the other doesn't.
//    [Learn more about strict equality](https://www.w3schools.com/js/js_comparisons.asp)
a == a // less precise
a === a // best precise comparing.

// 3. How do you check if two values are not equal in JavaScript?
//    Hint: There are two operators for this, similar to the equality operators.
//    [Learn more about inequality operators](https://www.w3schools.com/js/js_comparisons.asp)
if (a !== b)
    console.log('they arenet match');
// 4. What does the > operator do?
//    Hint: It compares two values in a specific way.
//    [Learn more about comparison operators](https://www.w3schools.com/js/js_comparisons.asp)
a = 5 
b = 2
function compare(a,b)
{
 return a > b
}
console.log(compare(5,2))

// 5. What does the < operator do?
//    Hint: It's the opposite of the > operator.
//    [Learn more about comparison operators](https://www.w3schools.com/js/js_comparisons.asp)
function comparsion_6(a,b)
{
if (b < a)
    return true
    return false    
}
console.log(comparsion_6(10,10))
// 6. How do you check if a value is greater than or equal to another value?
//    Hint: It's a combination of two basic comparison operators.
//    [Learn more about comparison operators](https://www.w3schools.com/js/js_comparisons.asp)
a = 1
b = 2
c = b >= a
console.log(c);
// 7. How do you check if a value is less than or equal to another value?
//    Hint: It's similar to the previous question, but in the opposite direction.
//    [Learn more about comparison operators](https://www.w3schools.com/js/js_comparisons.asp)
a = 1
b = 2
c = b <= a
console.log(c);
// 8. What is the result of 5 > 3?
//    Hint: Evaluate the comparison based on the numbers' values.
//    [Learn more about comparison operators](https://www.w3schools.com/js/js_comparisons.asp)
a = 5 > 3
console.log(a);
// 9. What is the result of 10 === "10"?
//    Hint: Remember what === does with types.
//    [Learn more about strict equality](https://www.w3schools.com/js/js_comparisons.asp)
a = 10 === 10
console.log(a);
// 10. What is the result of 7 <= 7?
//     Hint: Consider what "less than or equal to" means.
//     [Learn more about comparison operators](https://www.w3schools.com/js/js_comparisons.asp)
a = 7 <= 7
console.log(a);
// 11. How would you compare two strings alphabetically?
//     Hint: You can use the same operators as you would for numbers.
//     [Learn more about string comparison](https://www.w3schools.com/js/js_comparisons.asp)
a = 'aba'
b = 'mama'
c = a < b
console.log(c);
// 12. What's the result of "apple" < "banana"?
//     Hint: Strings are compared character by character.
//     [Learn more about string comparison](https://www.w3schools.com/js/js_comparisons.asp)
a = 'apple'
b = 'banana'
c = a < b
console.log(c);
// 13. What does the !== operator do?
//     Hint: It's related to the === operator.
//     [Learn more about strict inequality](https://www.w3schools.com/js/js_comparisons.asp)
a = 'apple'
b = 'appla'
c = a !== b
console.log(c);
// 14. What's the result of 5 !== "5"?
//     Hint: Consider both the value and type of the operands.
//     [Learn more about strict inequality](https://www.w3schools.com/js/js_comparisons.asp)
a = 5 !== 5
console.log(a);
// 15. How do comparison operators work with different data types?
//     Hint: JavaScript may perform type coercion in some cases.
//     [Learn more about type coercion in comparisons](https://www.w3schools.com/js/js_type_conversion.asp)
a = 5 === '5'
b = 0 === false
// Remember to test your knowledge by trying these operations in a JavaScript console!
