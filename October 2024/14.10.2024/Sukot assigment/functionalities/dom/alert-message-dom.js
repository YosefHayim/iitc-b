import { alertMessageContainer } from "./storage-elements-dom.js";

// Alerting the user dynamic based on the callback.
const alertMessage = (message) => {

  alertMessageContainer.innerHTML = message;
  alertMessageContainer.style.display = 'flex';

  setTimeout(() => {
    alertMessageContainer.style.display = 'none';
  }, 1500);
}

export {alertMessage}