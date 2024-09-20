const addItemBtns = document.querySelectorAll(".add-item");
const table = document.querySelector("table");
const removeButtons = document.querySelectorAll(".remove-button");
let number = 4;

function addItemtoInventory() {
  for (let i = 0; i < addItemBtns.length; i++) {
    const elBtn = addItemBtns[i];

    elBtn.addEventListener("click", (event) => {
      const clickedButton = event.target;

      const parentLi = clickedButton.parentElement;

      const name = parentLi.childNodes[0].textContent.trim();

      const priceElement = parentLi.querySelector(".dollar-sign");
      const price = parseFloat(
        priceElement.parentElement.textContent.replace("$", "").trim()
      );

      let itemExists = false;
      const rows = table.querySelectorAll("tr");
      for (let j = 1; j < rows.length; j++) {
        const row = rows[j];
        const itemName = row.querySelector("td").textContent.trim();

        if (itemName === name) {
          const priceCell = row.querySelectorAll("td")[1];
          let currentPrice = parseFloat(
            priceCell.textContent.replace("$", "").trim()
          );
          currentPrice += price;
          priceCell.innerHTML = `<span class="dollar-sign">$</span> ${currentPrice.toFixed(
            2
          )}`;
          itemExists = true;
          break;
        }
      }

      if (!itemExists) {
        number++;
        table.innerHTML += `
        <tr>
          <td class="row-${number}">${name}</td>
          <td><span class="dollar-sign">$</span>${price}</td>
          <td>
            <button class="up">Up</button> 1 <button class="down">Down</button>
          </td>
          <td><button>Remove</button></td>
        </tr>
        `;
      }
    });
  }
}

function upDownAmount() {
  table.addEventListener("click", function (event) {
    if (event.target.classList.contains("up")) {
      const upButton = event.target;

      const row = upButton.closest("tr");

      const amountCell = row.querySelectorAll("td")[2];

      const amountTextNode = amountCell.childNodes[2];

      const amount = parseInt(amountTextNode.textContent.trim());

      amountTextNode.textContent = ` ${amount + 1} `;
    }

    if (event.target.classList.contains("down")) {
      const downButton = event.target;

      const row = downButton.closest("tr");

      const amountCell = row.querySelectorAll("td")[2];

      const amountTextNode = amountCell.childNodes[2];

      const amount = parseInt(amountTextNode.textContent.trim());

      if (amount > 1) {
        amountTextNode.textContent = ` ${amount - 1} `;
      }
    }
  });
}

function removeRowData() {
  table.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-button")) {
      const removeBtn = event.target;
      const row = removeBtn.closest("tr");
      row.remove();
    }
  });
}

addItemtoInventory();
upDownAmount();
removeRowData();
