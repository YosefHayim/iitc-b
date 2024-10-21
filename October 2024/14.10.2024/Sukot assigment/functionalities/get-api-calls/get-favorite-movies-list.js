import { getData } from "./api-functions.js";
import { accountId } from "../global/env.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { displayAlertMessage } from "../DOM/alert-message-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";

const displayFavoriteMoviesList = async () => {
  try {
    const data = await getData(`https://api.themoviedb.org/3/account/${accountId}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`);

    if (!data) {
      redirectToErrorPage();
      return;
    }

    displayMovies('Favorite movie page',data)

  } catch (error) {
    displayAlertMessage('Something went wrong!', error);
    redirectToErrorPage();
  }
};

export { displayFavoriteMoviesList };
