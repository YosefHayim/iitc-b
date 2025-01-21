// Global Event Listeners and Functions
import { handleBurgerIconToggle } from "../event-listeners/user-activity/global-burger-open-mobile-menu-el.js"; // Handles mobile menu toggle
import { resetPlaceholder } from "../event-listeners/user-activity/global-placeholders-inputs-el.js"; // Resets input placeholders
import { screenLoadingAnimation } from "../dom/global-loader-dom.js"; // Controls screen loading animations
import { handleBackToTopButtonClick } from "../event-listeners/user-activity/global-go-top-button-el.js"; // Handles back-to-top button click
import { handleGoToBottomButtonClick } from "../event-listeners/user-activity/global-go-bottom-button-el.js"; // Handles go-to-bottom button click

// API Calls for fetching movie data
import { fetchCurrentlyInTheatersMovies } from "../get-api-calls/get-total-current-movies-in-theatres.js"; // Fetches movies currently in theaters
import { displayFavoriteMoviesList } from "../get-api-calls/get-favorite-movies-list.js"; // Displays favorite movies list
import { fetchPopularMovies } from "../get-api-calls/get-total-popular-movies.js"; // Fetches popular movies
import { fetchTopRatedMovies } from "../get-api-calls/get-total-top-rated-movies.js"; // Fetches top-rated movies
import { fetchUpcomingMovies } from "../get-api-calls/get-total-upcoming-movies.js"; // Fetches upcoming movies
import { popularMoviesOfDay } from "../get-api-calls/get-popular-movies-of-today.js"; // Fetches movies popular today
import { popularMoviesOfWeek } from "../get-api-calls/get-popular-movies-of-week.js"; // Fetches movies popular this week
import { displaySingleMovieById } from "../get-api-calls/get-single-movie-details.js"; // Displays single movie details by ID

// Event Listeners for the Favorite Page
import { handleFavoriteMoviePage } from "../event-listeners/user-activity/favorite-page-buttons-el.js"; // Handles favorite page buttons

// Event Listeners for the "Today Must Watch" Page
import {
  isNextPagePrevPageTodayMustWatch,
  todayMustWatchPlayButtons,
} from "../event-listeners/user-activity/today-must-watch-page-buttons-el.js"; // Handles play buttons on 'Today Must Watch' page

// Event Listeners for the "Weekly Hits" Page
import {
  isNextPagePrevPageWeeklyHits,
  weeklyHitsPageButtons,
} from "../event-listeners/user-activity/weekly-hits-page-buttons-el.js"; // Handles weekly hits page buttons

// Event Listeners for the Homepage
import { setupHomepagePagination } from "../event-listeners/user-activity/movies-categories-pagination.js"; // Sets up homepage pagination
import { handleMovieSearchByIdOrName } from "../event-listeners/user-activity/global-inputs-el.js"; // Handles movie search by ID or name
import { moviesCategoriesButtons } from "../event-listeners/user-activity/movies-categories-buttons-el.js"; // Handles homepage movie data button clicks

// Event Listener for the Feedback Page
import { formAnswer } from "../feedback-me-page/form-data-el.js"; // Handles feedback form submission
import { inputSearchListener } from "../event-listeners/user-activity/search-query-el.js"; // Handles homepage search queries
import { toggleThemeMode } from "../event-listeners/user-activity/toggle-dark-mode-el.js"; // Handles dark mode toggle
import {
  isNextPagePrevPageSearchPage,
  searchPageButtonsEl,
} from "../event-listeners/user-activity/search-page-buttons-el.js";
import {
  isNextPagePrevPageTrendingNow,
  trendingNowPageButtons,
} from "../event-listeners/user-activity/trending-now-page-buttons-el.js";
import {
  hotOnThebigScreenPageButtons,
  isNextPagePrevPageHotOnBigScreenPagination,
} from "../event-listeners/user-activity/hot-on-the-big-screen-page-el.js";
import {
  hotPicksButtonsPage,
  hotPicksPagination,
} from "../event-listeners/user-activity/hot-picks-buttons-el.js";
import {
  isNextPagePrevPageNBigHits,
  nextBigHitsPageButtons,
} from "../event-listeners/user-activity/next-big-hits-buttons-el.js";
import { homepageContainerButtons } from "../dom/homepage-dom.js";
import { randomMessageDisplay } from "../dom/display-random-fact-message-dom.js";
import { getMoviesGenresById } from "../get-api-calls/get-movie-genre-by-id.js";
import { genresButtonsRedirect } from "../event-listeners/user-activity/genres-welcome-page-el.js";
import {
  genresButtonsListeners,
  genresPaginationButtons,
} from "../event-listeners/user-activity/genres-pages-buttons-el.js";
import { singleMoviePageListener } from "../event-listeners/user-activity/single-movie-page-el.js";
import { getSimilarMoviesByMovieId } from "../get-api-calls/get-similar-movies.js";
import { similarMoviesContainerEl } from "../event-listeners/user-activity/similar-movies-page-el.js";

// Initialize global animations and interactions
screenLoadingAnimation(); // Displays loading animation on the screen
handleBurgerIconToggle(); // Toggles burger menu for mobile
resetPlaceholder(); // Resets placeholder values
handleMovieSearchByIdOrName(); // Set up search functionality for movie IDs or names
inputSearchListener(); // Listens for search input events
toggleThemeMode(); // Initialize dark mode toggle functionality
randomMessageDisplay(); //Display random jokes on entire pages.

