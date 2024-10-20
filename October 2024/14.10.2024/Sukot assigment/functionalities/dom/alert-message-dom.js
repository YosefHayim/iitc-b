import { createDomEl } from "./create-div-dom.js";
import { alertMessageContainerEl, navbarDesktopEl } from "./storage-elements-dom.js";

// Alerting the user dynamic based on the callback.
const displayAlertMessage  = (message,backgroundColor) => {

  // If the alertMessageContainerEl doesn't exist in the current html page we are than we create it.
  if (!alertMessageContainerEl) {
    const templateMessageContainer = createDomEl()
    templateMessageContainer.classList.add('template-message-container')
    templateMessageContainer.style.background = backgroundColor
    templateMessageContainer.innerHTML = message
    templateMessageContainer.style.display = `flex`
    navbarDesktopEl.insertAdjacentElement('afterend',templateMessageContainer)
    setTimeout(() => {
      templateMessageContainer.style.display =`none`
    },3000)

    return templateMessageContainer

    // Else it does exist we proceed.
  } else {
    if (backgroundColor) {
      alertMessageContainerEl.style.background = backgroundColor
    }
    alertMessageContainerEl.innerHTML = message;
    alertMessageContainerEl.style.display = 'flex';
  
    setTimeout(() => {
      alertMessageContainerEl.style.display = 'none';
    }, 1500);
  }
}

export {displayAlertMessage }