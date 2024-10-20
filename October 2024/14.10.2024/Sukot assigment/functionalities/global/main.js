// Global
import { handleBurgerIconToggle } from "../Event-listeners/user-activity/global-burger-open-mobile-menu-el.js"; // Renamed from burgerIconActivate
import { resetPlaceholder } from "../Event-listeners/user-activity/global-placeholders-inputs-el.js"; // Renamed from resetPlaceholder
import { screenLoadingAnimation } from "../dom/global-loader-dom.js";
import { handleBackToTopButtonClick } from "../Event-listeners/user-activity/global-go-top-button-el.js"; // Renamed from backTopClick
import { handleGoToBottomButtonClick } from "../Event-listeners/user-activity/global-go-bottom-button-el.js"; // Renamed from goBottomClick

// Get API calls
import { fetchCurrentlyInTheatersMovies } from "../get-api-calls/get-total-current-movies-in-theatres.js"; // Renamed from currentlyInTheaters
import { displayFavoriteMoviesList } from "../get-api-calls/get-favorite-movies-list.js";
import { fetchPopularMovies } from "../get-api-calls/get-total-popular-movies.js"; // Renamed from popularMovies
import { fetchTopRatedMovies } from "../get-api-calls/get-total-top-rated-movies.js"; // Renamed from topRatedMovies
import { fetchUpcomingMovies } from "../get-api-calls/get-total-upcoming-movies.js"; // Renamed from upComingMovies
import { popularMoviesOfDay } from "../get-api-calls/get-popular-movies-of-today.js";
import { popularMoviesOfWeek } from "../get-api-calls/get-popular-movies-of-week.js";
import { displaySingleMovieById } from "../get-api-calls/get-single-movie-details.js"; // Renamed from presentSingleMovieById

// Event listeners for favorite page
import { handleFavoriteMoviePage } from "../Event-listeners/user-activity/favorite-page-buttons-el.js";

// Event listeners for today must watch
import { todayMustWatchPlayButtons } from "../Event-listeners/user-activity/today-must-watch-page-play-buttons-el.js";

// Event listeners for homepage
import { setupHomepagePagination } from "../Event-listeners/pagination-buttons/homepage-containers-next-prev-pagination.js";
import { handleSearchPaginationClick } from "../Event-listeners/pagination-buttons/is-next-previous-search-result-pagination.js";
import { handleMovieSearchByIdOrName } from "../Event-listeners/user-activity/homepage-inputs-el.js"; 
import { HomeMovieDataButtonClicks } from "../Event-listeners/user-activity/homepage-buttons-el.js";

// Event listener for feedback me page
import { formAnswer } from "../feedback-me-page/form-data-el.js";

screenLoadingAnimation();
handleBurgerIconToggle();
resetPlaceholder();

if (window.location.pathname.endsWith("index.html")) {
  fetchCurrentlyInTheatersMovies();
  fetchPopularMovies();
  fetchTopRatedMovies();
  fetchUpcomingMovies();
  handleMovieSearchByIdOrName();
  handleSearchPaginationClick();
  handleGoToBottomButtonClick();
  setupHomepagePagination();
  HomeMovieDataButtonClicks();
}

if (window.location.pathname.endsWith('favorite.html')) {
  displayFavoriteMoviesList();
  handleFavoriteMoviePage()
  handleGoToBottomButtonClick();
}

if (window.location.pathname.endsWith('popular-day.html')) {
  popularMoviesOfDay();
  handleBackToTopButtonClick();
  handleMovieSearchByIdOrName();
  todayMustWatchPlayButtons();
  handleGoToBottomButtonClick();
}

if (window.location.pathname.endsWith('popular-week.html')) {
  popularMoviesOfWeek();
  handleBackToTopButtonClick();
  handleMovieSearchByIdOrName();
  handleGoToBottomButtonClick();
}

if (window.location.pathname.endsWith('movie-data.html')) {
  displaySingleMovieById();
  handleBackToTopButtonClick();
  handleMovieSearchByIdOrName();
  handleGoToBottomButtonClick();
}

if (window.location.pathname.endsWith('feedback-me.html')) {
  formAnswer();
}
