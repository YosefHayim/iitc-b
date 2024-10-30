// Task 1: Create an Element in DOM
document
  .getElementById("createElementBtn")
  .addEventListener("click", function () {
    const createElDiv = document.createElement("div");
    createElDiv.textContent = "This is a new div I created using dom";
    document.body.appendChild(createElDiv);
  });

// Task 2: Read Element Content
document
  .getElementById("readContentBtn")
  .addEventListener("click", function () {
    console.log(document.getElementById("readElement").textContent);
  });

// Task 3: Update Element Content
document
  .getElementById("updateContentBtn")
  .addEventListener("click", function () {
    document.querySelector("#updateHeading").textContent =
      "This is a new title";
  });

// Task 4: Delete an Element
document
  .getElementById("deleteElementBtn")
  .addEventListener("click", function () {
    document.querySelector("#deleteMe").remove();
  });

// Task 5: Add an Item to a List
document.getElementById("addItemBtn").addEventListener("click", function () {
  const dataInput = document.querySelector("#listInput").value;
  const createNewLi = document.createElement("li");
  createNewLi.textContent = `${dataInput}`;
  const ulList = document.querySelector("#itemList");
  ulList.append(createNewLi);
});

// Task 6: Remove an Item from a List
document
  .getElementById("removeLastItemBtn")
  .addEventListener("click", function () {
    const ulList = document.getElementById("itemList");
    ulList.lastElementChild.remove();
  });

// Task 7: Toggle Class on an Element
document
  .getElementById("toggleClassBtn")
  .addEventListener("click", function () {
    document.querySelector("#toggleClassDiv").classList.toggle("highlight");
  });

// Task 8: Edit an Item in a List
document.getElementById("itemToEdit").addEventListener("click", function () {
  const newText = prompt("Enter new text:", this.textContent);
  if (newText !== null) {
    this.textContent = newText;
  }
});

// Task 9: Count Elements in DOM
document.getElementById("countItemsBtn").addEventListener("click", function () {
  const listItems = document.querySelectorAll("#itemList li");
  console.log(listItems.length);
});

// Task 10: Clear All Items from a List
document.getElementById("clearListBtn").addEventListener("click", function () {
  const ulList = document.querySelector("#itemList");
  ulList.innerHTML = ""; // Clears all <li> elements
});
