import { burgerIconActivate } from "./dom/burger-open-mobile-menu.js";
import { currentlyInTheaters } from "./get-api-calls/get-current-movies-in-theatres.js";
import { displayFavoriteMoviesList } from "./get-api-calls/get-fav-movies-list.js";
import { popularMovies } from "./get-api-calls/get-popular-movies.js";
import { topRatedMovies } from "./get-api-calls/get-top-rated-movies.js";
import { upComingMovies } from "./get-api-calls/get-upcoming-movies.js";
import { resetPlaceholder } from "./dom/reset-placeholder-input.js";
import { isDayOrWeek } from "./dom/drop-down-menu.js";
import { isIdOrisName } from "./dom/is-movie-id-is-movie-name.js";
import { redirectPages } from "./dom/pagination-buttons.js";
import { popularMoviesOfDay } from "./get-api-calls/get-popular-movies-of-day.js";
import { popularMoviesOfWeek } from "./get-api-calls/get-popular-movies-of-week.js";




if (window.location.pathname.endsWith('favorite.html')) {
  displayFavoriteMoviesList(); 
}

if (window.location.pathname.endsWith("index.html")) {
  currentlyInTheaters(); 
  popularMovies();
  topRatedMovies();
  upComingMovies();
  resetPlaceholder();
  redirectPages()
}

if(window.location.pathname.endsWith('popular-day.html')) {
  popularMoviesOfDay()
}

if(window.location.pathname.endsWith('popular-week.html')) {
  popularMoviesOfWeek()
}