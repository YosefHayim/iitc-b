import { alertMessagesTypes } from "./storage-alert-messages.js";
import { createDomEl } from "./create-div-dom.js";
import {
  alertMessageContainerEl,
  navbarDesktopEl,
} from "./storage-elements-dom.js";

// Shows alert with custom message and style based on user interaction.
const displayAlertMessage = (messageType, word) => {
  // Get message and background color for alert.
  const { message, backgroundColor } =
    alertMessagesTypes(messageType, word) || {};

  // If both message and background color exist.
  if (message && backgroundColor) {
    const currentScrollY = window.scrollY; // Get current Y-axis scroll.

    // Check or create alert container.
    const messageContainer = alertMessageContainerEl || createDomEl();

    // Style and position the alert.
    messageContainer.classList.add("template-message-container");
    messageContainer.style.cssText = `
      background: ${backgroundColor};
      display: flex;
      position: absolute;
      top: ${currentScrollY}px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 101;
    `;

    messageContainer.textContent = message; // Set message text.

    // Insert alert after navbar if missing.
    if (!alertMessageContainerEl) {
      if (navbarDesktopEl) {
        navbarDesktopEl.insertAdjacentElement("afterend", messageContainer);
      } else if (announcementBarDiv) {
        announcementBarDiv.insertAdjacentElement("afterend", messageContainer);
      }
    }

    // Display alert for 1 second, then hide.
    setTimeout(() => {
      messageContainer.style.display = "none";
    }, 1000);
  }
};

export { displayAlertMessage };
