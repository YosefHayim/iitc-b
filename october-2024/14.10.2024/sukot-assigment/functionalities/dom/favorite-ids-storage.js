import { displayAlertMessage } from "./alert-message-dom.js";
import { loadMoviesFromLocalStorage } from "./load-movies-from-ls-dom.js";
import { saveMoviesToLocalStorage } from "./save-movies-to-ls-dom.js";

// Load movie IDs from localStorage. If null, loadMoviesFromLocalStorage will default to an empty set.
const movieIdList = loadMoviesFromLocalStorage();

// Function to add a movie ID to the favorites list and prevent duplicates.
const isMovieAddedFav = (movieId, movieName = 'Movie') => {
  // Check if the movie is already in the favorites list.
  if (movieIdList.has(movieId)) {
    // Alert the user that the movie is already in their favorites.
    displayAlertMessage("already-in-favorite-list", movieName);
    return false;
  } else {
    // Add the movie to the favorites list and save it to localStorage.
    movieIdList.add(movieId);
    saveMoviesToLocalStorage(movieIdList);

    // Alert the user that the movie was successfully added.
    displayAlertMessage("success-added-movie-to-favorite-picks", movieName);
    return true;
  }
};

export { isMovieAddedFav, movieIdList };
