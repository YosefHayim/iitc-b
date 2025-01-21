"charset UTF-8"

//Variables

// 1. Declare a variable named "name" and assign your name to it. Output the variable.
// Output: "YourName"
// let name = `Joseph`
// console.log("exercise 1:",name);

// 2. Declare a variable "age" and assign your age to it. Output the variable.
// Output: YourAge
// let age = 24
// console.log("exercise 2:",age);
// 3. Create two variables, "firstName" and "lastName", and assign them your first and last names. Output them together.
// Output: "YourFirstName YourLastName"
// let firstName = `Joseph`
// let lastName = 'Sabag'
// console.log("exercise 3:",firstName,lastName);
// 4. Declare a variable "num" and assign it any number. Output the number multiplied by 10.
// Output: num * 10
// let num = 10
// console.log("exercise 4:",num * 10);
// 5. Declare a variable "isStudent" and assign it a boolean value (true or false). Output the variable.
// Output: true or false
// let isStudent = true
// console.log("exercise 5:",isStudent);
// 6. Create a variable "x" and assign it a value. Create another variable "y" and assign it the value of "x" plus 5. Output "y".
// Output: x + 5
// let x = 100
// let y = x + 5
// console.log("exercise 6:",y);
// 7. Declare a variable "greeting" and assign it a string "Hello". Append your name to the greeting and output it.
// Output: "Hello YourName"
// let greeting = "Hello"
// console.log("exercise 7",greeting +` Joseph`);

// 8. Create a variable "a" and assign it 10. Create a variable "b" and assign it 20. Swap their values and output them.
// Output: a = 20, b = 10
// let a = 10
// let b = 20                                                               
// a = 20
// b = 10
// console.log("exercise 8:",`\nThis is A:`,a,`\nThis is B:`,b);

// 9. Declare a variable "total" and assign it the sum of 15 and 25. Output "total".
// Output: 40
// let total = 15 + 25
// console.log(`exercise 9:`,total);

// 10. Create a variable "count" and initialize it to 1. Increment the value by 1 and output the variable.
// Output: 2
// let count = 1
// count++
// console.log(`exercise 10:`, count);


//Conditional statements

// 1. Declare a variable "num" and assign it any number. Check if the number is positive and output "Positive" if it is.
// Output: "Positive"
// num = 1
// if (num > 0) {
//     console.log(`exercise 11: Positive`);
    
// } else {
//     console.log(`exercise 11: Negative`);
    
// }

// 2. Create a variable "score" and assign it a value. If the score is greater than 50, output "Pass", otherwise output "Fail".
// Output: "Pass" or "Fail"
// score = 49
// if (score > 50) {
//     console.log(`exercise 12: Pass`);
    
// } else {
//     console.log(`exercise 12: Fail`);
    
// }

// 3. Declare a variable "temperature" and assign it a value. If the temperature is below 0, output "Freezing", if it's above 30, output "Hot", otherwise output "Warm".
// Output: "Freezing", "Hot", or "Warm"
// temperature = 10
// if (temperature > 30) {
//     console.log(`exercise 13: Hot`);
    
// } else if (temperature < 0) {
//     console.log(`exercise 13: Freezing`);
    

// } else {
//     console.log(`exercise 13: Warm`)
// }


// 4. Create two variables "a" and "b". Check if "a" is greater than "b" and output "a is greater", otherwise output "b is greater".
// Output: "a is greater" or "b is greater"
// a = 10
// b = 11

// if (a > b) {
//     console.log(`exercise 14: a is greater`);
    
// } else if (b > a) {
//     console.log(`exercise 14: b is greater`);
// }

// 5. Declare a variable "day" and assign it a number from 1 to 7. Output the corresponding day of the week (1 for Monday, 2 for Tuesday, etc.).
// Output: "Monday", "Tuesday", ..., "Sunday"
// let day = 6

// if (day === 1) {
//     console.log(`Monday`);
    
