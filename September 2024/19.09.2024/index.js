const addItemBtns = document.querySelectorAll(".add-item");
const oneItemAdd = 1;
let rowNumAdding = 4;

function addItemtoInventory() {
  for (let i = 0; i < addItemBtns.length; i++) {
    addItemBtns[i].addEventListener("click", (event) => {
      const singleBtn = event.target;
      const parent = singleBtn.parentElement;

      const name = parent.firstChild.textContent.trim();
      const price = parent.querySelector("span").textContent;

      // Get all rows and check if a row with the same name exists
      const rows = document.querySelectorAll("tr");
      let existingRow = null;

      // Loop through each row to find the one with the matching name
      for (let j = 0; j < rows.length; j++) {
        const nameCell = rows[j].children[0]; // Get the first <td> of the row
        if (nameCell && nameCell.textContent.trim() === name) {
          existingRow = rows[j]; // Store the reference to the row if found
          break; // Exit the loop once we find the matching row
        }
      }

      if (existingRow) {
        // If the item already exists, multiply the price instead of adding a new row
        const priceTd = existingRow.children[1]; // Get the second <td>, which contains the price
        const existingPrice = parseFloat(priceTd.textContent.replace("$", ""));
        const newPrice = existingPrice * 2;
        priceTd.textContent = `$${newPrice.toFixed(2)}`;
      } else {
        // If item does not exist, add a new row
        const newRow = `
          <tr class="row-${rowNumAdding}">
            <td>${name}</td>
            <td>${price}</td>
            <td>${oneItemAdd}</td>
            <td><button class="${name}">Remove</button></td>
          </tr>
        `;

        document.querySelector("body > table > tbody:last-child").innerHTML +=
          newRow;
        rowNumAdding++;
      }
    });
  }
}

addItemtoInventory();
