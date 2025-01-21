import { parsedData, transactions, bodyHTML } from "./static-data.js";

// Function to display user options and handle button actions
const userActivity = (storedBalance) => {
  const newDiv = document.createElement('div');
  newDiv.classList.add('select-user-options');
  newDiv.innerHTML = `
    <button class="deposit">Deposit</button>
    <button class="withdraw">Withdraw</button>
    <button class="balance">Balance</button>
    <button class="last-transaction">Last Transaction</button>
  `;
  bodyHTML.appendChild(newDiv);

  const divButtons = document.querySelectorAll(".select-user-options button");
  divButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      // Remove any existing display containers
      document.querySelectorAll('.withdraw-display, .deposit-display, .transaction-display').forEach(el => el.remove());

      // Display balance
      if (button.textContent === 'Balance') {
        let balanceDisplay = document.querySelector('.balance-display');
        if (!balanceDisplay) {
          balanceDisplay = document.createElement('h2');
          balanceDisplay.classList.add('balance-display');
          bodyHTML.appendChild(balanceDisplay);
        }
        balanceDisplay.textContent = `Balance: $${storedBalance.toLocaleString()}`;
      }

      // Withdraw functionality
      if (button.textContent === 'Withdraw') {
        const withdrawContainer = document.createElement('div');
        withdrawContainer.classList.add('withdraw-display');

        withdrawContainer.innerHTML = `
          <label for="withdraw-amount">Provide withdraw amount:</label>
          <input type="number" id="withdraw-amount" min="1" placeholder="Enter amount">
          <button id="submit-withdraw">Submit Withdrawal</button>
        `;
        bodyHTML.appendChild(withdrawContainer);

        withdrawContainer.querySelector('#submit-withdraw').addEventListener('click', () => {
          const withdrawInput = withdrawContainer.querySelector('#withdraw-amount');
          const userAmountWithdraw = parseInt(withdrawInput.value);

          if (!isNaN(userAmountWithdraw) && userAmountWithdraw <= storedBalance) {
            storedBalance -= userAmountWithdraw;
            parsedData.currentBalance = storedBalance.toLocaleString();
            transactions.push(['withdraw', userAmountWithdraw]);
            localStorage.setItem("userData", JSON.stringify(parsedData));

            alert(`Withdrawal successful! Your updated balance is: $${storedBalance.toLocaleString()}`);
            withdrawContainer.remove();
            document.querySelector('.balance-display').textContent = `Balance: $${storedBalance.toLocaleString()}`;
          } else {
            alert('Invalid or insufficient amount');
          }
        });
      }

      // Deposit functionality
      if (button.textContent === 'Deposit') {
        const depositContainer = document.createElement('div');
        depositContainer.classList.add('deposit-display');

        depositContainer.innerHTML = `
          <label for="deposit-amount">Provide deposit amount:</label>
          <input type="number" id="deposit-amount" min="1" placeholder="Enter amount">
          <button id="submit-deposit">Submit Deposit</button>
        `;
        bodyHTML.appendChild(depositContainer);

        depositContainer.querySelector('#submit-deposit').addEventListener('click', () => {
          const depositInput = depositContainer.querySelector('#deposit-amount');
          const userAmountDeposit = parseInt(depositInput.value);

          if (!isNaN(userAmountDeposit) && userAmountDeposit > 0) {
            storedBalance += userAmountDeposit;
            parsedData.currentBalance = storedBalance.toLocaleString();
            transactions.push(['deposit', userAmountDeposit]);
            localStorage.setItem("userData", JSON.stringify(parsedData));

            alert(`Deposit successful! Your updated balance is: $${storedBalance.toLocaleString()}`);
            depositContainer.remove();
            document.querySelector('.balance-display').textContent = `Balance: $${storedBalance.toLocaleString()}`;
          } else {
            alert('Invalid amount');
          }
        });
      }

      // Last transaction functionality
      if (button.textContent === 'Last Transaction') {
        const transactionContainer = document.createElement('div');
        transactionContainer.classList.add('transaction-display');

        const transactionList = document.createElement('ul');
        if (transactions.length === 0) {
          transactionList.innerHTML = `<li>No transactions available.</li>`;
        } else {
          transactions.forEach(([type, amount]) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${type}: $${amount.toLocaleString()}`;
            transactionList.appendChild(listItem);
          });
        }

        transactionContainer.appendChild(transactionList);
        bodyHTML.appendChild(transactionContainer);
      }
    });
  });
};

export { userActivity };