// } else if (day === 2) {
//     console.log(`Tuesday`);
    
// } else if (day === 3) {
//     console.log(`Wendsday`);
    
// } else if (day === 4) {
//     console.log(`Thursday`);
    
// } else if (day === 5) {
//     console.log(`Friday`);
    
// } else if (day === 6) {
//     console.log(`Saturday`);
    
// } else if (day === 7) {
//     console.log(`Sunday`);
    
// }

// 6. Create a variable "grade" and assign it a value. Output "Excellent" if the grade is A, "Good" if B, "Average" if C, and "Poor" if D or F.
// Output: "Excellent", "Good", "Average", or "Poor"
// let grade = `A`

// if (day === `A`) {
//     console.log(`Excellent`);
    
// } else if (grade === `B`) {
//     console.log(`Good`);
    
// } else if (grade === `C`) {
//     console.log(`Average`);
    
// } else if (grade === `C` || grade === `F`) {
//     console.log(`Poor`);
// }
// 7. Declare a variable "num" and assign it a value. Check if the number is even or odd and output "Even" or "Odd".
// Output: "Even" or "Odd"
// num = 10

// if (num % 2 === 0) {
//     console.log(`Even`);
    
// } else {
//     console.log(`Odd`);
    
// }
// 8. Create a variable "age" and assign it a value. Output "Child" if age is less than 13, "Teen" if 13-19, "Adult" if 20-59, "Senior" if 60 and above.
// Output: "Child", "Teen", "Adult", or "Senior"
// age = 24

// if (age < 13) {
//     console.log(`Child`);
    
// } else if (age > 13 && age <= 19) {
//     console.log(`Teen`);
    
// } else if (age > 20 && age <= 59) {
//     console.log(`Adult`);
    
// } else {
//     console.log(`Senior`);
    
// }

// 9. Declare a variable "color" and assign it a string. Output "Primary color" if the color is "red", "blue", or "yellow", otherwise output "Not a primary color".
// Output: "Primary color" or "Not a primary color"
// let color = `blue`

// if (color === `red` || color === `blue` || color === `yellow`) {
//     console.log(`Primary color`);
    
// } else {
//     console.log(`Not a Primary color`);
// }
// 10. Create two variables "x" and "y". Check if both are greater than 0 and output "Both are positive", if one is positive output "One is positive", otherwise output "None are positive".
// Output: "Both are positive", "One is positive", or "None are positive"

// Functions 

// 1. Create a function "greet" that takes a name as a parameter and outputs "Hello, [name]".
// Output: "Hello, [name]"
function greet (name) {
    console.log(`Hello`,[name]);
    
}
// greet(`Josephino`)

// 2. Write a function "add" that takes two numbers as parameters and returns their sum. Output the result.
// Output: sum of the numbers
function add (a,b) {
    let sum = a + b
    console.log(sum);
    
    return sum
}
// add(5,10)

// 3. Create a function "square" that takes a number as a parameter and returns its square. Output the result.
// Output: square of the number
function square(number) {
    let squareNum = number * number
    console.log(squareNum);
    return squareNum
    
}
// square(10)

// 4. Write a function "isEven" that takes a number as a parameter and returns true if the number is even, otherwise false. Output the result.
// Output: true or false
function isEven (number) {
    if (number % 2 === 0) {
        console.log(`True`);
        return true

    } else {
        console.log(`False`);
        return false
    }
}
// isEven(11)

// 5. Create a function "max" that takes two numbers as parameters and returns the greater number. Output the result.
// Output: the greater number
function max(a,b) {
    if (a > b) {
        console.log(`The greater number is a:`,a);
        
    } else {
        console.log(`The greater number is b:`,b)
    }
}
// max(9,10)

// 6. Write a function "factorial" that takes a number as a parameter and returns its factorial. Output the result.
// Output: factorial of the number

