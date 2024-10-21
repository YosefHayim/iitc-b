import { getData } from "./api-functions.js";
import { accountId } from "../global/env.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { displayAlertMessage } from "../DOM/alert-message-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";

// Function to display the user's list of favorite movies
const displayFavoriteMoviesList = async () => {
  try {
    // Fetch the user's favorite movies using the accountId
    // The API sorts the results by the time they were added in ascending order
    const data = await getData(`https://api.themoviedb.org/3/account/${accountId}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`);

    // If no data is returned or the data is empty, redirect to the 404 error page
    if (!data) {
      redirectToErrorPage();
      return;
    }

    // Loop through the list of favorite movies from the response data
    // For each movie, generate a movie card and append it to the favorite movies container
    displayMovies('Favorite movie page',data)

  } catch (error) {
    // If an error occurs during the API request, display an alert message with the error details
    displayAlertMessage('Something went wrong!', error);
    // Then redirect the user to the error page
    redirectToErrorPage();
  }
};

export { displayFavoriteMoviesList };
