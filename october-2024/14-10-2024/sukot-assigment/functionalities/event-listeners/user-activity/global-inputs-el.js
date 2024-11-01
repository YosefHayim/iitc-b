import { allInputsContainers } from "../../dom/storage-elements-dom.js";
import { displayAlertMessage } from "../../dom/alert-message-dom.js";
import { redirectToErrorPage } from "../../dom/redirect-to-404-dom.js";
import { redirectToSearchPage } from "../../dom/redirect-to-serach-page-dom.js";

// Handles movie search by ID or name from input fields.
// Validates the input, and if valid, updates the URL with a query parameter and redirects to the homepage.
const handleMovieSearchByIdOrName = () => {
  allInputsContainers.forEach((form) => {
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();

      // Get the input value and trim any whitespace.
      const inputValue = form.querySelector("input").value.trim();

      // If the input is empty, display an error message and redirect to the error page.
      if (!inputValue) {
        displayAlertMessage("input-error", inputValue);
        redirectToErrorPage();
        return;
      }

      // If the input is valid, set the query parameter and redirect to the homepage with the search query.
      let params = new URLSearchParams();
      params.set("query", inputValue);
      redirectToSearchPage(params);
    });
  });
};

export { handleMovieSearchByIdOrName };
