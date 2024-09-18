function randomID() {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}
const liList = document.querySelectorAll("li");
const elUL = document.querySelector("ul");
const addBtn = document.querySelector(".add");
const removeBtn = document.querySelector(".remove");
const toggleBtn = document.querySelector(".toggle");
const inputTaskName = document.querySelector("#task-name");
const inputSubjectName = document.querySelector("#subject-name");
const filterTodos = document.querySelector("#task-filter");

// Task 2
addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const createNewLi = document.createElement("li");
  const createNewBtn = document.createElement("button");
  createNewBtn.className = `${randomID()}`;
  createNewLi.innerHTML = `Subject: ${inputSubjectName.value} <br> Task: ${inputTaskName.value} ${createNewBtn}
`;
  elUL.appendChild(createNewLi);
});

// Task 3
