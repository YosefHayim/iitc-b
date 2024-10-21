import { createDomEl } from "./create-div-dom.js";
import { alertMessageContainerEl, navbarDesktopEl } from "./storage-elements-dom.js";

const displayAlertMessage  = (message,backgroundColor,textColor) => {

  if (!alertMessageContainerEl) {
    const templateMessageContainer = createDomEl()
    templateMessageContainer.classList.add('template-message-container')

    templateMessageContainer.style.background = backgroundColor
    templateMessageContainer.style.display = `flex`

    templateMessageContainer.textContent = message
    navbarDesktopEl.insertAdjacentElement('afterend',templateMessageContainer)

    setTimeout(() => {
      templateMessageContainer.style.display =`none`
    },3000)
    return templateMessageContainer

    // Else it does exist we proceed.
  } else {
    if (backgroundColor && textColor) {
    alertMessageContainerEl.style.color = textColor  
    alertMessageContainerEl.style.background = backgroundColor
    }

    alertMessageContainerEl.textContent = message;
    alertMessageContainerEl.style.display = 'flex';
  
    setTimeout(() => {
      alertMessageContainerEl.style.display = 'none';
    }, 3000);
  }
}

export {displayAlertMessage }