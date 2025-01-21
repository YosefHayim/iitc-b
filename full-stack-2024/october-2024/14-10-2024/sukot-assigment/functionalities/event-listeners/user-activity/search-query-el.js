import { displayAlertMessage } from "../../dom/alert-message-dom.js";
import { redirectToErrorPage } from "../../dom/redirect-to-404-dom.js";
import { searchMovieByName } from "../../get-api-calls/get-movie-by-name.js";
import { searchMovieById } from "../../get-api-calls/get-movie-id-by-id.js";

// This function sets up the homepage listener for processing search queries.
const inputSearchListener = () => {
  // Attach an event listener to the window for when the DOM content is fully loaded.
  window.addEventListener("DOMContentLoaded", async () => {
    // Extract the query parameter from the URL.
    const params = new URLSearchParams(window.location.search);
    const query = params.get("query");

    if (query) {
      // Check if the query is a valid movie name (letters and spaces only).
      if (/^[a-zA-Z\s]+$/.test(query)) {
        try {
          await searchMovieByName(query); // Perform the asynchronous search by movie name.
        } catch (error) {
          displayAlertMessage("search-error", query); // Display an error message if the search fails.
          redirectToErrorPage(); // Redirect to the error page.
        }

        // Check if the query is a valid movie ID (numbers only).
      } else if (/^[0-9]+$/.test(query)) {
        try {
          await searchMovieById(query); // Perform the asynchronous search by movie ID.
        } catch (error) {
          displayAlertMessage("search-error", query); // Display an error message if the search fails.
          redirectToErrorPage(); // Redirect to the error page.
        }

        // Handle invalid input that is neither a valid movie name nor ID.
      } else {
        displayAlertMessage("input-error", query); // Display an input error message.
        redirectToErrorPage(); // Redirect on invalid input.
      }
    }
  });
};

export { inputSearchListener };
