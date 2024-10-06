// Define the data object
const data = {
  PIN: '1234',
  currentBalance: `1,500,123`,
  transactions: [] // Array to store transaction history
};

// Store the initial data in localStorage
localStorage.setItem("userData", JSON.stringify(data));

// Retrieve and parse the stored data
let storedData = localStorage.getItem("userData");
let parsedData = JSON.parse(storedData);

let storedPIN = parsedData.PIN;
let storedBalance = parseInt(parsedData.currentBalance.replace(/,/g, '')); // Convert string balance to number
let transactions = parsedData.transactions; // Retrieve the transactions array
let bodyHTML = document.body; // Define bodyHTML

// Function to check PIN correctness
const checkPinCorrect = (storedPIN) => {
  const formEl = document.querySelector('.pin-form-entered');
  formEl.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let userInput = document.querySelector('input').value;
    console.log(userInput);
    
    if (userInput === storedPIN) {
      userAccess();
    } else {
      let validateMessage = document.createElement('h2');
      validateMessage.textContent = `PIN incorrect`;
      validateMessage.classList.add('wrong');
      formEl.parentNode.insertBefore(validateMessage, formEl.nextSibling);
    }
  });
};

// Function for correct PIN access
const userAccess = () => {
  bodyHTML.innerHTML = ''; 

  const correctMessage = document.createElement('h2');
  correctMessage.textContent = `PIN correct`;
  correctMessage.classList.add('validate');
  bodyHTML.appendChild(correctMessage);

  const newHTwo = document.createElement('h2');
  newHTwo.textContent = `What would you like to do next?`;
  bodyHTML.appendChild(newHTwo);

  // Call userActivity to display buttons
  userActivity(storedBalance);
};

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
      console.log(button.textContent + ' button clicked');

      // Display balance
      if (button.textContent === 'Balance') {
        if (!document.querySelector('.balance-display')) {
          const currentBalance = document.createElement('h2');
          currentBalance.textContent = `Balance: $${storedBalance.toLocaleString()}`;
          currentBalance.classList.add('balance-display');
          bodyHTML.appendChild(currentBalance);
        }
      }

      // Withdraw functionality
      if (button.textContent === 'Withdraw') {
        if (!document.querySelector('.withdraw-display')) {
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

          // Append the input, label, and button to the withdraw container
          withdrawContainer.appendChild(withdrawLabel);
          withdrawContainer.appendChild(withdrawInput);
          withdrawContainer.appendChild(submitWithdraw);

          // Append the withdraw container to the body
          bodyHTML.appendChild(withdrawContainer);
          
          // Add event listener to the withdraw submission
          submitWithdraw.addEventListener('click', () => {
            let userAmountWithdraw = parseInt(withdrawInput.value);

            // Check if the withdraw amount is valid
            if (!isNaN(userAmountWithdraw) && userAmountWithdraw <= storedBalance) {
              storedBalance -= userAmountWithdraw; // Deduct from balance
              
              // Update the balance in localStorage and transaction history
              parsedData.currentBalance = storedBalance.toLocaleString(); // Update balance as string
              transactions.push(['withdraw', userAmountWithdraw]); // Add transaction to history
              parsedData.transactions = transactions;
              localStorage.setItem("userData", JSON.stringify(parsedData));

              // Show success message and updated balance
              const successMessage = document.createElement('h2');
              successMessage.textContent = `Withdrawal successful! Your updated balance is: $${storedBalance.toLocaleString()}`;
              bodyHTML.appendChild(successMessage);

              // Update the displayed balance if it's already shown
              const balanceDisplay = document.querySelector('.balance-display');
              if (balanceDisplay) {
                balanceDisplay.textContent = `Balance: $${storedBalance.toLocaleString()}`;
              }
            } else {
              alert('Invalid or insufficient amount');
            }
          });
        }
      }

      // Deposit functionality
      if (button.textContent === 'Deposit') {
        if (!document.querySelector('.deposit-display')) {
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

          // Append the input, label, and button to the deposit container
          depositContainer.appendChild(depositLabel);
          depositContainer.appendChild(depositInput);
          depositContainer.appendChild(submitDeposit);

          // Append the deposit container to the body
          bodyHTML.appendChild(depositContainer);
          
          // Add event listener to the deposit submission
          submitDeposit.addEventListener('click', () => {
            let userAmountDeposit = parseInt(depositInput.value);

            // Check if the deposit amount is valid
            if (!isNaN(userAmountDeposit) && userAmountDeposit > 0) {
              storedBalance += userAmountDeposit; // Add to balance
              
              // Update the balance in localStorage and transaction history
              parsedData.currentBalance = storedBalance.toLocaleString(); // Update balance as string
              transactions.push(['deposit', userAmountDeposit]); // Add transaction to history
              parsedData.transactions = transactions;
              localStorage.setItem("userData", JSON.stringify(parsedData));

              // Show success message and updated balance
              const successMessage = document.createElement('h2');
              successMessage.textContent = `Deposit successful! Your updated balance is: $${storedBalance.toLocaleString()}`;
              bodyHTML.appendChild(successMessage);

              // Update the displayed balance if it's already shown
              const balanceDisplay = document.querySelector('.balance-display');
              if (balanceDisplay) {
                balanceDisplay.textContent = `Balance: $${storedBalance.toLocaleString()}`;
              }
            } else {
              alert('Invalid amount');
            }
          });
        }
      }

      // Last transaction functionality
      if (button.textContent === 'Last Transaction') {
        if (!document.querySelector('.transaction-display')) {
          const transactionContainer = document.createElement('div');
          transactionContainer.classList.add('transaction-display');
      
          const transactionList = document.createElement('ul');
      
          // Check if there are any transactions, if not show a message
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
      }
    });
  });
};

// Start checking PIN
checkPinCorrect(storedPIN);
