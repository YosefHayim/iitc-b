import { alertMessageContainer } from "../global/domEls.js";

// Alerting the user dynamic based on the callback.
const alertMessage = (message) => {

  alertMessageContainer.innerHTML = message;
  alertMessageContainer.style.display = 'flex';

  setTimeout(() => {
    alertMessageContainer.style.display = 'none';
  }, 1500);
}

export {alertMessage}