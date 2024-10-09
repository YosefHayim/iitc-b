// 1. Create a new Promise that resolves with the value "Hello, World!".
const q1 = new Promise((resolve, reject) => {
  resolve('q1 - Hello, World!');
});
console.log(q1);

// 2. Create a new Promise that rejects with the value "Error occurred".
const q2 = new Promise((resolve, reject) => {
  reject('q2 - Error occurred')
})

q2.then(
  (result) => console.log(result), 
  (error) => console.log(error)
);

// 3. Write a Promise that resolves after 2 seconds with the value "Resolved!".
const q3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('q3 - Resolved!')
  },2000)
})

q3.then((result) => console.log(result))
  .catch((error) => console.log(error));

// 4. Write a Promise that rejects after 1 second with the value "Rejected!".
const q4 = new Promise ( (resolve, reject) => {
  setTimeout(() => {
    reject('q4 - Rejected!')
  },1000)
})

q4.then((result) => console.log(result))
  .catch((error) => console.log(error));

// 5. Create a Promise that resolves with a given value and log the resolved value using .then().
const q5 = new Promise ((resolve, reject) => {
  resolve('q5 - this is a resolve type')
  reject('This is just another use just for learning')
})

q5.then((result) => console.log(result));

// 6. Create a Promise that rejects with a given value and handle the rejection using .catch().
const q6 = new Promise ((resolve, reject) => {
  reject('q6 - Reject log')
})

q6.then((result) => (result))
  .catch((error) => console.log(error)) 

// 7. Write a Promise that resolves with the value "Hello, World!" and logs "Promise Resolved!" after it resolves.
const q7 = new Promise((resolve, reject) => {
  resolve('Hello, World!');
});

q7.then(() => {console.log('q7 - Promise Resolved!')});

// 8. Write a function that returns a resolved Promise with a given message.

// 9. Write a function that returns a rejected Promise with a given error message.

// 10. Create a Promise that resolves after 3 seconds and logs the value "3 seconds passed".

// 11. Chain two Promises together where the second Promise resolves with the value of the first Promise plus " and then some".

// 12. Write a Promise that resolves with an array of numbers and logs the sum of those numbers using .then().

// 13. Create a Promise that rejects if a given number is less than 10 and resolves if it's 10 or greater.

// 14. Write a function that returns a Promise which resolves after a given number of milliseconds.

// 15. Write a Promise that resolves with the current date and time.

// 16. Use Promise.all() to wait for two Promises to resolve and then log their results.

// 17. Create a Promise that resolves with a user's name and another that resolves with the user's age. Use Promise.all() to wait for both and then log a message "Name: [name], Age: [age]".

// 18. Write a function that returns a Promise which resolves with a random number after 1 second.

// 19. Create a Promise that rejects with a specific error message and handle it using .catch() and log the error.

// 20. Write a Promise that resolves with "Success!" and logs "Operation was successful!" using .then().

// 21. Write a Promise that resolves with "Done!" and always logs "Finished!" using .finally().

// 22. Write a function that returns a Promise which resolves with "Data received" after simulating a 2-second network request using setTimeout.

// 23. Write a function that uses Promise.all() to wait for three Promises that resolve with different values and logs all the values once all Promises are resolved.

// 24. Write a function that returns a Promise which rejects if a given string is empty and resolves if it is not empty.

// 25. Write a Promise that resolves with the square of a given number.

// 26. Create a Promise that resolves with the value of a given number multiplied by 2 after 2 seconds.

// 27. Write a function that returns a Promise which resolves with a greeting message for a given name.

// 28. Write a Promise that resolves with "File downloaded" after simulating a file download with setTimeout.

// 29. Write a Promise that rejects with "Network error" if a given boolean is false and resolves with "Network success" if true.

// 30. Write a function that returns a Promise which resolves with "API call successful" after simulating an API call with setTimeout.