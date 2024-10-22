import { alertMessagesTypes } from "./storage-alert-messages.js";
import { createDomEl } from "./create-div-dom.js";
import { alertMessageContainerEl, navbarDesktopEl } from "./storage-elements-dom.js";

const displayAlertMessage = (messageType, word) => {
  const { message, backgroundColor } = alertMessagesTypes(messageType, word) || {};

  if (message && backgroundColor) {
    const currentScrollY = window.scrollY;
    const messageContainer = alertMessageContainerEl || createDomEl();
    
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
    messageContainer.textContent = message;

    if (!alertMessageContainerEl) {
      navbarDesktopEl.insertAdjacentElement('afterend', messageContainer);
    }

    setTimeout(() => {
      messageContainer.style.display = 'none';
    }, 1000);
  } else {
    console.error('Message type not found!');
  }
};

export { displayAlertMessage };
