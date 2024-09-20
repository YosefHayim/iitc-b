const addItemBtns = document.querySelectorAll(".add-item");
let oneItemAdd = 1;
let rowNumAdding = 4;

function addItemtoInventory() {
  for (let i = 0; i < addItemBtns.length; i++) {
    addItemBtns[i].addEventListener("click", (event) => {
      const singleBtn = event.target;
      const parent = singleBtn.parentElement;

      const name = parent.firstChild.textContent.trim();
      const price = parent.querySelector("span").textContent;

      const rows = document.querySelectorAll("tr");
      let existingRow = null;

      for (let j = 0; j < rows.length; j++) {
        const nameCell = rows[j].children[0];
        if (nameCell && nameCell.textContent.trim() === name) {
          existingRow = rows[j];
          break;
        }
      }

      if (existingRow) {
        const priceTd = existingRow.children[1];
        const amountTd = existingRow.children[2];
        const existingPrice = parseFloat(priceTd.textContent.replace("$", ""));
        const newPrice = existingPrice * 2;
        oneItemAdd++;
        amountTd.textContent = `${oneItemAdd}`;
        priceTd.textContent = `$${newPrice.toFixed(2)}`;
      } else {
        // If item does not exist, add a new row
        const newRow = `
          <tr class="row-${rowNumAdding}">
            <td>${name}</td>
            <td>${price}</td>
            <td>${oneItemAdd}</td>
            <td><button class="${name}">Remove</button></td>
            <td><button>Click to Increase</button></td>
            <td><button>Click to Decrease</button></td>
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
