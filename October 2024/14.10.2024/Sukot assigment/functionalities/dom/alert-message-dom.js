import { alertMessagesTypes } from "./alert-messages-storage.js";
import { createDomEl } from "./create-div-dom.js";
import { alertMessageContainerEl, navbarDesktopEl } from "./storage-elements-dom.js";

const displayAlertMessage = (messageType, word) => {
  const { message, backgroundColor } = alertMessagesTypes(messageType, word) || {};

  if (message && backgroundColor) {
    if (!alertMessageContainerEl) {
      const templateMessageContainer = createDomEl();
      templateMessageContainer.classList.add('template-message-container');
      templateMessageContainer.style.background = backgroundColor;
      templateMessageContainer.style.display = 'flex';
      templateMessageContainer.textContent = message;

      navbarDesktopEl.insertAdjacentElement('afterend', templateMessageContainer);

      setTimeout(() => {
        templateMessageContainer.style.display = 'none';
      }, 3000);

      return templateMessageContainer;
    } 
    else {
      alertMessageContainerEl.style.background = backgroundColor;
      alertMessageContainerEl.textContent = message;
      alertMessageContainerEl.style.display = 'flex';

      setTimeout(() => {
        alertMessageContainerEl.style.display = 'none';
      }, 3000);
    }
  } else {
    console.error('Message type not found!');
  }
};

export { displayAlertMessage };
