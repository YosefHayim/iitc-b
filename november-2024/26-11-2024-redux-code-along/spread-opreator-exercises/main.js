"use strict";
// Basic Array Operations (Beginner)

// Q1
let array = [1, 2, 3, 3];
let q1 = [...array, 4, 5, 6];
// console.log(q1);

// Q2
let q2Array = [4, 5, 6];
let updatedArray = [...array, ...q2Array, 7, 8, 9];
// console.log(updatedArray);

// Q3
let q3Array = [0, ...array];
// console.log(q3Array);

// Q4
let q4Array = [...array, 4];
// console.log(q4Array);

// Q5
let q5 = [...array, ...q2Array, ...q3Array];
// console.log(q5);

// Q6
let q6 = [...q5];
// console.log(q6);

// Q7
let q7 = [...array.slice(1)];
// console.log(q7);

// Q8
let q8 = [...array, ...q2Array.slice(-3)];
// console.log(q8);

// Q9
let q9 = [...q8, ...q6];
// console.log(q9);

// Q10
let q10 = [...array, 1000, ...array.slice(2)];
// console.log(q10);

// Practical Scenarios (Intermediate)
// Q1
let string = "Hello world";
// console.log([...string]);

// Q2
let q2FlattenArray = [...array, ...q2Array];
// console.log(q2FlattenArray);

// Q3
let q3 = [...array.slice(0, -1)];
// console.log(q3);

// Q4
let questionFour = [
  ...array.slice(0, 2),
  "New element added",
  ...q2Array.slice(2),
];
// console.log(questionFour);

// Q5
let questionFive = [...new Set(array)];
// console.log(questionFive);

// Q6
let questionSix = array.slice(0, -1);
// console.log(questionSix);

// Q7
let questionSeven = [...array.slice(1), array[0]];
// console.log(questionSeven);

// Q8
let questionEight = ["Hello", ...array];
// console.log(questionEight);

// Q9
const mergedArraysFn = (arrayOne, arrayTwo, arrayThree) => {
  const mergedArrayCombined = [...arrayOne, ...arrayTwo, ...arrayThree];
  console.log(mergedArrayCombined);

  return mergedArrayCombined;
};
// mergedArraysFn(array, q2Array, q3Array);

// Q10
let questionTen = [...array.sort(() => Math.random() - 0.5)];
// console.log(questionTen);

// Spread Operator with Objects
// Q1
let objQ1 = { fName: "Joseph", lName: "Sabag" };
let sObjQ1 = { ...objQ1 };
// console.log(sObjQ1);

// Q2
let objq2 = { name: "q2", lName: "q2 last name", baba: "gaba" };
let mergedObjq = { ...objq2, ...objQ1 };
// console.log(mergedObjq);
