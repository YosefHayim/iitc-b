import { alertMessagesTypes } from "./alert-messages-storage.js";
import { createDomEl } from "./create-div-dom.js";
import { alertMessageContainerEl, navbarDesktopEl } from "./storage-elements-dom.js";

// Function to display alert messages based on type
const displayAlertMessage = (messageType, word) => {
  // Fetch the alert message and background color based on the message type and word
  const { message, backgroundColor } = alertMessagesTypes(messageType, word) || {};

  // If the alert is defined, proceed to display it
  if (message && backgroundColor) {
    // If no alert message container exists, create a new one
    if (!alertMessageContainerEl) {
      const templateMessageContainer = createDomEl();
      templateMessageContainer.classList.add('template-message-container');
      templateMessageContainer.style.background = backgroundColor;
      templateMessageContainer.style.display = 'flex';
      templateMessageContainer.textContent = message;

      // Insert the alert message right after the navbar
      navbarDesktopEl.insertAdjacentElement('afterend', templateMessageContainer);

      // Hide the alert after 3 seconds
      setTimeout(() => {
        templateMessageContainer.style.display = 'none';
      }, 3000);

      return templateMessageContainer;
    } 
    // If the alert message container already exists, update its content and style
    else {
      alertMessageContainerEl.style.background = backgroundColor;
      alertMessageContainerEl.textContent = message;
      alertMessageContainerEl.style.display = 'flex';

      // Hide the alert after 3 seconds
      setTimeout(() => {
        alertMessageContainerEl.style.display = 'none';
      }, 3000);
    }
  } else {
    // Log an error if the message type is not found
    console.error('Message type not found!');
  }
};

export { displayAlertMessage };
