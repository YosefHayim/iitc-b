// Callback Exercises for Beginners

// 1. Simple Callback Execution
// Write a function that takes another function (a callback) as an argument and executes it.
const q1 = (cb) => {
  cb();
}

const buddyFunc = () => {
  console.log(`Hello World!`);
}
q1(buddyFunc)

// 2. Callback with Parameters
// Create a function that accepts a name and a callback function. The callback should display a greeting using the provided name.
// Expected Output: Hello, Alice!
const q2 = (cb) => {
  const name = "Joseph";
  cb(name);
}

const buddyFunc2 = (name) => {
  console.log(`Hello ${name}`);
}
q2(buddyFunc2)


// 3. Callback with Anonymous Function
// Pass an anonymous function as a callback and execute it inside another function.
// Expected Output: Callback executed with anonymous function!
const q3 = (cb) => {
  cb()
}

const buddyFunc3 = () => {
  let array = [1,2,3,4]
  array.forEach((item) => {
    console.log(item * 2);
  })
}
q3(buddyFunc3)

// 4. Math Operation Callback
// Write a function that accepts two numbers and a callback function. The callback should define a mathematical operation (like addition or multiplication).
// Expected Output (for addition): 15

const q4 = (a,b,cb) => {
  cb(a,b)
} 

const buddyFunc4 = (a,b) => {
  console.log(`Result of q4 is: ` + (a + b));
  
}
q4(5,2,buddyFunc4)

// 5. Array Iteration with Callback
// Create a function that accepts an array and a callback function. The callback should be called for each element of the array.
// Expected Output: 2, 4, 6

let array = [2,4,6]

const q5 = (cb) => {
  cb(array)
}

const buddyFunc5 = (array) => {
  array.forEach((n) => {
    console.log(n);
  })
}
q5(buddyFunc5)

// 6. Callback with Timeouts
// Write a function that accepts a callback and executes it after a delay using setTimeout.
// Expected Output (after a delay): This message is delayed!
const q6 = (cb) => {
  cb()
}

const buddyFunc6 = () => {
  setTimeout(() => {
    console.log('This message is delayed!');
    
  },1000)
}
q6(buddyFunc6)

// 7. Success and Failure Callbacks
// Create a function that randomly either calls a "success" or a "failure" callback depending on a random condition (e.g., using Math.random()).
// Expected Output: Request succeeded! OR Request failed!
const q7 = (cb) => {
  cb() > 0.5 ? console.log('success') : console.log('failed');
}

const buddyfunc7 = () => {
  return Math.random(); 
}
q7(buddyfunc7);

// 8. Event Simulation with Callback
// Simulate an event (like a button click) by calling a function and passing a callback. The callback should be executed after the simulated event.
// Expected Output: Button clicked! Callback triggered after click!
const q8 = (cb) => {
  setTimeout(() => {
    cb()
  },1000)
}

const buddyfunc8 = () => {
  return console.log('Button clicked! Callback triggered after click!');
}
q8(buddyfunc8)

// 9. Callback with Array Map
// Use the built-in map() method on an array, passing a callback function to modify each element in the array.
// Expected Output: [2, 4, 6, 8, 10]

let arrayNumbers = [1,2,3,4,5];
const q9 = (cb) => {
  cb(arrayNumbers);
}

const buddyfunc9 = (array) => {
  const modifiedArray = array.map((item) => item + item);
  console.log(modifiedArray);
} 
q9(buddyfunc9);

// 10. Filter Array with Callback
// Use the built-in filter() method on an array to filter elements based on a condition provided by a callback function.
// Expected Output: ["banana", "cherry"]
let arrayWords = ['apple','cherry','wikipedia','mazda','apple watch']
const q10 = (cb) => {
  cb(arrayWords)
}

const buddyfunc10 = (array) => {
  const filteredWords = array.filter((word) => {
    return word.length > 6;
  });
  
  console.log(filteredWords); 
}
q10(buddyfunc10)

// 11. Sorting Array with Callback
// Use the built-in sort() method on an array, passing a callback function to define the sorting behavior.
// Expected Output: [3, 5, 8, 10]
let arrayN = [1,5403,310,2100000,23,1,232,430,540,100,54399]

const q11 = (cb) => {
  cb(arrayN)
}

const buddyfunc11 = (array) => {
  let updatedArray = array.sort((a,b) => {
    return a - b
  })
  console.log(updatedArray);
}
q11(buddyfunc11)

// 12. Reduce Array with Callback
// Use the built-in reduce() method on an array, passing a callback to reduce all elements into a single value (e.g., sum of numbers).
// Expected Output: 10

// 13. Callback in a Custom Function
// Create a function that fetches some data (e.g., a name), and pass a callback function that processes the data.
// Expected Output: Alice

// 14. Passing Multiple Callbacks
// Write a function that accepts multiple callbacks (e.g., one for addition, one for multiplication) and uses them to perform operations on two numbers.
// Expected Output: 8, 15

// 15. Check if Element Exists using Callback
// Write a function that checks if a given element exists in an array, and pass a callback that logs a message depending on whether the element was found.
// Expected Output: Number found OR Number not found

// 16. Callback with Conditional Execution
// Create a function that checks if a number is even or odd, and pass two callbacks—one for even numbers and one for odd numbers.
// Expected Output (for even): Even number! OR (for odd): Odd number!

// 17. Simulating an Asynchronous Operation with Callbacks
// Write a function that simulates an asynchronous operation (e.g., loading data) and accepts a callback to handle the data after a delay.
// Expected Output: John

// 18. Modifying Array Elements with Callbacks
// Create a function that modifies every element in an array using a callback function and returns the modified array.
// Expected Output: [3, 6, 9, 12]

// 19. Callback Chain
// Write two functions. The first function should call the second function using a callback after logging a message.
// Expected Output: Step 1, Step 2

// 20. Callback for Error Handling
// Write a function that attempts to divide two numbers, and pass two callbacks—one for success and one for error (e.g., division by zero).
// Expected Output (for valid division): Result: 5 OR (for division by zero): Error: Cannot divide by zero!