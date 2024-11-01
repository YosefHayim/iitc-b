// # JavaScript Math Methods Exercises

// 1. Use `Math.round()` to round 4.7 to the nearest integer.
//    Hint: `Math.round()` rounds to the nearest whole number.
//    [Learn more about Math.round()](https://www.w3schools.com/jsref/jsref_round.asp)
let a = 4.7
a = Math.round(a)
console.log(a);
// 2. Calculate the square root of 16 using `Math.sqrt()`.
//    Hint: `Math.sqrt(x)` returns the square root of x.
//    [Learn more about Math.sqrt()](https://www.w3schools.com/jsref/jsref_sqrt.asp)
a = 16
a = Math.sqrt(a)
console.log(`the square root of 16 is:`,a);
// 3. Use `Math.pow()` to calculate 2 to the power of 3.
//    Hint: `Math.pow(base, exponent)` returns base raised to exponent.
//    [Learn more about Math.pow()](https://www.w3schools.com/jsref/jsref_pow.asp)
a = 2
a = Math.pow(a,3)
console.log(`the power of 2 returns`,a);
// 4. Find the absolute value of -5 using `Math.abs()`.
//    Hint: `Math.abs(x)` returns the absolute value of x.
//    [Learn more about Math.abs()](https://www.w3schools.com/jsref/jsref_abs.asp)
a = -5
a = Math.abs(a)
console.log(`the absolute value of -5 is:`,a);
// 5. Use `Math.floor()` to round 4.9 down to the nearest integer.
//    Hint: `Math.floor()` always rounds down.
//    [Learn more about Math.floor()](https://www.w3schools.com/jsref/jsref_floor.asp)
a = 4.9
a = Math.floor(a)
console.log(`the neareset integer is:`,a);
// 6. Use `Math.ceil()` to round 4.1 up to the nearest integer.
//    Hint: `Math.ceil()` always rounds up.
//    [Learn more about Math.ceil()](https://www.w3schools.com/jsref/jsref_ceil.asp)
a = 4.1
a = Math.ceil(a)
console.log(`the rounds up integer:`,a);
// 7. Generate a random number between 0 and 1 using `Math.random()`.
//    Hint: `Math.random()` returns a number between 0 (inclusive) and 1 (exclusive).
//    [Learn more about Math.random()](https://www.w3schools.com/jsref/jsref_random.asp)
a = Math.random()
console.log(`random number between 0 and 1:`,a);
// 8. Find the maximum of 5, 10, and 15 using `Math.max()`.
//    Hint: `Math.max()` can take multiple arguments.
//    [Learn more about Math.max()](https://www.w3schools.com/jsref/jsref_max.asp)
a = Math.max(5,10,15)
console.log(`Maximum of 5 is:`,a);
// 9. Find the minimum of 5, 10, and 15 using `Math.min()`.
//    Hint: `Math.min()` can take multiple arguments.
//    [Learn more about Math.min()](https://www.w3schools.com/jsref/jsref_min.asp)
a = Math.min(5,10,15)
console.log(`the minimum of 5 is:`,a);

