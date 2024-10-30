// # JavaScript Number Methods Exercises

// 1. Use `toFixed()` to format the number 3.14159 to 2 decimal places.
//    Hint: `number.toFixed(2)` will round to 2 decimal places.
//    [Learn more about toFixed()](https://www.w3schools.com/jsref/jsref_tofixed.asp)
let a = 3.14159
a = a.toFixed(0)
console.log(`this is naked pi:`,a);
// 2. Convert the number 42 to a string using `toString()`.
//    Hint: `number.toString()` converts a number to a string.
//    [Learn more about toString()](https://www.w3schools.com/jsref/jsref_tostring_number.asp)
a = 42
a = a.toString()
console.log(`the value of a which is 42 is now a string cause I typeof it:`,typeof a);
// 3. Use `toPrecision()` to format the number 123.456789 to 5 significant digits.
//    Hint: `number.toPrecision(5)` will format to 5 significant digits.
//    [Learn more about toPrecision()](https://www.w3schools.com/jsref/jsref_toprecision.asp)
a = 123.456789
a = a.toPrecision(5)
console.log(`format 5 significant digits:`,a);
// 4. Parse the string "10" into an integer using `parseInt()`.
//    Hint: `parseInt(string)` converts a string to an integer.
//    [Learn more about parseInt()](https://www.w3schools.com/jsref/jsref_parseint.asp)
a = `10`
a = parseInt(a)
console.log(typeof a);
// 5. Parse the string "3.14" into a float using `parseFloat()`.
//    Hint: `parseFloat(string)` converts a string to a floating-point number.
//    [Learn more about parseFloat()](https://www.w3schools.com/jsref/jsref_parsefloat.asp)
a = `3.14`
a = parseFloat(a)
console.log(typeof a);
// 6. Check if the value "Hello" is NaN using `isNaN()`.
//    Hint: `isNaN(value)` returns true if the value is Not-a-Number.
//    [Learn more about isNaN()](https://www.w3schools.com/jsref/jsref_isnan.asp)
a = `hello`
a = isNaN(a)
console.log(`the value hello return true if its not-a-number:`,a);
// 7. Determine if 100 is a finite number using `isFinite()`.
//    Hint: `isFinite(value)` returns true if the value is a finite number.
//    [Learn more about isFinite()](https://www.w3schools.com/jsref/jsref_isfinite.asp)
a = 100
a = isFinite(a)
console.log(`returns true if 100 is finite number:`,a);
// 8. Convert the number 255 to a hexadecimal string using `toString()`.
//    Hint: `number.toString(16)` converts to hexadecimal.
//    [Learn more about toString() with radix](https://www.w3schools.com/jsref/jsref_tostring_number.asp)
a = 255
a = a.toString(16)
console.log(`converting to hexadecimal:`,a);
// 9. Use `toFixed()` to format the number 0.000001 to 7 decimal places.
//    Hint: `number.toFixed(7)` will show 7 decimal places.
//    [Learn more about toFixed()](https://www.w3schools.com/jsref/jsref_tofixed.asp)
a = 0.000001
a = a.toFixed(7)
console.log(a);
// 10. Convert the binary string "1010" to a decimal number using `parseInt()`.
//     Hint: `parseInt(string, 2)` parses a binary string.
//     [Learn more about parseInt() with radix](https://www.w3schools.com/jsref/jsref_parseint.asp)
a = `1010`
a = parseInt(a,2)
console.log(a);
// 11. Use `toPrecision()` to format the number 0.000123456 to 3 significant digits.
//     Hint: `number.toPrecision(3)` will format to 3 significant digits.
//     [Learn more about toPrecision()](https://www.w3schools.com/jsref/jsref_toprecision.asp)
a = 0.000123456
a = a.toPrecision(3)
console.log(a);
// 12. Check if the result of 0/0 is NaN using `isNaN()`.
//     Hint: Division by zero may result in NaN.
//     [Learn more about isNaN()](https://www.w3schools.com/jsref/jsref_isnan.asp)
a = 0/0
if (a === isNaN(a)) {
    console.log(`true`);
} else console.log(`false`);
// 13. Convert the number 1000000 to exponential notation with 2 decimal places using `toExponential()`.
//     Hint: `number.toExponential(2)` formats to exponential notation.
//     [Learn more about toExponential()](https://www.w3schools.com/jsref/jsref_toexponential.asp)
a = 1000000
a = a.toExponential(2)
console.log(a);
// 14. Parse the string "3.14some" into a float using `parseFloat()`.
//     Hint: `parseFloat()` parses until it encounters a non-numeric character.
//     [Learn more about parseFloat()](https://www.w3schools.com/jsref/jsref_parsefloat.asp)
a = `3.14some`
a = parseFloat(a)
console.log(a);
// 15. Use `toString()` to convert the number 16 to its binary representation.
//     Hint: `number.toString(2)` converts to binary.
//     [Learn more about toString() with radix](https://www.w3schools.com/jsref/jsref_tostring_number.asp)
a = 16
a = a.toString(2)
console.log(a);
// 16. Check if Infinity is a finite number using `isFinite()`.
//     Hint: Infinity is not considered a finite number.
//     [Learn more about isFinite()](https://www.w3schools.com/jsref/jsref_isfinite.asp)
a = Infinity
a = isFinite(a)
console.log(a);
// 17. Use `toFixed()` to format the number 1.23e-5 to 8 decimal places.
//     Hint: `toFixed()` works with very small numbers too.
//     [Learn more about toFixed()](https://www.w3schools.com/jsref/jsref_tofixed.asp)
a = 1.235
a = a.toFixed(8)
console.log(a);
// 18. Convert the octal string "777" to a decimal number using `parseInt()`.
//     Hint: `parseInt(string, 8)` parses an octal string.
//     [Learn more about parseInt() with radix](https://www.w3schools.com/jsref/jsref_parseint.asp)
a = `777`
a = parseInt(a,8)
console.log(a);
// 19. Use `toPrecision()` to format the number 123456.789 to 4 significant digits.
//     Hint: This will result in exponential notation.
//     [Learn more about toPrecision()](https://www.w3schools.com/jsref/jsref_toprecision.asp)
a = 123456.789
a = a.toPrecision(4)
console.log(a);
// 20. Check if the string "NaN" is NaN using `isNaN()`.
//     Hint: The string "NaN" is not the same as the value NaN.
//     [Learn more about isNaN()](https://www.w3schools.com/jsref/jsref_isnan.asp)
a = `NaN`
if (a === isNaN(a)) {
    console.log(`true`);
} else {console.log(`false`);}
// 21. Convert the number -10 to a string using `toString()`.
//     Hint: `toString()` works with negative numbers too.
//     [Learn more about toString()](https://www.w3schools.com/jsref/jsref_tostring_number.asp)
a = -10
a = a.toString()
console.log(typeof a);
// 22. Use `parseFloat()` to parse the string "1.2e-3" into a number.
//     Hint: `parseFloat()` can handle scientific notation.
//     [Learn more about parseFloat()](https://www.w3schools.com/jsref/jsref_parsefloat.asp)
a = `1.2e-3`
a = parseFloat(a)
console.log(a);
// 23. Format the number 1234.5678 to 2 decimal places using `toFixed()`.
//     Hint: This will round the number.
//     [Learn more about toFixed()](https://www.w3schools.com/jsref/jsref_tofixed.asp)
a = 1234.5678
a = a.toFixed(2)
console.log(a);
// 24. Use `isFinite()` to check if the result of 1/0 is finite.
//     Hint: Division by zero results in Infinity.
//     [Learn more about isFinite()](https://www.w3schools.com/jsref/jsref_isfinite.asp)
a = 1/0
a = isFinite(a)
console.log(a);
// 25. Convert the hexadecimal string "FF" to a decimal number using `parseInt()`.
//     Hint: `parseInt(string, 16)` parses a hexadecimal string.
//     [Learn more about parseInt() with radix](https://www.w3schools.com/jsref/jsref_parseint.asp)
a = `FF`
a = parseInt(a,16)
console.log(a);
// Remember to test your solutions and experiment with different inputs!

