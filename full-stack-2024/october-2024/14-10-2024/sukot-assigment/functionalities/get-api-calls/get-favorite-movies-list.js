import { getData } from "./api-functions.js";
import { accountId } from "../global/env.js";
import { redirectToErrorPage } from "../dom/redirect-to-404-dom.js";
import { displayAlertMessage } from "../dom/alert-message-dom.js";
import { displayMovies } from "../dom/display-movies-dom.js";

// This function asynchronously fetches and displays the user's favorite movies from the API.
const displayFavoriteMoviesList = async () => {
  try {
    // Fetch the favorite movies data using the account ID.
    const data = await getData(
      `https://api.themoviedb.org/3/account/${accountId}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`
    );

    // If the data is falsy (e.g., not found or an error occurred), redirect the user to the error page.
    if (!data) {
      redirectToErrorPage();
      return;
    }

    // If valid data is received, display the favorite movies on the page.
    displayMovies("Favorite movie page", data);
  } catch (error) {
    // If an error occurs during the fetching process, display an alert and redirect to the error page.
    displayAlertMessage("Something went wrong!", error);
    redirectToErrorPage();
  }
};

export { displayFavoriteMoviesList };
