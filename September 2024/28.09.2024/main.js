// 1. Store a String in Local Storage
// Task: Store a string "Welcome to localStorage" with the key "welcomeMessage".
// Retrieve and log the value to the console.
// let welcomeMessage = {
//   welcomeMessage: "Welcome to localStorage",
// };
// let welcomeMessage_converted = JSON.stringify(welcomeMessage);

// localStorage.setItem("welcomeMessage", welcomeMessage_converted);

// let welcomeMessage_Reconverted = JSON.parse(
//   localStorage.getItem("welcomeMessage")
// );

// 2. Store a Number in Local Storage
// Task: Store the number 100 with the key "score".
// Retrieve and log the value from local storage.
// let num = {
//   score: 100,
// };

// let convertedNum = JSON.stringify(num);

// let storeItem = localStorage.setItem("score", num);
// localStorage.setItem("score", convertedNum);
// let ReconvertNum = JSON.parse(localStorage.getItem("score"));

// 3. Update a Value in Local Storage
// Task: Update the value of "score" to 200.
// Log the updated value to the console.
// localStorage.score = 200;

// 4. Remove a Specific Item from Local Storage
// Task: Remove the key "welcomeMessage" from local storage.
// Attempt to retrieve the key "welcomeMessage" and log the result.
// localStorage.removeItem("welcomeMessage");

// 5. Check if a Key Exists in Local Storage
// Task: Check if the key "score" exists in local storage.
// Log a message to the console saying "Key exists" or "Key does not exist".
// if (localStorage.score) {
//   console.log("Key exists");
// } else {
//   console.log("Key does not exist.");
// }

// 6. Store an Array in Local Storage
// Task: Store the array [10, 20, 30, 40] with the key "numbers".
// Retrieve and log the array to the console.
// let numbers = [10, 20, 30, 40];
// localStorage.setItem("numbers", JSON.stringify(numbers));

// 7. Store an Object in Local Storage
// Task: Store an object {name: 'Charlie', age: 22} with the key "person".
// Retrieve and log the object to the console.
// let person = { name: "Charlie", age: 22 };
// localStorage.setItem("person", JSON.stringify(person));

// 8. Increment a Value in Local Storage
// Task: Retrieve the value of "score", increment it by 50, and store the updated value back in local storage.
// Log the new score to the console.
// let convertToNum = parseInt(localStorage.getItem("score"));
// convertToNum += 50;
// localStorage.setItem("score", convertToNum);

// 9. Clear Local Storage
// Task: Clear all items from local storage.
// Attempt to retrieve any key and log the result.
// localStorage.clear();

// 10. Store Multiple Items and List All Keys
// Task: Store three items in local storage: "firstName": "John", "lastName": "Doe", and "age": "30".
// Log all keys in local storage using a loop.
// let itemOne = {
//   firstname: "john",
// };
// let itemTwo = {
//   lastname: "Doe",
// };
// let itemThree = {
//   age: 30,
// };
// localStorage.setItem("itemOne", JSON.stringify(itemOne));
// localStorage.setItem("ItemTwo", JSON.stringify(itemTwo));
// localStorage.setItem("itemThree", JSON.stringify(itemThree));

// console.log(localStorage);
