import { createDomEl } from "./create-div-dom.js";
import { alertMessageContainer, navbarDesktop } from "./storage-elements-dom.js";

// Alerting the user dynamic based on the callback.
const alertMessage = (message,backgroundColor) => {

  if (!alertMessageContainer) {
    const templateMessageContainer = createDomEl()
    templateMessageContainer.classList.add('template-message-container')
    templateMessageContainer.style.background = backgroundColor
    templateMessageContainer.innerHTML = message
    templateMessageContainer.style.display = `flex`
    navbarDesktop.insertAdjacentElement('afterend',templateMessageContainer)
    setTimeout(() => {
      templateMessageContainer.style.display =`none`
    },3000)

    return templateMessageContainer

  } else {
    alertMessageContainer.innerHTML = message;
    alertMessageContainer.style.display = 'flex';
  
    setTimeout(() => {
      alertMessageContainer.style.display = 'none';
    }, 1500);
  }
}

export {alertMessage}