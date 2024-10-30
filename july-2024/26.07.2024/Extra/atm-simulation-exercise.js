// # ATM Simulation Exercise - Multi-Part Project

// ## Objective
// Create a simple ATM (Automated Teller Machine) simulation using JavaScript. This project will cover variables, arithmetic operations, logical operators, comparison operators, and assignment operators.
// console.log("Welcome to the ATM.\n ");
// ## Part 1: Variable Initialization

// ### Task
// Initialize the necessary variables for the ATM simulation.
let accountBalance = 1000000
let isPinUserChoice = 1707
let maximumWithdrawal = 100000
let transactions = [];
let dailyLimit = 10000
// ### Requirements
// - Create variables for account balance, PIN code, and maximum withdrawal limit.
// - Use appropriate variable types (let/const) based on whether the values will change.

// ### Hints
// - Consider what data type each variable should be (number or string).
// - Think about which variables might need to change during the program's execution.

// ### Resources
// - [JavaScript Variables](https://www.w3schools.com/js/js_variables.asp)
// - [JavaScript Data Types](https://www.w3schools.com/js/js_datatypes.asp)

// ## Part 2: PIN Verification
// ### Task
// Create a function to verify the user's PIN.
function verifyUserPIN() {
    let checkPIN = prompt('What is your security PIN?:')
    checkPIN = Number(checkPIN)

if (checkPIN === isPinUserChoice) {
    console.log(`PIN is correct.`);
    return true

} else {
    console.log(`PIN is not correct.`);
    return false
} 

}
// ### Requirements
// - The function should take an entered PIN as an argument.
// - It should return a boolean indicating whether the PIN is correct.

// ### Hints
// - Use comparison operators to check if the entered PIN matches the correct PIN.
// - Consider using strict equality (===) for comparison.

// ### Resources
// - [JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)
// - [JavaScript Comparison Operators](https://www.w3schools.com/js/js_comparisons.asp)

// ## Part 3: Balance Check

// ### Task
// Implement a function to check and display the account balance.
function display() {
console.log(`Account balance: ${accountBalance.toLocaleString()} ₪`);
}
// ### Requirements
// - The function should return the current account balance.
// - Consider how to format the balance for display (e.g., two decimal places).

// ### Hints
// - You might want to use template literals for formatting the output string.
// - Think about whether this function needs any parameters.

// ### Resources
// - [JavaScript Numbers](https://www.w3schools.com/js/js_numbers.asp)
// - [JavaScript String Methods](https://www.w3schools.com/js/js_string_methods.asp)

// ## Part 4: Withdrawal Function

// ### Task
// Create a function to handle withdrawals from the account.
function accountWithdrawal() {
    let isUserWantWithdraw = prompt('Are you sure you would like to withdraw? (yes/no)');
    isUserWantWithdraw = isUserWantWithdraw.trim().toLowerCase();

    if (isUserWantWithdraw === 'yes') {
        let isUserWithdrawAmount = prompt('How much would you like to withdraw?:');
        isUserWithdrawAmount = Number(isUserWithdrawAmount);

        if (!isNaN(isUserWithdrawAmount) && isUserWithdrawAmount <= accountBalance && isUserWithdrawAmount <= maximumWithdrawal && isUserWithdrawAmount <= dailyLimit) {
            console.log(`Successfully withdrew: ${isUserWithdrawAmount}`);
            accountBalance -= isUserWithdrawAmount;
            dailyLimit -= isUserWithdrawAmount
            transactions.push("-" + isUserWithdrawAmount);
            console.log(`Account balance: ${accountBalance}`);
            console.log(`Daily limit left: ${dailyLimit}`);
            return true; 
        } else {
            console.log("Can't process withdrawal request. The amount is invalid or exceeds limits.");
            return false;
        }
    } else if (isUserWantWithdraw === 'no') {
        return false;
    } else {
        console.log("Invalid input. Please enter 'yes' or 'no'.");
        return false;
    }
}


// ### Requirements
// - The function should take the withdrawal amount as an argument.
// - It should check if the withdrawal is valid (sufficient balance and within maximum limit).
// - If valid, it should update the account balance and return the withdrawn amount.
// - If invalid, it should return an appropriate message or value.

// ### Hints
// - Use arithmetic operators to calculate the new balance.
// - Use comparison operators to check if the withdrawal is valid.
// - Consider using logical operators to combine multiple conditions.
// - Don't forget to use assignment operators to update the balance.

// ### Resources
// - [JavaScript Arithmetic Operators](https://www.w3schools.com/js/js_arithmetic.asp)
// - [JavaScript Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)
// - [JavaScript Assignment Operators](https://www.w3schools.com/js/js_assignment.asp)

