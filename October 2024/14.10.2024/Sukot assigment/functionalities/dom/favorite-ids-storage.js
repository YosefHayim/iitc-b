import { displayAlertMessage } from "./alert-message-dom.js"
import { loadMoviesFromLocalStorage } from "./load-movies-from-ls-dom.js";
import { saveMoviesToLocalStorage } from "./save-movies-to-ls-dom.js";

// We firstly load it and if we received a null the loadMoviesFromLocalStorage already has a defualt empty 
const movieIdList = loadMoviesFromLocalStorage();

// Function to add an element and check for duplicates
const isMovieAddedFav = (movieId,movieName) => {
  console.log(movieIdList);

  if (movieIdList.has(movieId)) {
    displayAlertMessage('already-in-favorite-list', movieName);
    console.log(`Movie ID is already inside the set, can't add`, movieName);
    return false;
    
  } else {
    movieIdList.add(movieId);
    saveMoviesToLocalStorage(movieIdList);
    displayAlertMessage('success-added-movie-to-favorite-picks', movieName);
    console.log('Movie ID has been successfully added to favorite list', movieName);
    return true;
  }
};

export { isMovieAddedFav, movieIdList }
