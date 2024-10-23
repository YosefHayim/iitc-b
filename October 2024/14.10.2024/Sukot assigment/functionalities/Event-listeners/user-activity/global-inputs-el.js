import { allInputsContainers } from "../../DOM/storage-elements-dom.js";
import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { redirectToErrorPage } from "../../DOM/redirect-to-404-dom.js";
import { redirectToHome } from "../../DOM/redirect-to-homepage-dom.js";

// This function is responsible to handle the input containers text. it checks if it valid and if it does we set a new object to the URL and add a query of the input value
const handleMovieSearchByIdOrName = () => {
  allInputsContainers.forEach(form => {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const inputValue = form.querySelector('input').value.trim();
      
      if (!inputValue) {
        displayAlertMessage('input-error', inputValue);
        redirectToErrorPage();
        return;
      }

      let params = new URLSearchParams();
      params.set('query', inputValue);
      redirectToHome(params)
    });
  });
};

export { handleMovieSearchByIdOrName };
