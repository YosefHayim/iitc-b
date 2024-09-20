const addItemBtns = document.querySelectorAll(".add-item");
const table = document.querySelector("table");
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
          eachRowTotalPriceCount();
          totalPriceInventory(); // Recalculate total after updating item price
          break;
        }
      }

      if (!itemExists) {
        number++;
        const newRow = `
        <tr>
          <td class="row-${number}">${name}</td>
          <td><span class="dollar-sign">$</span>${price.toFixed(2)}</td>
          <td>
            <button class="up">Up</button> 1 <button class="down">Down</button>
          </td>
          <td class="total-price"><span class="dollar-sign">$</span>${price.toFixed(
            2
          )}</td>
          <td><button class="remove-button">Remove</button></td>
        </tr>
        `;
        table.insertAdjacentHTML("beforeend", newRow);
        eachRowTotalPriceCount(); // Ensure the total is calculated for the new row
        totalPriceInventory(); // Recalculate the entire inventory total
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
      eachRowTotalPriceCount(); // Recalculate row total price
      totalPriceInventory(); // Recalculate total after quantity change
    }

    if (event.target.classList.contains("down")) {
      const downButton = event.target;
      const row = downButton.closest("tr");
      const amountCell = row.querySelectorAll("td")[2];
      const amountTextNode = amountCell.childNodes[2];
      const amount = parseInt(amountTextNode.textContent.trim());

      if (amount > 1) {
        amountTextNode.textContent = ` ${amount - 1} `;
        eachRowTotalPriceCount(); // Recalculate row total price
        totalPriceInventory(); // Recalculate total after quantity change
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
      totalPriceInventory(); // Recalculate total after removing an item
    }
  });
}

function eachRowTotalPriceCount() {
  const rows = table.querySelectorAll("tr");

  for (let j = 1; j < rows.length; j++) {
    const row = rows[j];
    const priceCell = row.querySelectorAll("td")[1];
    const amountCell = row.querySelectorAll("td")[2];
    const totalPriceCell = row.querySelectorAll("td")[3];

    const price = parseFloat(priceCell.textContent.replace("$", "").trim());
    const amount = parseInt(amountCell.childNodes[2].textContent.trim());

    const totalPrice = price * amount;
    totalPriceCell.innerHTML = `<span class="dollar-sign">$</span>${totalPrice.toFixed(
      2
    )}`;
  }
}

function totalPriceInventory() {
  const totalPriceCells = table.querySelectorAll(".total-price");

  let totalSum = 0;

  // Loop through each total price cell and sum the values
  for (let i = 0; i < totalPriceCells.length; i++) {
    const cell = totalPriceCells[i];
    const price = parseFloat(cell.textContent.replace("$", "").trim());
    totalSum += price;
  }

  // Update the footer with the sum of all total prices
  const totalFooter = document.querySelector(".total-prices-row-footer td");
  totalFooter.textContent = `$${totalSum.toFixed(2)}`;
}

addItemtoInventory();
upDownAmount();
removeRowData();
eachRowTotalPriceCount();
totalPriceInventory();
