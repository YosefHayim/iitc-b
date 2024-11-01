// # JavaScript Logical Operators Quiz

// ## Introduction
// Before starting the quiz, watch this video for an overview of JavaScript logical operators:
// [JavaScript Logical Operators](https://www.youtube.com/watch?v=ovWYhDVQiR8)

// ## Questions

// 1. What are the three main logical operators in JavaScript?
//    Hint: Think about AND, OR, and NOT.
//    [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)
a = b && a
a = b || a
a = b !== b
console.log(a);
// 2. What does the AND (&&) operator do?
//    Hint: It returns true only if both operands are true.
//    [Learn more about AND operator](https://www.w3schools.com/js/js_comparisons.asp)
if (a && b === a && b)
    console.log(true)
else
    console.log(false);
// 3. What is the result of true && true?
//    Hint: AND requires both operands to be true.
//    [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)
if ( a === a & a === a)
    console.log(true);
else console.log(false);
// 4. What is the result of true && false?
//    Hint: AND requires both operands to be true.
//    [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)
if (a === a && a === b)
    console.log(true);
else console.log(false);
// 5. What does the OR (||) operator do?
//    Hint: It returns true if at least one operand is true.
//    [Learn more about OR operator](https://www.w3schools.com/js/js_comparisons.asp)
if (a === b || b !== a)
    console.log(true);
else console.log(false);
// 6. What is the result of false || true?
//    Hint: OR requires only one operand to be true.
//    [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)
if (a === b || b === a)
    console.log(true);
else console.log(false);
// 7. What is the result of false || false?
//    Hint: OR requires at least one operand to be true.
//    [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)
if (a === b || b === a)
    console.log(true);
else console.log(false);
// 8. What does the NOT (!) operator do?
//    Hint: It inverts the boolean value of its operand.
//    [Learn more about NOT operator](https://www.w3schools.com/js/js_comparisons.asp)
if (a !== b || b !== a)
    console.log(true);
else console.log(false);
// 9. What is the result of !true?
//    Hint: NOT inverts the boolean value.
//    [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)
if (a !== b || b !== a)
    console.log(true);
else console.log(false);
// 10. What is the result of !false?
//     Hint: NOT inverts the boolean value.
//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)
if (b !== b || b !== b)
    console.log(true);
else console.log(false);
// 11. What is the result of true && true && false?
//     Hint: AND requires all operands to be true.
//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)
a = 5
b = 5
if (a === b && b === a && b !== a)
    console.log(true);
else console.log(false);
// 12. What is the result of false || false || true?
//     Hint: OR requires at least one operand to be true.
//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)
if (a !== b || b !== a || b !== b)
    console.log(true);
else console.log(false);
// 13. What is the order of precedence for logical operators?
//     Hint: NOT has the highest precedence, followed by AND, then OR.
//     [Learn more about operator precedence](https://www.w3schools.com/js/js_precedence.asp)
if (a !== b && b !== a || a !== b)
    console.log(true);
else console.log(false);
// 14. What is short-circuit evaluation in logical operations?
//     Hint: It's when the second operand is not evaluated if the first operand is sufficient to determine the result.
//     [Learn more about short-circuit evaluation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation)
if (a === b)
    if (b === a)
    console.log(true);
else console.log(false);
// 15. In the expression a && b, when is b not evaluated?
//     Hint: Think about when the result can be determined by a alone.
//     [Learn more about AND operator](https://www.w3schools.com/js/js_comparisons.asp)
if (a === b && b !== a)
    console.log(true);
else console.log(false);
// 16. In the expression a || b, when is b not evaluated?
//     Hint: Think about when the result can be determined by a alone.
//     [Learn more about OR operator](https://www.w3schools.com/js/js_comparisons.asp)
if (a === a || b === b)
    console.log(true);
else console.log(false);
// 17. What is the result of 5 > 3 && 2 < 4?
//     Hint: Evaluate each comparison first, then apply the AND operator.
//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)
if (5 > 3 && 2 < 4)
    console.log(true);
else console.log(false);
// 18. What is the result of 5 > 7 || 3 < 2?
//     Hint: Evaluate each comparison first, then apply the OR operator.
//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)
if (5 > 7 || 3 < 2)
    console.log(true);
else console.log(false);
// 19. What is the result of !(5 > 3)?
//     Hint: Evaluate the comparison first, then apply the NOT operator.
//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)
if ( 5 > 3)
    if (5 !== 3)
    console.log(true);
else console.log(false);
// 20. How can you use parentheses to change the order of evaluation in logical expressions?
//     Hint: Expressions within parentheses are evaluated first.
//     [Learn more about operator precedence](https://www.w3schools.com/js/js_precedence.asp)
a = (5 * 3 + (5 / 2) - (10 * 2))
console.log(a);
// Remember to test your knowledge by trying these operations in a JavaScript console!
