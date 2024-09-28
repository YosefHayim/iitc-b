// 1. Store a String in Local Storage
// Task: Store a string "Welcome to localStorage" with the key "welcomeMessage".
// Retrieve and log the value to the console.

localStorage.setItem("welcomeMessage", "Welcome to localStorage");

console.log(localStorage.getItem("welcomeMessage"));

// 2. Store a Number in Local Storage
// Task: Store the number 100 with the key "score".
// Retrieve and log the value from local storage.

localStorage.setItem("score", 100);

console.log(localStorage.getItem("score"));

// 3. Update a Value in Local Storage
// Task: Update the value of "score" to 200.
// Log the updated value to the console.

localStorage.setItem("score", 200);

console.log(localStorage.getItem("score"));

// 4. Remove a Specific Item from Local Storage
// Task: Remove the key "welcomeMessage" from local storage.
// Attempt to retrieve the key "welcomeMessage" and log the result.

localStorage.removeItem("welcomeMessage");

console.log(localStorage.getItem("welcomeMessage")); // Should log 'null'

// 5. Check if a Key Exists in Local Storage
// Task: Check if the key "score" exists in local storage.
// Log a message to the console saying "Key exists" or "Key does not exist".

if (localStorage.getItem("score") !== null) {
  console.log("Key exists");
} else {
  console.log("Key does not exist.");
}

// 6. Store an Array in Local Storage
// Task: Store the array [10, 20, 30, 40] with the key "numbers".
// Retrieve and log the array to the console.

let numbers = [10, 20, 30, 40];
localStorage.setItem("numbers", JSON.stringify(numbers));

console.log(JSON.parse(localStorage.getItem("numbers")));

// 7. Store an Object in Local Storage
// Task: Store an object {name: 'Charlie', age: 22} with the key "person".
// Retrieve and log the object to the console.

let person = { name: "Charlie", age: 22 };
localStorage.setItem("person", JSON.stringify(person));

console.log(JSON.parse(localStorage.getItem("person")));

// 8. Increment a Value in Local Storage
// Task: Retrieve the value of "score", increment it by 50, and store the updated value back in local storage.
// Log the new score to the console.

let convertToNum = parseInt(localStorage.getItem("score"), 10);
convertToNum += 50;
localStorage.setItem("score", convertToNum);

console.log(localStorage.getItem("score"));

// 9. Clear Local Storage
// Task: Clear all items from local storage.
// Attempt to retrieve any key and log the result.

localStorage.clear();

console.log(localStorage.getItem("score")); // Should log 'null'
console.log(localStorage.getItem("person")); // Should log 'null'

// 10. Store Multiple Items and List All Keys
// Task: Store three items in local storage: "firstName": "John", "lastName": "Doe", and "age": "30".
// Log all keys in local storage using a loop.

localStorage.setItem("firstName", "John");
localStorage.setItem("lastName", "Doe");
localStorage.setItem("age", 30);

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  console.log(`${key}: ${localStorage.getItem(key)}`);
}
