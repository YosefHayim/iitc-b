// function showAlert() {
//   alert("Button clicked!");
// }

// const button = document.getElementById("trigger-button");
// button.addEventListener("click", showAlert);

// function updateMessage() {
//   const messageBox = document.getElementById("message-box");
//   messageBox.textContent = "Hello, welcome to the exam project!";
// }

// updateMessage();

// const userList = ["Alice", "Bob", "Charlie"];

// const ulElement = document.createElement("ul");
// ulElement.classList.add("user-list");

// for (let i = 0; i < userList.length; i++) {
//   const liElement = document.createElement("li");
//   ulElement.appendChild(liElement);
// }

// document.body.appendChild(ulElement);

// const items = document.querySelectorAll("li");

// for (let i = 0; i < items.length; i++) {
//   items[i].textContent = `Item ${i + 1}`;
// }

// document
//   .getElementById("simple-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     const nameInput = document.getElementById("name").value;

//     if (nameInput === "") {
//       alert("Name is required.");
//     } else {
//       alert(`Hello, ${nameInput}!`);
//     }
//   });

// const settings = {
//   theme: "dark",
//   language: "en",
// };

// console.log(settings.color);

let array = [1, 2, 3, 4, 5, 6];
let evenArray = [];

const filterEvenNumbers = (arrayN) => {
  arrayN.forEach((n) => {
    if (n % 2 === 0) {
      evenArray.push(n);
    }
  });
  console.log(evenArray);
};

// filterEvenNumbers(array);

const findLongestWord = () => {
  let arrayWords = ["apple", "banana", "cherry"];

  const longestWord = arrayWords.sort((a, b) => b.length - a.length)[0];
  console.log(longestWord);

  return longestWord;
};
// findLongestWord();

let sentence = "hello world";

const capitalizeWords = (value) => {
  let helloWord = value.charAt(0).toUpperCase() + value.slice(1, 5);
  let worldWord = value.charAt(6).toUpperCase() + value.slice(7);
  let updatedWord = helloWord + worldWord;
  console.log(helloWord + " " + worldWord);

  return updatedWord;
};

// capitalizeWords(sentence);