// 10. Calculate the sine of 90 degrees using `Math.sin()`.
//     Hint: `Math.sin()` works with radians, so convert degrees to radians first.
//     [Learn more about Math.sin()](https://www.w3schools.com/jsref/jsref_sin.asp)
a = 90
a = a * (Math.PI / 180);
a = Math.sin(a)
console.log(`the sine of 90 degrees is:`,a);
// 11. Use `Math.cos()` to calculate the cosine of 0 degrees.
//     Hint: Remember to convert degrees to radians.
//     [Learn more about Math.cos()](https://www.w3schools.com/jsref/jsref_cos.asp)
a = 0
a = a * (Math.PI / 180);
a = Math.cos(a)
console.log(`the cos of 0 degrees is:`,a);
// 12. Calculate the tangent of 45 degrees using `Math.tan()`.
//     Hint: Convert 45 degrees to radians before using `Math.tan()`.
//     [Learn more about Math.tan()](https://www.w3schools.com/jsref/jsref_tan.asp)
a = 45
a = a * (Math.PI / 180);
a = Math.tan(a)
console.log(`the tan of 45 degrees is:`,a);
// 13. Use `Math.log()` to calculate the natural logarithm of 2.
//     Hint: `Math.log(x)` returns the natural logarithm of x.
//     [Learn more about Math.log()](https://www.w3schools.com/jsref/jsref_log.asp)
a = 2
a = Math.log(a)
console.log(`the natural logarithm of 2 is:`,a);
// 14. Calculate e raised to the power of 2 using `Math.exp()`.
//     Hint: `Math.exp(x)` returns e^x.
//     [Learn more about Math.exp()](https://www.w3schools.com/jsref/jsref_exp.asp)
a = 2
a = Math.exp(a)
console.log(`the power of 2:`,a);
// 15. Use `Math.trunc()` to remove the decimal part of 3.7.
//     Hint: `Math.trunc()` removes any fractional digits.
//     [Learn more about Math.trunc()](https://www.w3schools.com/jsref/jsref_trunc.asp)
a = 3.7
a = Math.trunc(a)
console.log(`removed decimal part of 3.7 to:`,a);
// 16. Generate a random integer between 1 and 10 (inclusive) using `Math.random()` and `Math.floor()`.
//     Hint: Multiply `Math.random()` by 10, add 1, and use `Math.floor()`.
//     [Learn more about Math.random()](https://www.w3schools.com/jsref/jsref_random.asp)
let randomNum = Math.random() * 10 + 1
randomNum = Math.floor(randomNum)
console.log(randomNum);
// 17. Calculate the arcsine of 0.5 using `Math.asin()`.
//     Hint: `Math.asin()` returns the result in radians.
//     [Learn more about Math.asin()](https://www.w3schools.com/jsref/jsref_asin.asp)
a = 0.5
a = Math.asin(a)
console.log(`the arcsine of 0.5 is:`,a);
// 18. Use `Math.hypot()` to calculate the hypotenuse of a right triangle with sides of length 3 and 4.
//     Hint: `Math.hypot(a, b)` returns sqrt(a^2 + b^2).
//     [Learn more about Math.hypot()](https://www.w3schools.com/jsref/jsref_hypot.asp)
a = 3
b = 4
c = Math.hypot(a,b)
console.log(`the hypotenuse is:`,a);
// 19. Calculate 5 factorial using a combination of `Math.pow()` and `Math.exp()`.
//     Hint: Use the approximation n! ≈ sqrt(2πn) * (n/e)^n.
//     [Learn more about Math functions](https://www.w3schools.com/js/js_math.asp)

// 20. Use `Math.sign()` to determine the sign of -15.
//     Hint: `Math.sign()` returns -1, 0, or 1 based on the sign of the number.
//     [Learn more about Math.sign()](https://www.w3schools.com/jsref/jsref_sign.asp)
a = -15
a = Math.sign(a)
console.log(`the math.sign of -15 is:`,a);
// 21. Calculate the cube root of 27 using `Math.pow()`.
//     Hint: The cube root of x is the same as x^(1/3).
//     [Learn more about Math.pow()](https://www.w3schools.com/jsref/jsref_pow.asp)
a = 27
a = Math.pow(a)
console.log(`the cube root of 27 is:`,a);
// 22. Use `Math.log10()` to calculate the base-10 logarithm of 100.
//     Hint: `Math.log10(x)` returns the base-10 logarithm of x.
//     [Learn more about Math.log10()](https://www.w3schools.com/jsref/jsref_log10.asp)
a = 100
a = Math.log10(a)
console.log(`the base-10 logarithm of 100 is:`,a);
// 23. Calculate the area of a circle with radius 5 using `Math.PI`.
//     Hint: The area of a circle is πr^2.
//     [Learn more about Math.PI](https://www.w3schools.com/jsref/jsref_pi.asp)

// 24. Use `Math.atan2()` to calculate the angle (in radians) from the x-axis to the point (1, 1).
//     Hint: `Math.atan2(y, x)` returns the angle in radians.
//     [Learn more about Math.atan2()](https://www.w3schools.com/jsref/jsref_atan2.asp)

// 25. Round 4.5 to the nearest integer using `Math.round()`. Then do the same for 5.5. Observe the rounding behavior.
//     Hint: `Math.round()` rounds to the nearest integer, with .5 rounding up.
//     [Learn more about Math.round()](https://www.w3schools.com/jsref/jsref_round.asp)
a = 4.5
a = Math.round(a)
console.log(`the nearest integer of 4.5 is:`,a);

a = 5.5
a = Math.round(a)
console.log(`the nearest integer of 5.5 is:`,a);

// Remember to test your solutions and experiment with different inputs!

