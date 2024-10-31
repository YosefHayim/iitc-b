import { displayAlertMessage } from "../../dom/alert-message-dom.js";
import { removeFavMovie } from "../../post-api-calls/post-remove-movie-from-favorite-list.js";
import { reloadThisPage } from "../../dom/reload-current-page-dom.js";

// This function is responsible to delete all the movies on the favorite movie page.
const removeAllFavMovies = () => {
  // We get the localStorage array
  let currentFavArray = localStorage.getItem("favoriteMovies");

  // if the array is true we parsa it to array else we receive empty array
  currentFavArray = currentFavArray ? JSON.parse(currentFavArray) : [];

  // If array length is more than 0 we delete each movie, removing the local storage and updating the user.
  if (currentFavArray.length > 0) {
    currentFavArray.forEach((movieId) => {
      removeFavMovie(movieId);
    });
    localStorage.removeItem("favoriteMovies");
    reloadThisPage();
    displayAlertMessage("success-removed-all-movies");

    // Else the length is 0 we inform the user we can't remove empty list.
  } else {
    let name = "user";
    displayAlertMessage("cannot-remove-empty-favorites", name);
  }
};

export { removeAllFavMovies };
