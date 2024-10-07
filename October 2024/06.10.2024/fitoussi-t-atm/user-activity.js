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

      // Display balance
      if (button.textContent === 'Balance') {
        if (!document.querySelector('.balance-display')) {
          const currentBalance = document.createElement('h2');
          currentBalance.textContent = `Balance: $${storedBalance.toLocaleString()}`;
          currentBalance.classList.add('balance-display');
          bodyHTML.appendChild(currentBalance);
        }
      }

      // Withdraw functionality (display every time button is clicked)
      if (button.textContent === 'Withdraw') {
        const withdrawContainer = document.createElement('div');
        withdrawContainer.classList.add('withdraw-display');

        const withdrawLabel = document.createElement('label');
        withdrawLabel.textContent = `Provide withdraw amount:`;
        withdrawLabel.setAttribute('for', 'withdraw-amount');
        
        const withdrawInput = document.createElement('input');
        withdrawInput.setAttribute('type', 'number'); 
        withdrawInput.setAttribute('id', 'withdraw-amount'); 
        withdrawInput.setAttribute('min', '1'); 
        withdrawInput.setAttribute('placeholder', 'Enter amount'); 
        
        const submitWithdraw = document.createElement('button');
        submitWithdraw.textContent = 'Submit Withdrawal';

        withdrawContainer.appendChild(withdrawLabel);
        withdrawContainer.appendChild(withdrawInput);
        withdrawContainer.appendChild(submitWithdraw);

        bodyHTML.appendChild(withdrawContainer);
        
        submitWithdraw.addEventListener('click', () => {
          let userAmountWithdraw = parseInt(withdrawInput.value);

          if (!isNaN(userAmountWithdraw) && userAmountWithdraw <= storedBalance) {
            storedBalance -= userAmountWithdraw;
            parsedData.currentBalance = storedBalance.toLocaleString();
            transactions.push(['withdraw', userAmountWithdraw]);
            parsedData.transactions = transactions;
            localStorage.setItem("userData", JSON.stringify(parsedData));

            const successMessage = document.createElement('h2');
            successMessage.textContent = `Withdrawal successful! Your updated balance is: $${storedBalance.toLocaleString()}`;
            bodyHTML.appendChild(successMessage);

            const balanceDisplay = document.querySelector('.balance-display');
            if (balanceDisplay) {
              balanceDisplay.textContent = `Balance: $${storedBalance.toLocaleString()}`;
            }
          } else {
            alert('Invalid or insufficient amount');
          }
        });
      }

      // Deposit functionality (display every time button is clicked)
      if (button.textContent === 'Deposit') {
        const depositContainer = document.createElement('div');
        depositContainer.classList.add('deposit-display');

        const depositLabel = document.createElement('label');
        depositLabel.textContent = `Provide deposit amount:`;
        depositLabel.setAttribute('for', 'deposit-amount');
        
        const depositInput = document.createElement('input');
        depositInput.setAttribute('type', 'number'); 
        depositInput.setAttribute('id', 'deposit-amount'); 
        depositInput.setAttribute('min', '1'); 
        depositInput.setAttribute('placeholder', 'Enter amount'); 
        
        const submitDeposit = document.createElement('button');
        submitDeposit.textContent = 'Submit Deposit';

        depositContainer.appendChild(depositLabel);
        depositContainer.appendChild(depositInput);
        depositContainer.appendChild(submitDeposit);

        bodyHTML.appendChild(depositContainer);
        
        submitDeposit.addEventListener('click', () => {
          let userAmountDeposit = parseInt(depositInput.value);

          if (!isNaN(userAmountDeposit) && userAmountDeposit > 0) {
            storedBalance += userAmountDeposit;
            parsedData.currentBalance = storedBalance.toLocaleString();
            transactions.push(['deposit', userAmountDeposit]);
            parsedData.transactions = transactions;
            localStorage.setItem("userData", JSON.stringify(parsedData));

            const successMessage = document.createElement('h2');
            successMessage.textContent = `Deposit successful! Your updated balance is: $${storedBalance.toLocaleString()}`;
            bodyHTML.appendChild(successMessage);

            const balanceDisplay = document.querySelector('.balance-display');
            if (balanceDisplay) {
              balanceDisplay.textContent = `Balance: $${storedBalance.toLocaleString()}`;
            }
          } else {
            alert('Invalid amount');
          }
        });
      }

      // Last transaction functionality (display every time button is clicked)
      if (button.textContent === 'Last Transaction') {
        const transactionContainer = document.createElement('div');
        transactionContainer.classList.add('transaction-display');
    
        const transactionList = document.createElement('ul');
    
        if (transactions.length === 0) {
          const noTransactionMessage = document.createElement('li');
          noTransactionMessage.textContent = 'No transactions available.';
          transactionList.appendChild(noTransactionMessage);
        } else {
          transactions.forEach((transaction) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${transaction[0]}: $${parseInt(transaction[1]).toLocaleString()}`;
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
