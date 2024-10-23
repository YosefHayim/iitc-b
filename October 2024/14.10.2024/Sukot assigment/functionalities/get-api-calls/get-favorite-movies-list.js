import { getData } from "./api-functions.js";
import { accountId } from "../global/env.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { displayAlertMessage } from "../DOM/alert-message-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";
// This function is asynchronous were receiving the json from json data from the url.
const displayFavoriteMoviesList = async () => {
  try {
    const data = await getData(`https://api.themoviedb.org/3/account/${accountId}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`);

    // If the data is falsy we redirect the user to the error page.
    if (!data) {
      redirectToErrorPage();
      return;
    }
    // Else this we receive valid data we display the data on the favorite movie page
    displayMovies('Favorite movie page',data)

    // Else an error was cough with fetching the json data we alert the user and redirect to error page.
  } catch (error) {
    displayAlertMessage('Something went wrong!', error);
    redirectToErrorPage();
  }
};

export { displayFavoriteMoviesList };
