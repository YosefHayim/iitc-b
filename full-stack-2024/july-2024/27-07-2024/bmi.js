// # JavaScript Programming Exercises: BMI Calculator

// Welcome to your first programming exercise! You'll be creating a Body Mass Index (BMI) calculator using JavaScript. These exercises will help you understand basic programming concepts and how to work with the console for input and output.

// ## Useful Resources

// - JavaScript Tutorial: https://www.w3schools.com/js/
// - JavaScript Console: https://www.w3schools.com/jsref/obj_console.asp

// ## Exercise 1: Variables and Basic Input

// Goal: Collect user's weight and height using prompts and display them in the console.
let isUserWeight = ``;
while ((isNaN(isUserWeight)) || (isUserWeight <= 0)) {
    isUserWeight = parseInt(prompt(`please enter your current weight in kg`, `00`));
}
let isUserHeight  = parseInt(prompt(`please enter your height in cm`, `00`));
while ((isNaN(isUserHeight)) || (isUserHeight <= 0)) {
    isUserHeight = parseInt(prompt(`please enter your height in m`, `00`));
}
let bmi = calculateBMI(isUserHeight,isUserWeight)
let bmiResult = getBMICategory(bmi);
console.log(`your weight is ${isUserWeight} kg's and your height is ${isUserHeight} cm so your BMI is ${bmi} and your BMI result is ${bmiResult}`);


// Hints:
// - Use prompt() to ask for input
// - Store the inputs in variables
// - Use console.log() to display the stored values

// Resources:
// - Variables: https://www.w3schools.com/js/js_variables.asp
// - Popup Boxes: https://www.w3schools.com/js/js_popup.asp

// ## Exercise 2: Basic Calculation

// Goal: Calculate the BMI using the formula: BMI = weight (kg) / (height (m) * height (m))
// isUserWeight = parseFloat(isUserWeight);
// isUserHeight = parseFloat(isUserHeight);

// let FormulaBMI = isUserWeight / (isUserHeight * isUserHeight);
// FormulaBMI = FormulaBMI * 10000
// FormulaBMI = Math.round(FormulaBMI)
// console.log(BMI: ${FormulaBMI});

// Hints:
// - Convert string inputs to numbers using parseFloat()
// - Perform the calculation using the formula
// - Use console.log() to display the result

// Resources:
// - JavaScript Numbers: https://www.w3schools.com/js/js_numbers.asp
// - JavaScript Arithmetic: https://www.w3schools.com/js/js_arithmetic.asp

// ## Exercise 3: Conditional Statements
// if (FormulaBMI < 18.5) {
//     console.log(Underweight);
// } else if (FormulaBMI > 18.5 && FormulaBMI <= 24.9) {
//     console.log(Normal weight);
// } else if (FormulaBMI > 25 && FormulaBMI <= 29.9) {
//     console.log(Overweight);
// } else console.log(Obese);

// Goal: Categorize the BMI result and display an appropriate message.

// Hints:
// - Use if, else if, and else statements
// - BMI Categories:
//   - Under 18.5: Underweight
//   - 18.5 to 24.9: Normal weight
//   - 25 to 29.9: Overweight
//   - 30 and above: Obese
// - Display the category using console.log()

// Resources:
// - JavaScript If...Else Statements: https://www.w3schools.com/js/js_if_else.asp

// ## Exercise 4: Functions

// Goal: Create functions to calculate BMI and determine the BMI category.

// Hints:
// - Create a function calculateBMI that takes weight and height as parameters
function calculateBMI(isUserWeight, isUserHeight) {
    let FormulaBMI = isUserWeight / (isUserHeight * isUserHeight);
    FormulaBMI = FormulaBMI * 1000
    FormulaBMI = Math.round(FormulaBMI)
    return FormulaBMI
}

// - Use these functions to calculate and display the BMI and category

function getBMICategory(bmi) {
    if (bmi < 18.5) {
    console.log(`BMI: ${bmi} = Underweight`);
    return bmi

} else if (bmi > 18.5 && bmi <= 24.9) {
    console.log(`BMI: ${bmi} = Normal weight`);
    return bmi

} else if (bmi > 25 && bmi <= 29.9) {
    console.log(`BMI: ${bmi} = Overweight`);
    return bmi

} else console.log(`BMI: ${bmi} = Obese`);
    return bmi
}

// Resources:
// - JavaScript Functions: https://www.w3schools.com/js/js_functions.asp

// ## Exercise 5: Error Handling

// Goal: Implement error checking for weight and height inputs.

// Hints:
// - Check if the input is a number using isNaN()
// - Ensure the input is positive
// - If input is invalid, display an error message and ask for input again
// - Consider using a loop to repeatedly ask for valid input

// Resources:
// - JavaScript Errors: https://www.w3schools.com/js/js_errors.asp
// - JavaScript Loops: https://www.w3schools.com/js/js_loop_while.asp

// ## Bonus Challenge: BMI History

// Goal: Implement a feature to store and display a history of BMI calculations.

// Hints:
// - Use an array to store multiple BMI calculations
// - Each calculation could be an object with properties like date, weight, height, and BMI
// - Create a function to add new calculations to the history
// - Create a function to display the history in the console
// - Consider adding a menu system to let the user choose between calculating a new BMI or viewing history

// Resources:
// - JavaScript Arrays: https://www.w3schools.com/js/js_arrays.asp
// - JavaScript Objects: https://www.w3schools.com/js/js_objects.asp

// Remember to test your code frequently and use console.log() to help with debugging. Good luck
