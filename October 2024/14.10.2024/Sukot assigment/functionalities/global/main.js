import { burgerIconActivate } from "../Event-listeners/user-activity/burger-open-mobile-menu-el.js";
import { currentlyInTheaters } from "../get-api-calls/get-current-movies-in-theatres.js";
import { displayFavoriteMoviesList } from "../get-api-calls/get-fav-movies-list.js";
import { popularMovies } from "../get-api-calls/get-popular-movies.js";
import { topRatedMovies } from "../get-api-calls/get-top-rated-movies.js";
import { upComingMovies } from "../get-api-calls/get-upcoming-movies.js";
import { resetPlaceholder } from "../Event-listeners/user-activity/reset-placeholder-input-el.js";
import { isIdOrisName } from "../Event-listeners/is-movie-id-is-movie-name-el.js";
import { redirectPages } from "../Event-listeners/pagination-buttons/homepage-pagination-buttons-el.js";
import { popularMoviesOfDay } from "../get-api-calls/get-popular-movies-of-day.js";
import { popularMoviesOfWeek } from "../get-api-calls/get-popular-movies-of-week.js";
import { loaderManipulation } from "../Event-listeners/loader-dom-el.js";
import { presentSingleMovieById } from "../get-api-calls/get-single-movie-details.js";
import { formAnswer } from "../feedback-me/form-data.js";
import { backTopClick } from "../Event-listeners/user-activity/go-top-button-el.js";
import { clickFavDataBtn } from "../Event-listeners/user-activity/fav-data-button-el.js";
import { clickFavShareBtn } from "../Event-listeners/user-activity/fav-share-btn-el.js";
import { clickFavRemoveBtn } from "../Event-listeners/user-activity/fav-remove-movie-el.js";
import { playBtnClick } from "../Event-listeners/user-activity/play-button-el.js";
import { clickSearchPageBtn } from "../Event-listeners/pagination-buttons/is-next-is-previous-search-page-el.js";
import { goBottomClick } from "../Event-listeners/user-activity/go-bottom-button-el.js";

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
  clickSearchPageBtn()
  goBottomClick()
}

if (window.location.pathname.endsWith('favorite.html')) {
  displayFavoriteMoviesList(); 
  isIdOrisName()
  backTopClick()
  clickFavDataBtn()
  clickFavShareBtn()
  clickFavRemoveBtn()
  goBottomClick()

}

if(window.location.pathname.endsWith('popular-day.html')) {
  popularMoviesOfDay()
  backTopClick()
  isIdOrisName()
  playBtnClick()
  goBottomClick()

}

if(window.location.pathname.endsWith('popular-week.html')) {
  popularMoviesOfWeek()
  backTopClick()
  isIdOrisName()
  goBottomClick()
}

if(window.location.pathname.endsWith('movie-data.html')) {
  presentSingleMovieById()
  backTopClick()
  isIdOrisName()
  goBottomClick()
}

if(window.location.pathname.endsWith('feedback-me.html')) {
  formAnswer()
}