function factorial(number) {
    let result = 1; // Initialize result as 1 because multiplying by 0 gives 0
    for (let i = 1; i <= number; i++) { // Loop from 1 to the number inclusive
        result *= i; // Multiply result by i
    }
    console.log(result); // Output the result
}

// factorial(4); // Output: 24
                                                    // SOLVED BY CHAT GPT


// 7. Create a function "fibonacci" that takes a number as a parameter and returns the nth Fibonacci number. Output the result.
// Output: nth Fibonacci number

                                                // NOT DOING DONT KNOW FIBONACCI

// 8. Write a function "isPrime" that takes a number as a parameter and returns true if the number is prime, otherwise false. Output the result.
// Output: true or false
function isPrime(a) {
    if (a < 1) {
        console.log(`Not Prime number:`, a);
        return;
    }

    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            console.log(`This NOT a prime number:`, a);
            return;
        }
    }

    console.log(`This is a prime number:`, a);
}

// isPrime(4);

// 9. Create a function "sumArray" that takes an array of numbers as a parameter and returns the sum of the numbers. Output the result.
// Output: sum of the array elements
let numbers=  [20,10,30,50,1,5]

function sumArray (numbers) {
    let sum = 0
    for (i = 0; i < numbers.length; i++) {
        
        sum += numbers[i]       
    }
    console.log(sum);   
}
// sumArray(numbers)

//Write a function findMax that takes an array of numbers as a parameter and returns the largest number in the array. Output the result.
//console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
function findMax(numbers) {
    let highestNum = numbers[0]; // Start with the first element

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > highestNum) {
            highestNum = numbers[i];
        }
    }

    console.log(`The highest number is:`, highestNum);
    return highestNum;
}
// findMax(numbers)

//Arrays

// 1. Create an array "colors" with the elements "red", "green", and "blue". Output the array.
// Output: ["red", "green", "blue"]
let colors = [`red`,`green`,`blue`]
// console.log(colors);

// 2. Declare an array "numbers" with elements 1 to 5. Output the first element.
// Output: 1
numbers = [1,2,3,4,5]
// console.log(numbers[0]);

// 3. Create an array "fruits" and add "apple" and "banana" to it. Output the array.
// Output: ["apple", "banana"]
let fruits = [`apple`]
fruits.push(`banana`)
// console.log(fruits);

// 4. Write a function "getLastElement" that takes an array as a parameter and returns the last element. Output the result.
// Output: last element of the array
function getLastElement(array) {
    console.log(array[array.length - 1])
}
// getLastElement(fruits)

// 5. Create an array "students" with the elements "Alice", "Bob", and "Charlie". Add "David" to the array. Output the array.
// Output: ["Alice", "Bob", "Charlie", "David"]
let students = [`Alice`,`Bob`,`Charlie`]
students.push(`david`)
// console.log(students);

// 6. Declare an array "grades" with elements 85, 92, 78, 88, 91. Output the average of the grades.
// Output: average of the grades
let grades = [85,92,78,88,91]
let sum = 0

    for (i = 0; i < grades.length; i++) {
        sum += grades[i]
    }
    // console.log(`average is:`,sum/grades.length);

// 8. Create an array "mixed" with different data types (number, string, boolean). Output the array.
// Output: [1, "hello", true]
let mixed = [1,`Hello`,true]
// console.log(mixed);

// 9. Declare an array "names" with elements "John", "Jane", "Jim". Remove the second element and output the array.
// Output: ["John", "Jim"]
let names = [`john`,`jane`,`Jim`]
names.splice(1,1)
// console.log(names);

// 10. Write a function "concatArrays" that takes two arrays as parameters and returns a single array with all elements. Output the result.
// Output: concatenated array
let arry1 = [1,2,3,4,5]
let arry2 = [`hi`,`goodbye`]

function concatArrays(array1, array2) {
    return array1.concat(array2);
}
// console.log(concatArrays(arry1,arry2));

//Objects

