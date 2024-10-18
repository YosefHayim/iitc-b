import { burgerIconActivate } from "./dom/burger-open-mobile-menu.js";
import { currentlyInTheaters } from "./get-api-calls/get-current-movies-in-theatres.js";
import { displayFavoriteMoviesList } from "./get-api-calls/get-fav-movies-list.js";
import { popularMovies } from "./get-api-calls/get-popular-movies.js";
import { topRatedMovies } from "./get-api-calls/get-top-rated-movies.js";
import { upComingMovies } from "./get-api-calls/get-upcoming-movies.js";
import { resetPlaceholder } from "./dom/reset-placeholder-input.js";
import { isIdOrisName } from "./dom/is-movie-id-is-movie-name.js";
import { redirectPages } from "./dom/pagination-buttons.js";
import { popularMoviesOfDay } from "./get-api-calls/get-popular-movies-of-day.js";
import { popularMoviesOfWeek } from "./get-api-calls/get-popular-movies-of-week.js";
import { loader } from "./dom/loader-dom.js";
import { presentSingleMovieById } from "./get-api-calls/movie-page-dom.js";
import { formAnswer } from "./dom/form-data.js";

loader()
burgerIconActivate()
resetPlaceholder();


if (window.location.pathname.endsWith("index.html")) {
  currentlyInTheaters(); 
  popularMovies();
  topRatedMovies();
  upComingMovies();
  redirectPages()
  isIdOrisName()
}

if (window.location.pathname.endsWith('favorite.html')) {
  displayFavoriteMoviesList(); 
}

if(window.location.pathname.endsWith('popular-day.html')) {
  popularMoviesOfDay()
}

if(window.location.pathname.endsWith('popular-week.html')) {
  popularMoviesOfWeek()
}

if(window.location.pathname.endsWith('movie-data.html')) {
  presentSingleMovieById()
}

if(window.location.pathname.endsWith('feedback-me.html')) {
  formAnswer()
}