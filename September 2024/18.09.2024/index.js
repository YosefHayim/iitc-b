function randomID() {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

const ulBtns = document.querySelectorAll("ul button");
const elUL = document.querySelector("ul");
const addBtn = document.querySelector(".add");
const removeBtn = document.querySelector(".remove");
const toggleBtn = document.querySelector(".toggle");
const inputTaskName = document.querySelector("#task-name");
const inputSubjectName = document.querySelector("#subject-name");
const taskFilter = document.getElementById("task-filter");
const allTodos = elUL.querySelectorAll("li");

// Task 2
function addTask() {
  addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const createNewLi = document.createElement("li");

    createNewLi.innerHTML = `Subject: ${inputSubjectName.value} <br> Task: ${
      inputTaskName.value
    } <br> <button class="${randomID()}">Delete</button>`;

    elUL.appendChild(createNewLi);
  });
}

// Task 3
function removeTask() {
  elUL.addEventListener("click", (event) => {
    if (event.target.className.length === 5) {
      event.preventDefault();
      event.target.parentElement.remove();
    }
  });
}
// Task 4
function toggleData() {
  elUL.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("grayColorNlineStrike");
    }
  });
}

// Bonus Feature Filter To-dos
function filterData() {
  taskFilter.addEventListener("change", (event) => {
    const filterValue = event.target.value;
    const allTodos = elUL.querySelectorAll("li");

    for (let i = 0; i < allTodos.length; i++) {
      const todo = allTodos[i];

      if (filterValue === "all") {
        todo.style.display = "block";
      } else if (
        filterValue === "completed" &&
        todo.classList.contains("grayColorNlineStrike")
      ) {
        todo.style.display = "block";
      } else if (
        filterValue === "uncompleted" &&
        !todo.classList.contains("grayColorNlineStrike")
      ) {
        todo.style.display = "block";
      } else {
        todo.style.display = "none";
      }
    }
  });
}

// Bonus Feature Edit Todos
function modiText() {
  elUL.addEventListener("mouseup", (event) => {
    if (event.target.tagName === "LI") {
      event.target.contentEditable = true;
      this.focus();
    }
  });
}
// Bonus Feature Persistence
addTask();
removeTask();
toggleData();
filterData();
modiText();