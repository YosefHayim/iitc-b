import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { redirectToErrorPage } from "../../DOM/redirect-to-404-dom.js";
import { searchMovieByName } from "../../get-api-calls/get-movie-by-name.js";
import { searchMovieById } from "../../get-api-calls/get-movie-id-by-id.js";

const homepageSearchListener = () => {
  window.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('query');
  
    if (query) {
      // Check if it's a valid movie name (letters and spaces only)
      if (/^[a-zA-Z\s]+$/.test(query)) {
        try {
          await searchMovieByName(query);  // Handle asynchronously
        } catch (error) {
          displayAlertMessage('search-error', query);
          redirectToErrorPage();  // Redirect if search fails
        }
  
      // Check if it's a valid movie ID (numbers only)
      } else if (/^[0-9]+$/.test(query)) {
        try {
          await searchMovieById(query);  // Handle asynchronously
        } catch (error) {
          displayAlertMessage('search-error', query);
          redirectToErrorPage();  // Redirect if search fails
        }
  
      // Invalid input
      } else {
        displayAlertMessage('input-error', query);
        redirectToErrorPage();  // Redirect on invalid input
      }
    }
  });
}
export {homepageSearchListener}