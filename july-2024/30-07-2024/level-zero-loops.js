// # 30 Basic 'for' Loop Exercises in JavaScript

// ## Basic Counting Exercises

// 1. Write a for loop that counts from 1 to 5 and prints each number.
//    ```javascript
//    // Your code here
//    ```
let i;
for (i = 0; i <= 5; i++) {
    console.log(i);
}
// 2. Create a for loop that counts from 0 to 9 and prints each number.
//    ```javascript
//    // Your code here
//    ```
i;
for (i = 0; i <= 9; i++) {
    console.log(i);
}
// 3. Write a for loop that counts from 10 to 1 (backwards) and prints each number.
//    ```javascript
//    // Your code here
//    ```
i;
for (i = 10; i > 0; i--) {
    console.log(i);
}
// 4. Create a for loop that counts from 1 to 10, but only prints even numbers.
//    ```javascript
//    // Your code here
//    ```
i;
for ( i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(`This is even number:`, i);
    }
}
// 5. Write a for loop that counts from 1 to 10, but only prints odd numbers.
//    ```javascript
//    // Your code here
//    ```
i;
for ( i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        console.log(`This is odd number:`, i);
    }
}
// ## Counting with Different Increments

// 6. Create a for loop that counts from 0 to 15 by 3s (0, 3, 6, 9, 12, 15).
//    ```javascript
//    // Your code here
//    ```
i;
let sum = 0 
for (i =0; i < 5; i++) {
    sum+= + 3
    console.log(sum);
}
// 7. Write a for loop that counts from 1 to 20 by 2s (1, 3, 5, ..., 19).
//    ```javascript
//    // Your code here
//    ```
i;
sum = 1
for (sum = 1; sum < 20;) {
    sum += + 2
    console.log(sum);
}
// 8. Create a for loop that counts from 2 to 20 by 2s (2, 4, 6, ..., 20).
//    ```javascript
//    // Your code here
//    ```
i;
sum = 0
for (sum = 0; sum < 20;) {
    sum += + 2
    console.log(sum);
}
// 9. Write a for loop that counts from 10 to 0 by 2s (10, 8, 6, ..., 0).
//    ```javascript
//    // Your code here
//    ```
i;
for (i = 12; i > 0;) {
    i -= 2
    console.log(i);
}
// 10. Create a for loop that counts from 5 to 25 by 5s (5, 10, 15, 20, 25).
//     ```javascript
//     // Your code here
//     ```
i;
sum = 0
for (i = 0; i < 5; i++) {
    sum += + 5
    console.log(sum);
}
// ## Printing Patterns

// 11. Write a for loop that prints "*" five times on the same line.
//     ```javascript
//     // Your code here
//     ```
i;
sum = '*'
for (i = 0; i < 5; i++) {
    sum += '*'

}
console.log(sum);
// 12. Create a for loop that prints "Hello" three times, each on a new line.
//     ```javascript
//     // Your code here
//     ```
i;
sum = ''
for (i = 0; i < 3; i++) {
    sum += 'Hello\n'

}
console.log(sum);
// 13. Write a for loop that prints numbers from 1 to 3, each followed by "!".
//     ```javascript
//     // Your code here
//     ```
i;
for (i = 1; i <= 3; i++) {
    console.log(`${i}!`);
}

// 14. Create a for loop that prints "A" to "E" (one letter per iteration).
//     ```javascript
//     // Your code here
//     ```
i;
let j = [`A`,`B`,`C`,`D`,`E`]

for (i =0; i < row.length; i++) {
    console.log(`${row[i]}`);
}
// 15. Write a for loop that prints "2" four times, separated by spaces.
//     ```javascript
//     // Your code here
//     ```
i;
row = `2 `
for (i = 0; i < 3; i++) {
    row += `2 `
}
console.log(row);

// ## Working with Arrays

