// Global Event Listeners and Functions
import { handleBurgerIconToggle } from "../Event-listeners/user-activity/global-burger-open-mobile-menu-el.js"; // Handles mobile menu toggle
import { resetPlaceholder } from "../Event-listeners/user-activity/global-placeholders-inputs-el.js"; // Resets input placeholders
import { screenLoadingAnimation } from "../dom/global-loader-dom.js"; // Controls screen loading animations
import { handleBackToTopButtonClick } from "../Event-listeners/user-activity/global-go-top-button-el.js"; // Handles back-to-top button click
import { handleGoToBottomButtonClick } from "../Event-listeners/user-activity/global-go-bottom-button-el.js"; // Handles go-to-bottom button click

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
import { handleFavoriteMoviePage } from "../Event-listeners/user-activity/favorite-page-buttons-el.js"; // Handles favorite page buttons

// Event Listeners for the "Today Must Watch" Page
import { todayMustWatchPlayButtons } from "../Event-listeners/user-activity/today-must-watch-page-play-buttons-el.js"; // Handles play buttons on 'Today Must Watch' page

// Event Listeners for the "Weekly Hits" Page
import { weeklyHitsPageButtons } from "../Event-listeners/user-activity/weekly-hits-page-buttons-el.js"; // Handles weekly hits page buttons

// Event Listeners for the Homepage
import { setupHomepagePagination } from "../Event-listeners/pagination-buttons/homepage-containers-next-prev-pagination.js"; // Sets up homepage pagination
import { handleSearchPaginationClick } from "../Event-listeners/pagination-buttons/is-next-previous-search-result-pagination.js"; // Handles search result pagination clicks
import { handleMovieSearchByIdOrName } from "../Event-listeners/user-activity/homepage-inputs-el.js"; // Handles movie search by ID or name
import { HomeMovieDataButtonClicks } from "../Event-listeners/user-activity/homepage-buttons-el.js"; // Handles homepage movie data button clicks

// Event Listener for the Feedback Page
import { formAnswer } from "../feedback-me-page/form-data-el.js"; // Handles feedback form submission

// Initialize global animations and interactions
screenLoadingAnimation(); // Displays loading animation on the screen
handleBurgerIconToggle(); // Toggles burger menu for mobile
resetPlaceholder(); // Resets placeholder values

// Page-specific logic based on URL
if (window.location.pathname.endsWith("index.html")) {
  // Initialize homepage data and interactions
  fetchCurrentlyInTheatersMovies(); // Fetch movies currently in theaters
  fetchPopularMovies(); // Fetch popular movies
  fetchTopRatedMovies(); // Fetch top-rated movies
  fetchUpcomingMovies(); // Fetch upcoming movies
  handleMovieSearchByIdOrName(); // Handle search functionality
  handleSearchPaginationClick(); // Set up pagination on search results
  handleBackToTopButtonClick(); // Set up back to top button functionality
  handleGoToBottomButtonClick(); // Set up scroll to bottom button
  setupHomepagePagination(); // Set up homepage pagination controls
  HomeMovieDataButtonClicks(); // Handle homepage movie button clicks
}

if (window.location.pathname.endsWith('favorite.html')) {
  // Initialize favorite page data and interactions
  displayFavoriteMoviesList(); // Display favorite movies list
  handleFavoriteMoviePage(); // Handle favorite page buttons
  handleGoToBottomButtonClick(); // Set up scroll to bottom button
}

if (window.location.pathname.endsWith('popular-day.html')) {
  // Initialize "Popular Today" page data and interactions
  popularMoviesOfDay(); // Fetch and display movies popular today
  handleBackToTopButtonClick(); // Set up back to top button
  handleMovieSearchByIdOrName(); // Handle search functionality
  todayMustWatchPlayButtons(); // Set up play buttons on 'Today Must Watch' page
  handleGoToBottomButtonClick(); // Set up scroll to bottom button
}

if (window.location.pathname.endsWith('popular-week.html')) {
  // Initialize "Popular This Week" page data and interactions
  popularMoviesOfWeek(); // Fetch and display movies popular this week
  handleBackToTopButtonClick(); // Set up back to top button
  handleMovieSearchByIdOrName(); // Handle search functionality
  handleGoToBottomButtonClick(); // Set up scroll to bottom button
  weeklyHitsPageButtons(); // Set up weekly hits page buttons
}

if (window.location.pathname.endsWith('movie-data.html')) {
  // Initialize single movie details page
  displaySingleMovieById(); // Display single movie details by ID
  handleBackToTopButtonClick(); // Set up back to top button
  handleMovieSearchByIdOrName(); // Handle search functionality
  handleGoToBottomButtonClick(); // Set up scroll to bottom button
}

if (window.location.pathname.endsWith('feedback-me.html')) {
  // Initialize feedback form interactions
  formAnswer(); // Handle feedback form submission
}
