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
const qEightFunc = (name) => {
  const q8 = new Promise((resolve, reject) => {
    resolve(`q8 - Hey there this has been resolved successfully ${name}`)
  })
  return q8
}

qEightFunc('Joseph').then((result) => console.log(result))

// 9. Write a function that returns a rejected Promise with a given error message.
const qNineFunc = (name) => {
  const q8 = new Promise((resolve, reject) => {
    reject(`q9 - Error example ${name}`)
  })
  return q8
}

qNineFunc('Question Number Nine!').catch((error) => console.log(error))

// 10. Create a Promise that resolves after 3 seconds and logs the value "3 seconds passed".
const q10 = new Promise ((resolve,reject) => {
  setTimeout(() => {
    resolve('q10 - 3 seconds passed')
  ,3000})
})

q10.then((result) => console.log(result))

// 11. Chain two Promises together where the second Promise resolves with the value of the first Promise plus " and then some".
const q11 = new Promise((resolve, reject) => {
  resolve('q11 - first Chain');
});

q11.then((result) => {return `${result} and then some`;})
  .then((finalResult) => {console.log(finalResult);});

// 12. Write a Promise that resolves with an array of numbers and logs the sum of those numbers using .then().
const q12 = new Promise((resolve, reject) => {
  let arrayNum = [1, 2, 3, 4, 5];
  resolve(arrayNum.reduce((acc, curr) => acc + curr, 0));
});

q12.then((result) => console.log('q - 12 ' + result)); 

// 13. Create a Promise that rejects if a given number is less than 10 and resolves if it's 10 or greater.
let num = 10 
const q13 = new Promise ((resolve,reject) => {
  num > 10 ? resolve('q - 13 Greater than 10') : reject('q - 13Less or equal to 10')
})

q13.then((result) => console.log(result))
  .catch((error) => console.log(error))

// 14. Write a function that returns a Promise which resolves after a given number of milliseconds.
const q14 = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve('q - 14 after milliseconds')
  },100)
})

q14.then((result) => console.log(result)
)
// 15. Write a Promise that resolves with the current date and time.
const d = new Date()
let time = d.getTime();

const q15 = new Promise ((resolve, reject) => {
  resolve(`q - 15 | current time: ${time}, current date: ${d}`)
})

q15.then((result) => console.log(result))

// 16. Use Promise.all() to wait for two Promises to resolve and then log their results.
const q16 = Promise.all([q1,q3]).then((result) => console.log(`q - 16 ` + result))

// 17. Create a Promise that resolves with a user's name and another that resolves with the user's age. Use Promise.all() to wait for both and then log a message "Name: [name], Age: [age]".
const namePromise = new Promise((resolve, reject) => {
  resolve('Joseph');
});

const agePromise = new Promise((resolve, reject) => {
  resolve(20);
});

Promise.all([namePromise, agePromise])
  .then(([name, age]) => {
    console.log(`q - 17 | Name: ${name}, Age: ${age}`);
  })
  .catch((error) => console.log(error));

// 18. Write a function that returns a Promise which resolves with a random number after 1 second.
const randomNumFunc = () => {
  let random = Math.random();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`q - 18 | random number is: ${random}`);
    }, 1000);
  });
};

randomNumFunc()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// 19. Create a Promise that rejects with a specific error message and handle it using .catch() and log the error.
const q19 = new Promise((resolve,reject) => {
  reject('q - 19 error message displayed')
})

q19.then((result) => console.log(result)).
  catch((error) => console.log(error))

// 20. Write a Promise that resolves with "Success!" and logs "Operation was successful!" using .then().
const q20 = new Promise ((resolve,reject) => {
  resolve('q - 20 | Success!')
})

q20.then(result => result)
  .then(console.log(`q - 20 | Operation was successful!`));

// 21. Write a Promise that resolves with "Done!" and always logs "Finished!" using .finally().
const q21 = new Promise((resolve,reject) => {
  resolve('q - 21 | Done!')
})

q21.then((result) => console.log(result)).finally(console.log('q - 21 | Finished!'))

// 22. Write a function that returns a Promise which resolves with "Data received" after simulating a 2-second network request using setTimeout.
const fnDR = () => {
  const q22 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(`q - 22 Data received`)
    },2000)
  })
  return q22
}
fnDR().then((result) => console.log(result))

// 23. Write a function that uses Promise.all() to wait for three Promises that resolve with different values and logs all the values once all Promises are resolved.
const fnDRAll = async () => {
  const q23A = await new Promise((resolve) => {
    resolve('q - 23 | A');
  });

  const q23B = await new Promise((resolve) => {
    resolve('q - 23 | B');
  });

  const q23C = await new Promise((resolve) => {
    resolve('q - 23 | C');
  });

  return [q23A, q23B, q23C];
};

fnDRAll().then((result) => console.log(result)).catch((error) => console.log(error));


// 24. Write a function that returns a Promise which rejects if a given string is empty and resolves if it is not empty.
let string = "This isn't empty brother";
const fnDP24 = () => {
  return new Promise((resolve, reject) => {
    string.length === 0 ? reject('q - 24 This string is empty') : resolve('q - 24 This string is not empty');
  });
};

fnDP24()
  .then((result) => console.log(result)) 
  .catch((error) => console.log(error)); 

// 25. Write a Promise that resolves with the square of a given number.

let n = 5

const solveSquareP = new Promise((resolve,reject) => {
  resolve(n ** 2)
  return
})

solveSquareP.then((result)=> console.log(`q - 25 answer: ` + result))

// 26. Create a Promise that resolves with the value of a given number multiplied by 2 after 2 seconds.
const q26 = new Promise((resolve, reject) => {
  let n = 5
  setTimeout(() => {
    const result = n * 2; 
    resolve(result); 
  }, 2000);
});

q26.then((result) => console.log(`q - 26 answer: ${result}`));

// 27. Write a function that returns a Promise which resolves with a greeting message for a given name.
const fnc27 = (name) => {
  const q27 = new Promise ((resolve,reject) => {
    resolve(`Welcome dear friend ${name}`)
  })
  return q27
}

fnc27('q - 27 Josepha').then((result) => console.log(result))

// 28. Write a Promise that resolves with "File downloaded" after simulating a file download with setTimeout.
const q28 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve('File downloaded')
  },1500)
})

q28.then((result) => console.log(`q - 28 ` + result))

// 29. Write a Promise that rejects with "Network error" if a given boolean is false and resolves with "Network success" if true.
let condition = false
const q29 = new Promise((resolve,reject) => {
  condition === true ? resolve('q - 29 Network Success') : reject('q - 29  Network error')
})

q29.then((result) => console.log(result))
  .catch((error) => console.log(error))

// 30. Write a function that returns a Promise which resolves with "API call successful" after simulating an API call with setTimeout.
const fnLast = () => {
  const q30 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('q - 30 API call successful')
    })
  })
  return q30
}

fnLast().then((result) => console.log(result)).catch((error) => console.log(error))