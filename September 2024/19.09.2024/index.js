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
      ifItemExist();
    });
  }
}

addItemtoInventory();

function ifItemExist() {
  const rowsData = document.querySelectorAll(`[class^="row-"]`);
  const nameCount = {};

  for (let i = 0; i < rowsData.length; i++) {
    const name = rowsData[i].firstElementChild.textContent;

    if (nameCount[name]) {
      nameCount[name]++;

      const priceTd = rowsData[i].children[1];
      const price = priceTd.textContent;

      const convertToFloatandMultiplieByTwo =parseFloat(price.replace("$", "")) * 2;

      priceTd.textContent = `$${convertToFloatandMultiplieByTwo.toFixed(2)}`;
    } else {
      nameCount[name] = 1;
    }
  }
  console.log(nameCount);
}
