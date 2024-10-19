import { burgerIconActivate } from "./global/burger-open-mobile-menu.js";
import { currentlyInTheaters } from "./get-api-calls/get-current-movies-in-theatres.js";
import { displayFavoriteMoviesList } from "./get-api-calls/get-fav-movies-list.js";
import { popularMovies } from "./get-api-calls/get-popular-movies.js";
import { topRatedMovies } from "./get-api-calls/get-top-rated-movies.js";
import { upComingMovies } from "./get-api-calls/get-upcoming-movies.js";
import { resetPlaceholder } from "./global/reset-placeholder-input.js";
import { isIdOrisName } from "./global/is-movie-id-is-movie-name.js";
import { redirectPages } from "./global/homepage-pagination-buttons.js";
import { popularMoviesOfDay } from "./get-api-calls/get-popular-movies-of-day.js";
import { popularMoviesOfWeek } from "./get-api-calls/get-popular-movies-of-week.js";
import { loaderManipulation } from "./global/loader-dom.js";
import { presentSingleMovieById } from "./get-api-calls/get-single-movie-details.js";
import { formAnswer } from "./feedback-me/form-data.js";
import { backTopClick } from "./global/go-top-button.js";

loaderManipulation()
burgerIconActivate()
resetPlaceholder();

if (window.location.pathname.endsWith("index.html")) {
  currentlyInTheaters(); 
  popularMovies();
  topRatedMovies();
  upComingMovies();
  redirectPages()
  backTopClick()
  isIdOrisName()

}

if (window.location.pathname.endsWith('favorite.html')) {
  displayFavoriteMoviesList(); 
  isIdOrisName()
}

if(window.location.pathname.endsWith('popular-day.html')) {
  popularMoviesOfDay()
  backTopClick()
  isIdOrisName()

}

if(window.location.pathname.endsWith('popular-week.html')) {
  popularMoviesOfWeek()
  backTopClick()
  isIdOrisName()

}

if(window.location.pathname.endsWith('movie-data.html')) {
  presentSingleMovieById()
  backTopClick()
  isIdOrisName()

}

if(window.location.pathname.endsWith('feedback-me.html')) {
  formAnswer()
}