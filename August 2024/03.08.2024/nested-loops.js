// # 30 Easy Nested Loop Exercises in JavaScript

// ## Exercise 1
// Print a 2x2 grid of asterisks.
// Hint: Use two nested loops, both running 2 times.

function gridAsterisks(asterisks) {
    for (i = 0; i < asterisks; i++) {
        row = ``
        for (j = 0; j < asterisks; j++) {
            row += `**\n`
        }
        
        
    }
    console.log(row);
}
// gridAsterisks(2)

// [Learn about nested loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#nested_loops)

// ## Exercise 2
// Print numbers from 1 to 4 in a 2x2 grid.
// Hint: Use a counter variable that increments in the inner loop.

function numbersGrid(number) {
    for (i = 0; i < number; i++) {
        let count = 1
        row = ``
        for (j = 0; j < number; j++) {
            row += ` ${count++} ` + `${count}\n`
            count++
            
        }
        
        console.log(row); 
    }
}
// numbersGrid(2)

// [Learn about variables in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#loop_scope_and_closures)

// ## Exercise 3
// Print a right-angled triangle of asterisks with 3 rows.
// Hint: The outer loop controls rows, the inner loop prints asterisks based on the row number.

function triangle(x) {

    for (i = 0; i < x; i++) {
        let row = ``

        for (j = 0; j <= i; j++) {
            row += `*`
              
        }
        console.log(row) 
    }
    
}
// triangle(3)

// [Learn about triangular patterns](https://www.programiz.com/javascript/examples/pyramid-pattern)

// ## Exercise 4
// Print a 3x3 grid where each cell contains the sum of its indices. 
// Hint: Use the loop variables as indices and add them.
function sumIndices(number) {
    for (i = 0; i < number; i++) {
        let count = 1
        row = ``
        for (j = 0 ; j < number; j++) {
            row += `${j} ` + `${count} ` + `${i+j}\n`
            count++
        }
    }
    console.log(row);
}
// sumIndices(3)

// [Learn about 2D arrays](https://www.freecodecamp.org/news/javascript-2d-arrays/)

// ## Exercise 5
// Print a 3x3 multiplication table.
// Hint: Multiply the outer loop variable by the inner loop variable.

function multiplicationTable(x) {
    for (i = 1; i <= x; i++) {
        let row = ` `
        for (j = 1; j <= x; j++) {
            row += ` ${j*i}`
             
        }
        console.log(row)
    }
}
// multiplicationTable(3)

// [Learn about multiplication tables](https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-62.php)

// ## Exercise 6
// Print a square border of asterisks with side length 3.
function borderAsterisks(number) {
    for (i = 0; i < number; i++) {
        let row = ``
        for (j = 1; j < number; j++) {
            row += `*` + `*` + `*` + `\n`
            if (j % 2 !== 0) {
                row += `*` + ` ` + `*` + `\n`
            } else {
            }
             
        }
        console.log(row)
    }
}
// borderAsterisks(3)

// Hint: Use conditional statements to print asterisks only on the border.

// [Learn about conditional statements in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

// ## Exercise 7
// Print numbers from 1 to 9 in a 3x3 grid.
// Hint: Use a single counter variable that increments in the inner loop.

function gridnumberAddition(number) {
    for (let i = 1; i < number; i++) {
        let row = '';
        let skipCount = 0;

        for (let j = 1; j < number; j++) {
            if (skipCount > 0) {
                skipCount--;
                continue;
            }
            let count = 1;
            row += `${j} ${j + count} ${j + count + 1}\n`;
            skipCount = 2; // Skip the next two iterations
        }
        console.log(row);
    }
    
}

// gridnumberAddition(9);

// [Learn about incrementing in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)

// ## Exercise 8
// Print a 3x3 grid of even numbers starting from 2.
// Hint: Start with 2 and increment by 2 in each iteration.

function printGrid(number) {
    let count = 2
    for (let i = 0; i < number; i++) {
        row = ``
        for (let j = 0; j < number; j++) {
            row += `${count} `
            count += 2
        }
        console.log(row);
        
    }
}
// printGrid(3);

// [Learn about arithmetic in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators)

// ## Exercise 9
// Print a right-angled triangle of numbers with 3 rows.
// Hint: Use the inner loop variable as the number to print.

function printTriangle() {
    for (let i = 1; i <= 3; i++) {
        row = ``
        for (let j = 1; j <= i; j++) {
            row += `${j}`
        }
        console.log(row);
        
    }
}
// printTriangle(3)

// [Learn about nested loops for patterns](https://www.programiz.com/javascript/examples/pyramid-pattern)

// ## Exercise 10
// Print a 3x3 checkerboard pattern of 0s and 1s.
// Hint: Use the sum of indices and the modulo operator to determine whether to print 0 or 1.

// [Learn about the modulo operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)

// ## Exercise 11
// Print a 3x3 grid where each cell contains its row number.
// Hint: Use the outer loop variable as the number to print.
function rowNumber (number) {
    for (let i = 1; i <= number; i++) {
        row = ``
        
        for (let j = 1; j <= number; j++) {
            row += `${j} ` + `${j} ` + `${j}` + `\n`

        }
        
    }
    console.log(row);
    
}
// rowNumber(3)

