import { alertMessagesTypes } from "./storage-alert-messages.js";
import { createDomEl } from "./create-div-dom.js";
import { alertMessageContainerEl, navbarDesktopEl } from "./storage-elements-dom.js";

// Displays an alert with a message and background color, based on user interaction.
const displayAlertMessage = (messageType, word) => {
  // Get message and background color based on messageType and word.
  const { message, backgroundColor } = alertMessagesTypes(messageType, word) || {};

  // Proceed if both message and background color are available.
  if (message && backgroundColor) {
    // Get the user's current scroll position (Y-axis).
    const currentScrollY = window.scrollY;

    // Check if alert message container exists, otherwise create it.
    const messageContainer = alertMessageContainerEl || createDomEl();

    // Apply the necessary styles and position to the alert container.
    messageContainer.classList.add('template-message-container');
    messageContainer.style.cssText = `
      background: ${backgroundColor};
      display: flex;
      position: absolute;
      top: ${currentScrollY}px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    `;

    // Set the message text in the alert container.
    messageContainer.textContent = message;

    // If the container doesn't exist, append it after the navbar.
    if (!alertMessageContainerEl) {
      navbarDesktopEl.insertAdjacentElement('afterend', messageContainer);
    }

    // Display the alert for 1 second, then hide it.
    setTimeout(() => {
      messageContainer.style.display = 'none';
    }, 1000);
  } else {
    console.error('Message type not found!');
  }
};

export { displayAlertMessage };
