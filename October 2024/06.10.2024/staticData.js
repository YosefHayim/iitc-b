// Define the data object
const data = {
  PIN: '1234',
  currentBalance: `1,500,123`,
  transactions: [] // Array to store transaction history
};

localStorage.setItem("userData", JSON.stringify(data));

let storedData = localStorage.getItem("userData");
let parsedData = JSON.parse(storedData);

let storedPIN = parsedData.PIN;
let storedBalance = parseInt(parsedData.currentBalance.replace(/,/g, '')); // Convert string balance to number
let transactions = parsedData.transactions; // Retrieve the transactions array
let bodyHTML = document.body;

export {data,storedData,parsedData,storedPIN,storedBalance,transactions,bodyHTML}