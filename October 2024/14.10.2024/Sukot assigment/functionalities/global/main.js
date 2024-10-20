// Global
import { handleBurgerIconToggle as burgerIconActivate } from "../Event-listeners/user-activity/global-burger-open-mobile-menu-el.js"; // Renamed from burgerIconActivate
import { handleSearchInputPlaceholderReset as resetPlaceholder } from "../Event-listeners/user-activity/global-placeholders-inputs-el.js"; // Renamed from resetPlaceholder
import { loaderManipulation } from "../dom/global-loader-dom.js";
import { handleBackToTopButtonClick as backTopClick } from "../Event-listeners/user-activity/global-go-top-button-el.js"; // Renamed from backTopClick
import { handleGoToBottomButtonClick as goBottomClick } from "../Event-listeners/user-activity/global-go-bottom-button-el.js"; // Renamed from goBottomClick

// Get API calls
import { fetchCurrentlyInTheatersMovies as currentlyInTheaters } from "../get-api-calls/get-total-current-movies-in-theatres.js"; // Renamed from currentlyInTheaters
import { displayFavoriteMoviesList } from "../get-api-calls/get-favorite-movies-list.js";
import { fetchPopularMovies as popularMovies } from "../get-api-calls/get-total-popular-movies.js"; // Renamed from popularMovies
import { fetchTopRatedMovies as topRatedMovies } from "../get-api-calls/get-total-top-rated-movies.js"; // Renamed from topRatedMovies
import { fetchUpcomingMovies as upComingMovies } from "../get-api-calls/get-total-upcoming-movies.js"; // Renamed from upComingMovies
import { popularMoviesOfDay } from "../get-api-calls/get-popular-movies-of-today.js";
import { popularMoviesOfWeek } from "../get-api-calls/get-popular-movies-of-week.js";
import { displaySingleMovieById as presentSingleMovieById } from "../get-api-calls/get-single-movie-details.js"; // Renamed from presentSingleMovieById

// Event listeners for favorite page
import { handleFavoriteMovieClick as clickFavDataBtn } from "../Event-listeners/user-activity/favorite-page-data-buttons-el.js"; // Renamed from clickFavDataBtn
import { handleFavoriteShareButtonClick as clickFavShareBtn } from "../Event-listeners/user-activity/favorite-page-share-buttons-el.js"; // Renamed from clickFavShareBtn
import { handleFavoriteRemoveButtonClick as clickFavRemoveBtn } from "../Event-listeners/user-activity/favorite-remove-icon-buttons-el.js"; // Renamed from clickFavRemoveBtn
import { handleFavoritePlayButtonClick as favPlayBtnClick } from "../Event-listeners/user-activity/favorite-page-play-buttons-el.js"; // Renamed from favPlayBtnClick

// Event listeners for today must watch
import { playBtnClick } from "../Event-listeners/user-activity/today-must-watch-page-play-buttons-el.js";

// Event listeners for homepage
import { heartBtnsClick } from "../Event-listeners/user-activity/homepage-heart-buttons-el.js";
import { handleMovieDataButtonClicks as dataBtnsClicks } from "../Event-listeners/user-activity/homepage-data-icon-button-el.js"; // Renamed from dataBtnsClicks
import { redirectPages } from "../Event-listeners/pagination-buttons/homepage-containers-next-prev-pagination.js";
import { clickSearchPageBtn } from "../Event-listeners/pagination-buttons/is-next-previous-search-result-pagination.js";
import { handleMovieSearchByIdOrName as isIdOrisName } from "../Event-listeners/homepage-is-id-is-movie-inputs-el.js"; // Renamed from isIdOrisName

// Event listener for feedback me page
import { formAnswer } from "../feedback-me-page/form-data-el.js";

loaderManipulation();
burgerIconActivate();
resetPlaceholder();

if (window.location.pathname.endsWith("index.html")) {
  currentlyInTheaters();
  popularMovies();
  topRatedMovies();
  upComingMovies();
  redirectPages();
  backTopClick();
  isIdOrisName();
  clickSearchPageBtn();
  goBottomClick();
  heartBtnsClick();
  dataBtnsClicks();
}

if (window.location.pathname.endsWith('favorite.html')) {
  displayFavoriteMoviesList();
  isIdOrisName();
  backTopClick();
  clickFavDataBtn();
  clickFavShareBtn();
  clickFavRemoveBtn();
  goBottomClick();
  favPlayBtnClick();
}

if (window.location.pathname.endsWith('popular-day.html')) {
  popularMoviesOfDay();
  backTopClick();
  isIdOrisName();
  playBtnClick();
  goBottomClick();
}

if (window.location.pathname.endsWith('popular-week.html')) {
  popularMoviesOfWeek();
  backTopClick();
  isIdOrisName();
  goBottomClick();
}

if (window.location.pathname.endsWith('movie-data.html')) {
  presentSingleMovieById();
  backTopClick();
  isIdOrisName();
  goBottomClick();
}

if (window.location.pathname.endsWith('feedback-me.html')) {
  formAnswer();
}