// Page-specific logic based on URLs
if (window.location.pathname.endsWith("index.html")) {
  homepageContainerButtons();
}

if (window.location.pathname.endsWith("movies-categories.html")) {
  // Initialize homepage data and interactions
  fetchPopularMovies(); // Fetch popular movies
  fetchTopRatedMovies(); // Fetch top-rated movies
  fetchCurrentlyInTheatersMovies(); // Fetch movies currently in theaters
  fetchUpcomingMovies(); // Fetch upcoming movies
  handleBackToTopButtonClick(); // Set up back-to-top button functionality
  handleGoToBottomButtonClick(); // Set up scroll-to-bottom button functionality
  setupHomepagePagination(); // Set up pagination controls for the homepage
  moviesCategoriesButtons(); // Handle button clicks for movies on the homepage
}

if (window.location.pathname.endsWith("favorite.html")) {
  // Initialize favorite page data and interactions
  displayFavoriteMoviesList(); // Fetch and display favorite movies list
  handleFavoriteMoviePage(); // Handle interactions on the favorite movies page
}

if (window.location.pathname.endsWith("popular-day.html")) {
  // Initialize "Popular Today" page data and interactions
  popularMoviesOfDay(); // Fetch and display movies popular today
  handleBackToTopButtonClick(); // Set up back-to-top button functionality
  todayMustWatchPlayButtons(); // Handle play button interactions on 'Today Must Watch' page
  handleGoToBottomButtonClick(); // Set up scroll-to-bottom button functionality
  isNextPagePrevPageTodayMustWatch();
}

if (window.location.pathname.endsWith("popular-week.html")) {
  // Initialize "Popular This Week" page data and interactions
  popularMoviesOfWeek(); // Fetch and display movies popular this week
  handleBackToTopButtonClick(); // Set up back-to-top button functionality
  handleGoToBottomButtonClick(); // Set up scroll-to-bottom button functionality
  weeklyHitsPageButtons(); // Handle weekly hits page button interactions
  isNextPagePrevPageWeeklyHits();
}

if (window.location.pathname.endsWith("movie-data.html")) {
  // Initialize single movie details page
  handleBackToTopButtonClick(); // Set up back-to-top button functionality
  handleGoToBottomButtonClick(); // Set up scroll-to-bottom button functionality
  displaySingleMovieById(); // Fetch and display single movie details by ID
  singleMoviePageListener();
  getSimilarMoviesByMovieId();
  similarMoviesContainerEl();
}

if (window.location.pathname.endsWith("feedback-me.html")) {
  // Initialize feedback form interactions
  formAnswer(); // Handle feedback form submission
}

if (window.location.pathname.endsWith("search.html")) {
  handleBackToTopButtonClick(); // Set up back-to-top button functionality
  handleGoToBottomButtonClick(); // Set up scroll-to-bottom button functionality
  searchPageButtonsEl();
  isNextPagePrevPageSearchPage();
}

if (window.location.pathname.endsWith("hot-on-the-big-screen.html")) {
  fetchCurrentlyInTheatersMovies(); // Fetch movies currently in theaters
  hotOnThebigScreenPageButtons();
  handleBackToTopButtonClick(); // Set up back-to-top button functionality
  handleGoToBottomButtonClick(); // Set up scroll-to-bottom button functionality
  isNextPagePrevPageHotOnBigScreenPagination();
}

if (window.location.pathname.endsWith("next-big-hits.html")) {
  fetchUpcomingMovies(); // Fetch upcoming movies
  nextBigHitsPageButtons();
  isNextPagePrevPageNBigHits();
  handleBackToTopButtonClick(); // Set up back-to-top button functionality
  handleGoToBottomButtonClick(); // Set up scroll-to-bottom button functionality
}

if (window.location.pathname.endsWith("trending-now.html")) {
  fetchPopularMovies(); // Fetch popular movies
  trendingNowPageButtons();
  isNextPagePrevPageTrendingNow();
  handleBackToTopButtonClick(); // Set up back-to-top button functionality
  handleGoToBottomButtonClick(); // Set up scroll-to-bottom button functionality
}

if (window.location.pathname.endsWith("hot-picks.html")) {
  fetchTopRatedMovies(); // Fetch top-rated movies
  hotPicksButtonsPage();
  hotPicksPagination();
  handleBackToTopButtonClick(); // Set up back-to-top button functionality
  handleGoToBottomButtonClick(); // Set up scroll-to-bottom button functionality
}

if (window.location.pathname.endsWith("genres-page.html")) {
  getMoviesGenresById();
  genresButtonsListeners();
  genresPaginationButtons();
  handleBackToTopButtonClick(); // Set up back-to-top button functionality
  handleGoToBottomButtonClick(); // Set up scroll-to-bottom button functionality
}

if (window.location.pathname.endsWith("genres-welcome-page.html")) {
  genresButtonsRedirect();
  handleBackToTopButtonClick(); // Set up back-to-top button functionality
  handleGoToBottomButtonClick(); // Set up scroll-to-bottom button functionality
}
