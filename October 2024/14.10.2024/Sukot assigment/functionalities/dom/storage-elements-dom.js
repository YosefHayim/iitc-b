// Selectors for different movie containers and elements
const homePageAllContainers = document.querySelectorAll('.popular-of-day-container, .popular-movies-of-week-container, .fav-movies-container, .currently-movies-in-theatres-container, .upcoming-movies-container, .popular-movies-container, .top-trending-movies-container'); // Multiple movie card containers
const homePageDivs = document.querySelectorAll('.currently-movies-in-theatres-container, .upcoming-movies-container, .popular-movies-container, .top-trending-movies-container, .search-results-container'); // Containers for the homepage sections
const whiteGlassSearches = document.querySelectorAll('.white-search-bar'); // Search bars
const paginationBtns = document.querySelectorAll('.next-page, .previous-page'); // Pagination buttons
const homepageTitlesContainers = document.querySelectorAll('div[class*="container-title"]'); // Containers for section titles
const searchInputs = document.querySelectorAll('.input-search-bar'); // Input search fields
const allInputsContainers = document.querySelectorAll('form'); // All form elements

// Individual element selectors
const alertMessageContainerEl = document.querySelector('.alert-message-container'); // Alert message container
const dropDownMenu = document.querySelector('.dropdown-content'); // Dropdown menu content
const domTitleTxt = document.querySelector('.currently-movies-in-theatres-container-title'); // Title for the current movies in theatres section
const burgerIcon = document.querySelector('.white-burger-icon'); // Burger menu icon for mobile
const favMoviesContainer = document.querySelector('.fav-movies-container'); // Favorite movies section
const upComingMoviesContainer = document.querySelector('.upcoming-movies-container'); // Upcoming movies section
const popularMoviesContainer = document.querySelector('.popular-movies-container'); // Popular movies section
const topRatedMoviesContainer = document.querySelector('.top-trending-movies-container'); // Top trending movies section
const searchResultContainer = document.querySelector('.search-results-container'); // Search results section
const theatresContainer = document.querySelector('.currently-movies-in-theatres-container'); // Movies currently in theatres
const popularOfTheDayContainer = document.querySelector('.popular-of-day-container'); // Popular movies of the day section
const popularOfTheWeekContainer = document.querySelector('.popular-movies-of-week-container'); // Popular movies of the week section
const overlayContainer = document.querySelector('.overlay'); // Overlay element

// Page number elements
const currentTheaterPage = document.querySelector('.current-theaters-page'); // Current page for theatres
const upComingMoviePage = document.querySelector('.current-upcoming-movies-number'); // Current page for upcoming movies
const latestPopularPage = document.querySelector('.current-popular-movies-number'); // Current page for popular movies
const topTrendingPage = document.querySelector('.top-trending-movie-number'); // Current page for top trending movies
const popDayMoviePage = document.querySelector('.popular-day-number'); // Current page for popular day movies
const popWeekMoviePage = document.querySelector('.popular-week-number'); // Current page for popular week movies

// Other DOM elements
const templateTitle = document.querySelector('.template-title'); // Template title
const searchResultTitle = document.querySelector('.search-results-name'); // Title for search results
const footer = document.querySelector('footer'); // Footer section
const singlePageMovieData = document.querySelector('.single-movie-card'); // Single movie card
const topNavbarMobile = document.querySelector('.top-navbar-mobile'); // Mobile navigation bar
const feedbackFormPage = document.querySelector('.feedback-me-form'); // Feedback form page
const sorryMessage = document.querySelector('.sorry-message'); // Sorry message for errors or unavailable content
const mainContainer = document.querySelector('main'); // Main content section
const navbarDesktopEl = document.querySelector('.navbar-desktop'); // Desktop navigation bar
const aboutUsPageSection = document.querySelector('.about-us-section'); // About Us section
const goBackTopBtn = document.querySelector('.get-back-to-top-btn'); // Button to scroll back to the top
const goTBottomBtn = document.querySelector('.get-from-to-bottom-btn'); // Button to scroll to the bottom
const searchPaginationContainer = document.querySelector('.buttons-pagination-container-search-bar'); // Pagination buttons for search results
const toggleIconImage = document.querySelector('.toggle-mode-img')

// for turning white mode

// Exported elements for use in other files
export {
  toggleIconImage,
  homePageDivs,
  goTBottomBtn,
  searchPaginationContainer,
  goBackTopBtn,
  alertMessageContainerEl,
  popWeekMoviePage,
  templateTitle,
  searchResultTitle,
  footer,
  singlePageMovieData,
  topNavbarMobile,
  feedbackFormPage,
  sorryMessage,
  mainContainer,
  dropDownMenu,
  domTitleTxt,
  navbarDesktopEl,
  aboutUsPageSection,
  burgerIcon,
  favMoviesContainer,
  upComingMoviesContainer,
  popularMoviesContainer,
  theatresContainer,
  searchInputs,
  topRatedMoviesContainer,
  searchResultContainer,
  whiteGlassSearches,
  allInputsContainers,
  popDayMoviePage,
  homepageTitlesContainers,
  popularOfTheDayContainer,
  popularOfTheWeekContainer,
  overlayContainer,
  homePageAllContainers,
  paginationBtns,
  currentTheaterPage,
  upComingMoviePage,
  latestPopularPage,
  topTrendingPage
};
