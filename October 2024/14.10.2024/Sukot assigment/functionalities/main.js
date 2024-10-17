import {resetPlaceholder} from "./functionalities/user-experience/reset-placeholder-input.js"
import {upComingMovies} from "./functionalities/api/get-calls/get-upcoming-movies.js"
import {topRatedMovies} from "./functionalities/api/get-calls/get-top-rated-movies.js"
import {popularMovies} from "./get-calls/get-popular-movies.js"
import {currentlyInTheaters} from "./get-calls/get-current-movies-in-theatres.js"
import {searchMovies} from "./get-calls/get-search-movies-input.js"


if (window.location.pathname.endsWith('favorite.html')) {
  displayFavoriteMoviesList()
}

if (window.location.pathname.endsWith("index.html")) {
  resetPlaceholder();
  upComingMovies();
  topRatedMovies();
  popularMovies();
  currentlyInTheaters();
  searchMovies()
}