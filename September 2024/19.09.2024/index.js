// Select all the buttons with class "add-item"
const addItemButtons = document.querySelectorAll(".add-item");
// Select the table where inventory items will be listed
const inventoryTable = document.querySelector("table");
// Initialize a counter to generate unique row numbers for new items
let rowCounter = 4;

// Function to handle adding new items to the inventory
function addItemToInventory() {
  // Loop through each "Add" button and add a click event listener
  for (let i = 0; i < addItemButtons.length; i++) {
    const button = addItemButtons[i];

    // Event listener for adding an item when "Add" button is clicked
    button.addEventListener("click", (event) => {
      const clickedButton = event.target;
      // Find the parent list item of the clicked button
      const parentListItem = clickedButton.parentElement;
      // Get the name of the item (first text node of the list item)
      const itemName = parentListItem.childNodes[0].textContent.trim();
      // Get the price element (span with class "dollar-sign")
      const priceElement = parentListItem.querySelector(".dollar-sign");
      // Extract the price from the price element and convert it to a number
      const itemPrice = parseFloat(
        priceElement.parentElement.textContent.replace("$", "").trim()
      );

      let itemAlreadyExists = false;
      const tableRows = inventoryTable.querySelectorAll("tr");
      // Loop through the table rows to check if the item already exists
      for (let j = 1; j < tableRows.length; j++) {
        const row = tableRows[j];
        const existingItemName = row.querySelector("td").textContent.trim();

        if (existingItemName === itemName) {
          // If the item already exists, update the price
          const priceCell = row.querySelectorAll("td")[1];
          let currentPrice = parseFloat(
            priceCell.textContent.replace("$", "").trim()
          );
          currentPrice += itemPrice;
          // Update the price cell in the table
          priceCell.innerHTML = `<span class="dollar-sign">$</span> ${currentPrice.toFixed(
            2
          )}`;
          itemAlreadyExists = true;
          eachRowTotalPriceCount(); // Update total price for the row
          totalPriceInventory(); // Update total price for all items in inventory
          break;
        }
      }

      // If the item does not exist, add a new row to the table
      if (!itemAlreadyExists) {
        rowCounter++; // Increment the row counter for unique row identifiers
        const newRow = `
        <tr>
          <td class="row-${rowCounter}">${itemName}</td>
          <td><span class="dollar-sign">$</span>${itemPrice.toFixed(2)}</td>
          <td>
            <button class="up">Up</button> 1 <button class="down">Down</button>
          </td>
          <td class="total-price"><span class="dollar-sign">$</span>${itemPrice.toFixed(
            2
          )}</td>
          <td><button class="remove-button">Remove</button></td>
        </tr>
        `;
        // Insert the new row into the table
        inventoryTable.insertAdjacentHTML("beforeend", newRow);
        eachRowTotalPriceCount(); // Calculate total price for the new row
        totalPriceInventory(); // Update total price for all items in inventory
      }
    });
  }
}

// Function to handle increasing or decreasing item amounts
function adjustItemAmount() {
  inventoryTable.addEventListener("click", function (event) {
    if (event.target.classList.contains("up")) {
      // If "Up" button is clicked, increase the item amount
      const upButton = event.target;
      const row = upButton.closest("tr");
      const amountCell = row.querySelectorAll("td")[2];
      const amountText = amountCell.childNodes[2];
      const currentAmount = parseInt(amountText.textContent.trim());

      amountText.textContent = ` ${currentAmount + 1} `; // Increase the amount by 1
      eachRowTotalPriceCount(); // Recalculate the row total price
      totalPriceInventory(); // Recalculate the total for all items in the table
    }

    if (event.target.classList.contains("down")) {
      // If "Down" button is clicked, decrease the item amount (but not below 1)
      const downButton = event.target;
      const row = downButton.closest("tr");
      const amountCell = row.querySelectorAll("td")[2];
      const amountText = amountCell.childNodes[2];
      const currentAmount = parseInt(amountText.textContent.trim());

      if (currentAmount > 1) {
        amountText.textContent = ` ${currentAmount - 1} `; // Decrease the amount by 1
        eachRowTotalPriceCount(); // Recalculate the row total price
        totalPriceInventory(); // Recalculate the total for all items in the table
      }
    }
  });
}

// Function to remove an item row from the table
function removeItemFromTable() {
  inventoryTable.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-button")) {
      const removeButton = event.target;
      const row = removeButton.closest("tr");
      row.remove(); // Remove the row from the table
      totalPriceInventory(); // Recalculate the total after removing the item
    }
  });
}

// Function to calculate and update the total price for each row
function eachRowTotalPriceCount() {
  const tableRows = inventoryTable.querySelectorAll("tr");

  // Start from row 1 to skip the header row
  for (let j = 1; j < tableRows.length; j++) {
    const row = tableRows[j];
    const priceCell = row.querySelectorAll("td")[1];
    const amountCell = row.querySelectorAll("td")[2];
    const totalPriceCell = row.querySelectorAll("td")[3];

    const price = parseFloat(priceCell.textContent.replace("$", "").trim());
    const amount = parseInt(amountCell.childNodes[2].textContent.trim());

    // Calculate the total price by multiplying price and amount
    const totalPrice = price * amount;
    totalPriceCell.innerHTML = `<span class="dollar-sign">$</span>${totalPrice.toFixed(
      2
    )}`;
  }
}

// Function to calculate and update the total inventory price
function totalPriceInventory() {
  const totalPriceCells = inventoryTable.querySelectorAll(".total-price");

  let totalInventoryPrice = 0;

  // Loop through each total price cell and sum the values
  for (let i = 0; i < totalPriceCells.length; i++) {
    const priceCell = totalPriceCells[i];
    const price = parseFloat(priceCell.textContent.replace("$", "").trim());
    totalInventoryPrice += price;
  }

  // Update the footer with the sum of all total prices
  const totalFooter = document.querySelector(".total-prices-row-footer td");
  totalFooter.textContent = `$${totalInventoryPrice.toFixed(2)}`;
}

addItemToInventory();
adjustItemAmount();
removeItemFromTable();
eachRowTotalPriceCount();
totalPriceInventory();
