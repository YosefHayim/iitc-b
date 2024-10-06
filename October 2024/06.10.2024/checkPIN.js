import { userAccess } from "./user-access.js";

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

export {checkPinCorrect}