// 1. Create an object "person" with properties "name" and "age". Output the object.
// Output: {name: "YourName", age: YourAge}
let person = {
    name: ``,
    age: 0 ,
}
person.name = `Joseph`
person.age = 24
// console.log(person);

// 2. Declare an object "car" with properties "brand" and "model". Output the brand property.
// Output: brand of the car
let car = {
    brand: ``,
    model: ``,
}
// console.log(car.brand = `mazda`);

// 3. Create an object "book" with properties "title", "author", and "pages". Output the object.
// Output: {title: "Title", author: "Author", pages: Number}
let book = {
    title: `title`,
    author: `author`,
    pages: 0,
}
// console.log(book);


// 4. Write a function "getFullName" that takes an object with properties "firstName" and "lastName" and returns the full name. Output the result.
// Output: full name
let information = {
    firstName: `Joseph`,
    lastName: `Sabag`
}
function getFullName (name) {
    console.log(name.firstName, name.lastName);
    return
    

}
// getFullName(information)

// 5. Create an object "student" with properties "name", "age", and "grades" (an array). Output the student's name and the average grade.
// Output: name and average grade
let student = {
    name: `Joseph Sabag`,
    age: 24,
    grades: [100,95,92,90,89,97]
}
sum = 0
for (i = 0; i < student.grades.length; i++) {
    sum += student.grades[i]
}
let averageGrade = sum/student.grades.length

// console.log(student.name,`the average grades of our student is:`,averageGrade);


// 6. Declare an object "address" with properties "city", "street", and "zip". Output the city property.
// Output: city
let address = {
    city: `tel aviv`,
    street: `nehemia tamari 5`,
    zipcode: 543954398,
}
// console.log(address.city);

// 7. Create an object "company" with properties "name" and "employees" (an array of objects with properties "name" and "position"). Output the company object.
// Output: company object
const company = {
    name: "Tech Solutions",
    employees: [
        {
            name: "Alice",
            position: "Developer"
        },
        {
            name: "Bob",
            position: "Designer"
        },
        {
            name: "Charlie",
            position: "Manager"
        }
    ]
};
// console.log(company);


// 8. Write a function "updateAge" that takes an object with a property "age" and a number, and updates the age property. Output the updated object.
// Output: updated object
let isHumanAge = {
    age: 20
};

function updateAge (object) {
    object.age = 25
    console.log(`Object updated to:`,object.age);
    return object.age
    

}
// console.log(isHumanAge);
// updateAge(isHumanAge)
// console.log(isHumanAge);

// 9. Create an object "movie" with properties "title", "director", and "year". Output the movie's title and director.
// Output: title and director
let movie = {
    title: `Spider-man2`,
    director: `don't know`,
    year: 2000,
}
// console.log(movie.title,movie.director);

// Loops 

// 1. Write a for loop to output numbers 1 to 5.
// Output: 1, 2, 3, 4, 5
// function exerciseOne () {
// for (i = 1; i <= 5; i++){
//     console.log(i); 
// }
// }

// 2. Create an array "colors" and use a for loop to output each color.
// Output: each color in the array
// colors = ["red", "blue", "green", "yellow"];
// for (i = 0; i < colors.length; i++){
//     console.log(colors[i]); 
// }

// 3. Write a while loop to output numbers from 5 to 1.
// Output: 5, 4, 3, 2, 1
// i = 0
// while (i < 5) {
//     i++
//     console.log(i);  
// }

// 4. Create an array "numbers" and use a for loop to output the sum of the numbers.
// Output: sum of the numbers
// numbers = [1, 2, 3, 4, 5];
// sum = 0
// for (i = 0 ; i < numbers.length; i++) {
//     sum += numbers[i]
    
    
// }console.log(sum);

// 5. Write a for loop to output the even numbers from 1 to 10.
// Output: 2, 4, 6, 8, 10
// for (i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
        
//     }
// }

