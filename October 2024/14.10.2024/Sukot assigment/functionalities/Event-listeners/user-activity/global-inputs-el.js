import { allInputsContainers } from "../../DOM/storage-elements-dom.js";
import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { redirectToErrorPage } from "../../DOM/redirect-to-404-dom.js";
import { redirectToHome } from "../../DOM/redirect-to-homepage-dom.js";

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
