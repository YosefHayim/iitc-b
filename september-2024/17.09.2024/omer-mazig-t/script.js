// Task 1
const content = document.getElementById("content");
content.style.background = "lightblue";

const allElements = document.querySelectorAll(".text");
for (let i = 0; i < allElements.length; i++) {
  allElements[i].style.color = "red";
}

const everyLi = document.querySelectorAll("li");
for (let i = 0; i < everyLi.length; i++) {
  console.log(everyLi[i].textContent);
}

const highlightedButton = document.querySelector(".highlight-button");

highlightedButton.addEventListener("click", function clickedMe() {
  everyLi.forEach((li) => {
    li.style.background = "yellow";
  });
});

// Task 2
const addItem = document.querySelector(".add-item");
const anotherUL = document.querySelector(".another-ul");

addItem.addEventListener("click", function () {
  const newLi = document.createElement("li");

  newLi.textContent = "New Item";

  anotherUL.appendChild(newLi);
});

const allItems = document.querySelectorAll(".list li");

for (let i = 0; i < allItems.length; i++) {
  allItems[i].addEventListener("click", function () {
    allItems[i].classList.add("selected");
    allItems[i].style.fontWeight = "bold";
  });
}

// Bonus Task
const firstItemButton = document.querySelector(".remove-first-item");
firstItemButton.addEventListener("click", function () {
  const firstItem = document.querySelector("ul.list li:first-child");
  firstItem.remove();
});

const lastItemButton = document.querySelector(".remove-last-item");
lastItemButton.addEventListener("click", function () {
  const lastItem = document.querySelector("ul.list li:last-child");
  lastItem.remove();
});

const removeSelectedButton = document.querySelector(".remove-selected-item");
const listItems = document.querySelectorAll("ul.list li");

removeSelectedButton.addEventListener("click", function () {
  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].classList.contains("selected")) {
      listItems[i].remove();
      break;
    }
  }
});

// Task 3
const nameInput = document.getElementById("nameInput");
const greetingDiv = document.getElementById("greeting");
const clearButton = document.getElementsByClassName("clear")[0]; // Select the first element with the class 'clear'

nameInput.addEventListener("input", function () {
  const name = nameInput.value;
  if (name) {
    greetingDiv.textContent = `Hello, ${name}!`;
  } else {
    greetingDiv.textContent = "";
  }
});

clearButton.addEventListener("click", function () {
  nameInput.value = "";
  greetingDiv.textContent = "";
});

// Task 4
const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "cyan",
  "magenta",
  "lime",
];

const boxDiv = document.getElementById("box");
boxDiv.style.width = "100px";
boxDiv.style.height = "100px";
boxDiv.style.border = "5px solid black";

const buttonChangeStyle = document.querySelector(".change-style");

buttonChangeStyle.addEventListener("click", function () {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  boxDiv.style.borderColor = randomColor;

  let currentWidth = parseInt(boxDiv.style.width, 10);
  let currentHeight = parseInt(boxDiv.style.height, 10);

  currentWidth *= 2;
  currentHeight *= 2;

  if (currentWidth < 300 && currentHeight < 300) {
    boxDiv.style.width = `${currentWidth}px`;
    boxDiv.style.height = `${currentHeight}px`;
  } else {
    console.log("Can't increase height and width since we are at the maximum.");
  }
});

// Task 5
const buttons = document.querySelectorAll(".click-me");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    alert(i + 1);
  });
}