// 6. Create a for loop to output the first 10 multiples of 3.
// Output: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30
// for (i = 1; i <= 10; i++) {
//     console.log(i*3);
    
// }

// 7. Write a for loop to output the elements of an array in reverse order.
// Output: elements in reverse order
// randomArray = [42, 'apple', true, 3.14,2,5,654,432,];
// for (i = randomArray.length - 1; i > 0; i--) {
//     console.log(`this is number index: ${i}`,randomArray[i]);
        
//     }
    

// 8. Create an array "grades" and use a for loop to output how many grades are above 80.
// Output: count of grades above 80
// grades = [85, 92, 78, 90, 88, 76, 95, 89];
// let aboveEighty = 0
// for (i = 0; i < grades.length; i++) {
//     if(grades[i] > 80) {
//         aboveEighty += 1

//     }
// }console.log(`the amount above is: ${aboveEighty}`);


// 10. Create an array "words" and use a for loop to output each word in uppercase.
// Output: each word in uppercase
// let wordsArray = ["hello", "word", "JavaScript", "programming"];
// for (i = 0; i < wordsArray.length; i++) {
//     console.log(wordsArray[i].toUpperCase());
    
// }


// Nested Loops 

// 1. Write a nested for loop to output a 3x3 matrix of numbers.
// Output: 
// 1 2 3
// 1 2 3
// 1 2 3
// let num = 1
// for (i = 1; i <= 3; i++) {
//     row = ``
//     for (j = 1; j <= 3; j++) {
//         row += `${num} ` + `${num+1} ` + `${num+2} `+`\n` 

//     }
//     console.log(row);
    
// }  

// 2. Create a nested loop to output a multiplication table from 1 to 5.
// Output: multiplication table

// 3. Write a nested loop to output a pyramid pattern with 5 levels.
// Output: 
// *
// **
// ***
// ****
// *****
// for (i = 0; i <= 5; i++) {
//     row = ``
//     for (j = 0; j < i; j++){
//         row += `*`
//     }
//     console.log(row);
    
// }
// 4. Create an array of arrays (matrix) and use nested loops to output each element.
// Output: each element in the matrix
// matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// for (i = 0; i < matrix.length; i++) {
//     for (j = 0; j < matrix.length; j++) {
//         console.log(`this is each element in the matrix.`,matrix[i][j]);
        
//     }
    
// }

// 5. Write a nested for loop to output all pairs of numbers from 1 to 3.
// Output:
// let pairs = [
//     [1, 1], [1, 2], [1, 3],
//     [2, 1], [2, 2], [2, 3],
//     [3, 1], [3, 2], [3, 3]
// ];
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log([i, j]);
//     }
// }

// 6. Create a nested loop to output the sum of each row in a 2D array.
// Output: sum of each row

// 7. Write a nested loop to output a checkerboard pattern of size 5x5.
// Output: checkerboard pattern

// 8. Create a nested loop to output the transpose of a 2D array.
// Output: transposed array

// 9. Write a nested loop to output the sum of all elements in a 2D array.
// Output: sum of all elements

// 10. Create a nested loop to output a diamond pattern with 5 levels.
// Output: 
//   *
//  ***
// *****
//  ***
//   *
// let count = 1;
// for (let i = 1; i < 5; i++) {
//     let row = ``;
//     for (let j = 1; j <= 5; j++) {    
//         if (count === 1) {
//             row += `  *`+ `\n`
//             count++;
//         }
//         else if (count % 2 === 0) {
//             row += ` *** ` + `\n`
//             count++;
//         } 
//         else if (count % 3 === 0) {
//             row += `*****`+ `\n`;
//             count++;
//         }
//         else if (count % 4 === 0) {
//             row += `* `+ `\n`;
//             count++;
//         }
//         else if (count % 5 === 0) {
//             row +=`  *`+ `\n`
//             count++
//         }
       
//     } 
//     console.log(row);
// }