// [Learn about accessing loop variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)

// ## Exercise 12
// Print a 3x3 grid where each cell contains its column number.
// Hint: Use the inner loop variable as the number to print.

function columnNumber (number) {
    for (let i = 0; i <= number; i++) {
        row = ``
        
        for (let j = 0; j < number; j++) {
            row += `${0} ` + `${1} ` + `${2} ` + `\n`

        }
        
    }
    console.log(row);
    
}
// columnNumber(3)

// [Learn about nested loop variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#nested_loops)

// ## Exercise 13
// Print a 4x4 grid of alternating X and O.
// Hint: Use the sum of indices and the modulo operator to determine whether to print X or O.

function xOxO (number) {
    for (let i = 1; i < number; i++) {
        row = ``
        
        for (let j = 1; j < i; j++) {
            row += `X ` + `O ` + `X ` + `O ` + `\n`
            if (j % 2 !== 0 || i % 2 !== 0 ) {
                row += `O ` + `X ` + `O ` + `X `+`\n`
            }

        }
        
    }
    console.log(row);
    
}
// xOxO(4)

// [Learn about conditional operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#conditional_ternary_operator)

// ## Exercise 14
// Print a right-angled triangle of odd numbers with 4 rows.
// Hint: Use a counter that starts at 1 and increments by 2.

// [Learn about incrementing in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)

// ## Exercise 15
// Print a 3x3 grid where each cell contains the absolute difference between its row and column indices.
// Hint: Use Math.abs() to calculate the absolute difference.

// [Learn about Math.abs()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)

// ## Exercise 16
// Print a hollow right-angled triangle of asterisks with 4 rows.
// Hint: Print asterisks only when it's the first or last column, or the last row.

function printHollowTriangle(number) {
    for (let i = 0; i < number; i++) {
        let row = ``;
        for (let j = 0; j <= number; j++) {
            if (j <= 0) {
                row += `*\n`;
            } else if (j % 4 === 0) {
                row += `****\n`;
            } else if (j % 3 === 0) {
                row += `* *\n`;
            } else if (j % 2 === 0) {
                row += `**\n`;
            }
        }
        console.log(row);
    }
}

// printHollowTriangle(4);

// [Learn about logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators)

// ## Exercise 17
// Print a 4x4 grid where each cell contains the smaller of its row or column index.
// Hint: Use Math.min() to compare row and column indices.

// [Learn about Math.min()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)

// ## Exercise 18
// Print a 4x4 grid where each cell contains the larger of its row or column index.

// Hint: Use Math.max() to compare row and column indices.

// [Learn about Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

// ## Exercise 19
// Print a right-angled triangle of consecutive letters (A-Z) with 4 rows.

// Hint: Use String.fromCharCode() to convert numbers to letters.

// [Learn about String.fromCharCode()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)

// ## Exercise 20
// Print a 3x3 grid where each cell contains the sum of all numbers from 1 to the product of its indices.

// Hint: Use a nested loop to calculate the sum for each cell.

// [Learn about nested loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#nested_loops)

// ## Exercise 21
// Print a 4x4 grid of ascending numbers in a spiral pattern.

// Hint: Use a 2D array and fill it in a spiral pattern.

// [Learn about 2D arrays](https://www.freecodecamp.org/news/javascript-2d-arrays/)

// ## Exercise 22
// Print a diamond pattern of asterisks with maximum width 5.

// Hint: Combine an increasing triangle with a decreasing triangle.

// [Learn about complex patterns](https://www.programiz.com/javascript/examples/pyramid-pattern)

// ## Exercise 23
// Print a 4x4 grid where each cell contains the result of its row index raised to the power of its column index.

// Hint: Use the ** operator for exponentiation.

// [Learn about the exponentiation operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)

// ## Exercise 24
// Print a right-angled triangle of descending numbers with 4 rows, starting from 10.

// Hint: Initialize a counter with 10 and decrement it in each iteration.

// [Learn about decrementing in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)

// ## Exercise 25
// Print a 4x4 grid where each cell contains the result of (row index * 2) + column index.

// Hint: Use arithmetic operations with the loop variables.

// [Learn about arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators)

// ## Exercise 26
// Print a hollow square of hash symbols (#) with side length 5.

// Hint: Print hash symbols only when it's the first or last row, or the first or last column.

// [Learn about logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators)

// ## Exercise 27
// Print a 4x4 grid where each cell contains the smaller of: the product of its indices or 5.

// Hint: Use Math.min() to compare the product with 5.

// [Learn about Math.min()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)

// ## Exercise 28
// Print a right-angled triangle of asterisks with 5 rows, but skip the third row.

// Hint: Use an if statement to skip printing when the row index is 3.

// [Learn about if statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

// ## Exercise 29
// Print a 5x5 grid where cells on the main diagonal (where row index equals column index) contain 1, and all other cells contain 0.

// Hint: Use an if statement to check if row index equals column index.

// [Learn about equality operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality)

// ## Exercise 30
// Print a 4x4 grid where each cell contains the sum of its row index, column index, and the number 1.

// Hint: Add the row index, column index, and 1 for each cell.

// [Learn about arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators)