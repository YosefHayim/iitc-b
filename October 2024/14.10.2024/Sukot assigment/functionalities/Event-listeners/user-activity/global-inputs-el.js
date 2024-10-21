import { allInputsContainers } from "../../DOM/storage-elements-dom.js";
import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { redirectToErrorPage } from "../../DOM/redirect-to-404-dom.js";
import { redirectToHome } from "../../DOM/redirect-to-homepage-dom.js";

const handleMovieSearchByIdOrName = () => {
  allInputsContainers.forEach(form => {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const inputValue = form.querySelector('input').value.trim();
      
      // Redirect to error page if input is empty
      if (!inputValue) {
        displayAlertMessage('input-error', inputValue);
        redirectToErrorPage();  // Redirect on empty input
        return;
      }

      // Prepare the query parameter
      let params = new URLSearchParams();
      params.set('query', inputValue);

      // Redirect to homepage with query in URL
      redirectToHome(params)
    });
  });
};

export { handleMovieSearchByIdOrName };
