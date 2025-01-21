// Storage DOM for all elements (either existing in the DOM or dynamically manipulated)

// Homepage Movie Containers and Elements
const homePageAllContainers = document.querySelectorAll(
  ".popular-of-day-container, .popular-movies-of-week-container, .fav-movies-container, .currently-movies-in-theatres-container, .upcoming-movies-container, .popular-movies-container, .top-trending-movies-container"
);
const homePageDivs = document.querySelectorAll(
  ".currently-movies-in-theatres-container, .upcoming-movies-container, .popular-movies-container, .top-trending-movies-container, .search-results-container"
);
const popularOfTheDayContainer = document.querySelector(
  ".popular-of-day-container"
);
const popularOfTheWeekContainer = document.querySelector(
  ".popular-movies-of-week-container"
);
const favMoviesContainer = document.querySelector(".fav-movies-container");
const upComingMoviesContainer = document.querySelector(
  ".upcoming-movies-container"
);
const popularMoviesContainer = document.querySelector(
  ".popular-movies-container"
);
const topRatedMoviesContainer = document.querySelector(
  ".top-trending-movies-container"
);
const theatresContainer = document.querySelector(
  ".currently-movies-in-theatres-container"
);
const searchResultContainer = document.querySelector(
  ".search-results-container"
);
const announcementBar = document.querySelector(".fun-facts-p");
const FavRemoveAllBtn = document.querySelector(".remove-all-fav");
const announcementBarDiv = document.querySelector(".announcement-bar");

// Titles and Section Containers
const homepageTitlesContainers = document.querySelectorAll(
  'div[class*="container-title"]'
);
const templateTitle = document.querySelector(".template-title");
const searchResultTitle = document.querySelector(".search-results-name");
const domTitleTxt = document.querySelector(
  ".currently-movies-in-theatres-container-title"
);

// Pagination and Page Numbers
const paginationBtns = document.querySelectorAll(".next-page, .previous-page");
const currentTheaterPage = document.querySelector(".current-theaters-page");
const upComingMoviePage = document.querySelector(
  ".current-upcoming-movies-number"
);
const latestPopularPage = document.querySelector(
  ".current-popular-movies-number"
);
const topTrendingPage = document.querySelector(".top-trending-movie-number");
const popDayMoviePage = document.querySelector(".popular-day-number");
const popWeekMoviePage = document.querySelector(".popular-week-number");
const searchPaginationContainer = document.querySelector(
  ".buttons-pagination-container-search-bar"
);
const regPaginationContainer = document.querySelector(
  ".buttons-pagination-container"
);

// Input Fields and Forms
const whiteGlassSearches = document.querySelectorAll(".white-search-bar");
const searchInputs = document.querySelectorAll(".input-search-bar");
const allInputsContainers = document.querySelectorAll("form");

// Navigation Elements
const burgerIcon = document.querySelector(".white-burger-icon");
const topNavbarMobile = document.querySelector(".top-navbar-mobile");
const navbarDesktopEl = document.querySelector(".navbar-desktop");

// Single Movie Page
const singlePageMovieData = document.querySelector(".single-movie-card");
const similarMoviesTitleContainer = document.querySelector(
  ".similar-movies-title"
);
const similarMoviesContainer = document.querySelector(
  ".similar-movies-container"
);

// Buttons and Icons
const goBackTopBtn = document.querySelector(".get-back-to-top-btn");
const goTBottomBtn = document.querySelector(".get-from-to-bottom-btn");
const toggleIconImage = document.querySelector(".toggle-mode-img");

// Miscellaneous Elements
const alertMessageContainerEl = document.querySelector(
  ".alert-message-container"
);
const dropDownMenu = document.querySelector(".dropdown-content");
const overlayContainer = document.querySelector(".overlay");
const feedbackFormPage = document.querySelector(".feedback-me-form");
const sorryMessage = document.querySelector(".sorry-message");
const aboutUsPageSection = document.querySelector(".about-us-section");
const mainContainer = document.querySelector("main");
const footer = document.querySelector("footer");

//Genre page el
const genreResultContainer = document.querySelector(
  ".genres-results-container"
);
const genreResultContainerTitle = document.querySelector(
  ".genres-results-name"
);

// genres-welcome-page el
const genresContainer = document.querySelector(".genres-container");

// Exported elements for use in other files
export {
  similarMoviesTitleContainer,
  similarMoviesContainer,
  announcementBarDiv,
  genresContainer,
  genreResultContainerTitle,
  genreResultContainer,
  FavRemoveAllBtn,
  announcementBar,
  regPaginationContainer,
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
  topTrendingPage,
};