// 16. Given the array `[1, 2, 3, 4, 5]`, write a for loop to print each element.
//     ```javascript
//     let arr = [1, 2, 3, 4, 5];
//     // Your code here
//     ```
let numbers = [1,2,3,4,5]
i;
for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// 17. Given the array `['a', 'b', 'c', 'd']`, use a for loop to print each element.
//     ```javascript
//     let arr = ['a', 'b', 'c', 'd'];
//     // Your code here
//     ```
let letters = ['a','b','c','d']
i;
for (i = 0; i < numbers.length; i++) {
    console.log(letters[i]);
}
// 18. Write a for loop to print each element of `[10, 20, 30, 40, 50]` backwards.
//     ```javascript
//     let arr = [10, 20, 30, 40, 50];
//     // Your code here
//     ```
numbers = [10,20,30,40,50]
i;
for (i = numbers.length; i >= 0; i--) {
    console.log(numbers[i]);
}
// 19. Use a for loop to print every second element of `[1, 2, 3, 4, 5, 6]`.
//     ```javascript
//     let arr = [1, 2, 3, 4, 5, 6];
//     // Your code here
//     ```
numbers = [1,2,3,4,5,6]
i;
for (i = 0; i < numbers.length;i++) {
    console.log(`Exercise 19:`,numbers[i+i]);
}
// 20. Given `['red', 'green', 'blue']`, use a for loop to print "Color: [color]" for each.
//     ```javascript
//     let colors = ['red', 'green', 'blue'];
//     // Your code here
//     ```
let colors = ['red', 'green', 'blue']
i;
for (i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
// ## Simple Calculations in Loops

// 21. Write a for loop to calculate the sum of numbers from 1 to 5.
//     ```javascript
//     let sum = 0;
//     // Your code here
//     ```
i;
sum = 0
for (i = 0; i < 5; i++) {
    sum +=  i

}
console.log(sum);
// 22. Create a for loop to calculate the product of numbers from 1 to 5.
//     ```javascript
    // let product = 1;
//     // Your code here
//     ```
let product = 1;
i;
for (i = 0; i < 5; i++ ) {
    product =+ i * i
}
console.log(product);
// 23. Use a for loop to count how many even numbers are in `[1, 2, 3, 4, 5, 6, 7, 8]`.
//     ```javascript
    // let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//     let count = 0;
//     // Your code here
//     ```
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let count = 0;
i;
for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        count++
    }
}
console.log(`Amount of even numbers in arr:`,count);
// 24. Write a for loop to find the largest number in `[10, 5, 8, 12, 3]`.
//     ```javascript
//     let arr = [10, 5, 8, 12, 3];
//     let largest = arr[0];
//     // Your code here
//     ```
arr = [10, 5, 8, 12, 3];
i;
let largest = arr[0];
for (i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i+1]) {
        largest = arr[i]
    } else if (arr[i] < arr[i+1]) {
        largest = arr[i]
    } else (arr[i] === arr[i]) 
    }
    console.log(largest);
// 25. Use a for loop to calculate the sum of even numbers from 1 to 10.
//     ```javascript
//     let sum = 0;
//     // Your code here
//     ```
sum = 0
i;
for (i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        sum += i
    }
}
console.log(sum);
// ## Nested Loops

// 26. Write nested for loops to create this pattern:
//     ```
//     *
//     **
//     ***
//     ```
//     ```javascript
//     // Your code here
//     ```
let pattern = ' '
i;
for (i = 0; i < 5; i++) {
    pattern += '*'
    console.log(pattern);
}
// 27. Create nested for loops to print a 3x3 grid of asterisks.
//     ```javascript
//     // Your code here
//     ```
pattern = '';
row;
i;
for (i = 0; i < 3; i++) {
    let rowPattern = '';
    for (row = 0; row < 3; row++) {
        rowPattern += '*';
    }
    pattern += rowPattern + '\n';
}
console.log(pattern);

// 28. Use nested for loops to create this number pattern:
//     ```
//     1
//     12
//     123
//     ```
//     ```javascript
//     // Your code here
//     ```
pattern = ' '
i;
for (i = 1; i < 5; i++) {
    pattern += `${i}`
    console.log(pattern);
}
// 29. Write nested for loops to create a 4x4 multiplication table.
//     ```javascript
//     // Your code here
//     ```
pattern = '';
row;
i;
for (i = 0; i < 4; i++) {
    let rowPattern = '';
    for (row = 0; row < 4; row++) {
        rowPattern += '*';
    }
    pattern += rowPattern + '\n';
}
console.log(pattern);
// 30. Create nested for loops to print this pattern:
//     ```
//     1
//     22
//     333
//     ```
//     ```javascript
//     // Your code here
//     ```
pattern = ' ' 
i;
row;
for (i = 1; i <= 5; i++) {
    pattern = ` `
    for (row = 1; row <= i; row++) {
        pattern += `${i}`
    }   console.log(pattern);
}
// These exercises focus on reinforcing the basic syntax and usage of 'for' loops in JavaScript. They start with simple counting exercises and gradually introduce more concepts like working with arrays, performing calculations, and using nested loops. Remember to encourage students to experiment with the loop parameters (start, condition, increment) to deepen their understanding.