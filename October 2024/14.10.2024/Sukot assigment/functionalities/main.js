import { burgerIconActivate } from "./burger-open-mobile-menu.js";
import { currentlyInTheaters } from "./get-current-movies-in-theatres.js";
import { displayFavoriteMoviesList } from "./get-fav-movies-list.js";
import { popularMovies } from "./get-popular-movies.js";
import { topRatedMovies } from "./get-top-rated-movies.js";
import { upComingMovies } from "./get-upcoming-movies.js";
import { resetPlaceholder } from "./reset-placeholder-input.js";
import { isDayOrWeek } from "./drop-down-menu.js";
import { isIdOrisName } from "./is-movie-id-is-movie-name.js";



if (window.location.pathname.endsWith('favorite.html')) {
  displayFavoriteMoviesList(); 
}

if (window.location.pathname.endsWith("index.html")) {
  isIdOrisName
  burgerIconActivate();
  isDayOrWeek()
  currentlyInTheaters(); 
  displayFavoriteMoviesList();
  popularMovies();
  topRatedMovies();
  upComingMovies();
  resetPlaceholder();
}
