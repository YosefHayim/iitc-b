const addItemBtns = document.querySelectorAll(".add-item");
const table = document.querySelector("table");
const oneItemAdd = 1;
let rowCount = 4;

// Function to add items to the inventory
function addItemtoInventory() {
  for (let i = 0; i < addItemBtns.length; i++) {
    const elBtn = addItemBtns[i];

    elBtn.addEventListener("click", (event) => {
      const clickedButton = event.target;

      const parentLi = clickedButton.parentElement;

      const name = parentLi.childNodes[0].textContent.trim();

      const priceElement = parentLi.querySelector(".dollar-sign");
      const price = priceElement.parentElement.textContent
        .replace("$", "")
        .trim();

      rowCount++;

      table.innerHTML += `
        <tr class="row-${rowCount}">
          <td>${name}</td>
          <td><span class="dollar-sign">$</span>${price}</td>
          <td>1</td>
          <td><button>Remove</button></td>
        </tr>
      `;
    });
  }
}

addItemtoInventory();
