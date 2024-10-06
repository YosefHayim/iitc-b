// Define the data object
const data = {
  PIN: '1234',
  currentBalance: `1,500,123`,
  transactions: [] // Array to store transaction history
};

// Store the initial data in localStorage
localStorage.setItem("userData", JSON.stringify(data));

// Retrieve and parse the stored data
let storedData = localStorage.getItem("userData");
let parsedData = JSON.parse(storedData);

let storedPIN = parsedData.PIN;
let storedBalance = parseInt(parsedData.currentBalance.replace(/,/g, '')); // Convert string balance to number
let transactions = parsedData.transactions; // Retrieve the transactions array
let bodyHTML = document.body; // Define bodyHTML

export { data, storedData, parsedData, storedPIN, storedBalance, transactions, bodyHTML };