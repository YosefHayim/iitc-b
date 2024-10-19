// Selectors for different movie containers and elements
const movieCardsDivs = document.querySelectorAll('.popular-of-day-container, .popular-movies-of-week-container, .fav-movies-container, .currently-movies-in-theatres-container, .upcoming-movies-container, .popular-movies-container, .top-trending-movies-container');
const formData = document.querySelectorAll('form');
const whiteGlassSearches = document.querySelectorAll('.white-search-bar');
const paginationBtns = document.querySelectorAll('.next-page, .previous-page');
const titlesContainers = document.querySelectorAll('div[class*="container-title"]');
const searchInputs = document.querySelectorAll('.input-search-bar');

// Individual element selectors
const alertMessageContainer = document.querySelector('.alert-message-container');
const dropDownMenu = document.querySelector('.dropdown-content');
const domTitleTxt = document.querySelector('.currently-movies-in-theatres-container-title');
const burgerIcon = document.querySelector('.white-burger-icon');
const favMoviesContainer = document.querySelector('.fav-movies-container');
const upComingMoviesContainer = document.querySelector('.upcoming-movies-container');
const popularMoviesContainer = document.querySelector('.popular-movies-container');
const topRatedMoviesContainer = document.querySelector('.top-trending-movies-container');
const searchResultContainer = document.querySelector('.search-results-container');
const theatresContainer = document.querySelector('.currently-movies-in-theatres-container');
const popularOfTheDayDiv = document.querySelector('.popular-of-day-container');
const popularOfTheWeekDiv = document.querySelector('.popular-movies-of-week-container');
const overlayDiv = document.querySelector('.overlay');

// Page number elements
const currentTheaterPage = document.querySelector('.current-theaters-page');
const upComingMoviePage = document.querySelector('.current-upcoming-movies-number');
const latestPopularPage = document.querySelector('.current-popular-movies-number');
const topTrendingPage = document.querySelector('.top-trending-movie-number');
const popDayMoviePage = document.querySelector('.popular-day-number');
const popWeekMoviePage = document.querySelector('.popular-week-number');

// Other DOM elements
const templateTitle = document.querySelector('.template-title');
const searchResultTitle = document.querySelector('.search-results-name');
const footer = document.querySelector('footer');
const singleMovieCard = document.querySelector('.single-movie-card');
const mobileMenu = document.querySelector('.top-navbar-mobile');
const feedbackFormPage = document.querySelector('.feedback-me-form');
const sorryMessage = document.querySelector('.sorry-message');
const mainDiv = document.querySelector('main');
const navbarDesktop = document.querySelector('.navbar-desktop');
const aboutUsSection = document.querySelector('.about-us-section');
const goBackTopBtn = document.querySelector('.get-back-to-top-btn')

// Exported elements
export {
  goBackTopBtn,
  alertMessageContainer,
  popWeekMoviePage,
  templateTitle,
  searchResultTitle,
  footer,
  singleMovieCard,
  mobileMenu,
  feedbackFormPage,
  sorryMessage,
  mainDiv,
  dropDownMenu,
  domTitleTxt,
  navbarDesktop,
  aboutUsSection,
  burgerIcon,
  favMoviesContainer,
  upComingMoviesContainer,
  popularMoviesContainer,
  theatresContainer,
  searchInputs,
  topRatedMoviesContainer,
  searchResultContainer,
  whiteGlassSearches,
  formData,
  popDayMoviePage,
  titlesContainers,
  popularOfTheDayDiv,
  popularOfTheWeekDiv,
  overlayDiv,
  movieCardsDivs,
  paginationBtns,
  currentTheaterPage,
  upComingMoviePage,
  latestPopularPage,
  topTrendingPage
};