// ### Task
// Implement a function to handle deposits to the account.
function depositAccount() {
let isUserWantDeposit = prompt('Are you sure you would like to deposit? (yes/no)');

if (isUserWantDeposit === 'yes') {
    let depositAmount = prompt('How much would you like to deposit?:');
    depositAmount = Number(depositAmount);

    console.log(`Successfully deposit of: ${depositAmount}`);
    accountBalance += depositAmount;
    transactions.push("+" + depositAmount);
    console.log(`Account balance: ${accountBalance}`);
    return true;
}
    else (isUserWantDeposit === 'no')
    console.log(`Bye Bye`);
        return false
}
// ### Requirements
// - The function should take the deposit amount as an argument.
// - It should update the account balance and return the new balance.

// ### Hints
// - Use an assignment operator to update the account balance.
// - Think about whether you need to validate the deposit amount.

// ### Resources
// - [JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)
// - [JavaScript Arithmetic Operators](https://www.w3schools.com/js/js_arithmetic.asp)

// ## Part 6: Main ATM Logic
// ### Task
// Create the main function that simulates the ATM's operation.
function simulation() {
    verifyUserPIN()
    display()
    accountWithdrawal()
    depositAccount()
}


//Function to visit again the ATM
function againATM() {
    let isUserAgainATM = prompt('Would you like to perform another transaction or check balance? (yes/no):');
    isUserAgainATM = isUserAgainATM.trim().toLowerCase();

    if (isUserAgainATM === 'yes') {
        if (verifyUserPIN()) {
            let chooseOptions = prompt("Please choose an option:\n1. Check Balance\n2. Withdraw\n3. Deposit\nEnter the number of your choice:");
            chooseOptions = chooseOptions.trim();
            
            if (chooseOptions === '1') {
                display();
            } else if (chooseOptions === '2') {
                accountWithdrawal();
            } else if (chooseOptions === '3') {
                depositAccount();
            } else {
                console.log('Invalid choice. Please enter 1, 2, or 3.');
            }
        }
    } else if (isUserAgainATM === 'no') {
        console.log('Thank you for using the ATM. Goodbye!');
        return false;
    } else {
        console.log('Invalid input. Please provide either `yes` or `no`.');
        return null;
    }
}
// ### Requirements
// - The function should prompt the user for their PIN.
// - If the PIN is correct, it should present options (check balance, withdraw, deposit).
// - Based on the user's choice, it should call the appropriate function.
// - It should display relevant messages to the user (success, error, etc.).

// ### Hints
// - Consider using a loop to allow multiple transactions.
// - Think about how to handle invalid user inputs.
// - Use conditional statements to process the user's choice.

// ### Resources
// - [JavaScript if...else Statements](https://www.w3schools.com/js/js_if_else.asp)
// - [JavaScript Switch Statement](https://www.w3schools.com/js/js_switch.asp)
// - [JavaScript Loops](https://www.w3schools.com/js/js_loop_for.asp)

// ## Part 7: Integration
// ### Task
// Combine all the functions you've created into a cohesive ATM simulation program.
function main() {
    let attemptsPIN = 0
    const maxAttempts = 3

    while (attemptsPIN < maxAttempts) {
        if (verifyUserPIN() === true) {
            console.log('Access granted.')
            display()
            accountWithdrawal()
            depositAccount()
            againATM()
            historyTransactions()
            return
        } 
        attemptsPIN += 1
        console.log(`Attempt ${attemptsPIN} of ${maxAttempts}`)
    }

    console.log('Failed PIN verification after 3 attempts. Access denied.')
}
// main()
// ### Requirements
// - Ensure all parts work together seamlessly.
// - The program should run without errors and handle various scenarios gracefully.

// ### Hints
// - Test your program with different inputs and scenarios.
// - Consider adding error handling for unexpected situations.

// ### Resources
// - [JavaScript Errors](https://www.w3schools.com/js/js_errors.asp)
// - [JavaScript Scope](https://www.w3schools.com/js/js_scope.asp)

// ## Bonus Challenges
// 1. Implement a feature to track failed PIN attempts and lock the account after 3 fails.
// 2. Add a feature to display the last 5 transactions. 
// 3. Implement a daily withdrawal limit in addition to the per-transaction limit.
function historyTransactions() {
    console.log(`Recent transactions:${transactions}`);
    if (transactions > 5) {
        transactions = transactions.pop()
    }
}

// ## Final Steps
// - Test your ATM simulation thoroughly.
// - Consider edge cases and how your program handles them.
// - Refactor your code for clarity and efficiency if needed.

// Remember to apply the concepts of variables, arithmetic operations, logical operators, comparison operators, and assignment operators throughout your solution. Good luck!

// [JavaScript Tutorial](https://www.w3schools.com/js/default.asp)
// Finish atm-simulation-exercise.js