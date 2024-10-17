const alertMessageContainer = document.querySelector('.alert-message-container')
const dropDownMenu = document.querySelector('.dropdown-content')
const domTitleTxt = document.querySelector('.currently-movies-in-theatres-container-title');
const burgerIcon = document.querySelector('.white-burger-icon')
const favMoviesContainer = document.querySelector('.fav-movies-container')
const upComingMoviesContainer = document.querySelector('.upcoming-movies-container');
const popularMoviesContainer = document.querySelector('.popular-movies-container');
const topRatedMoviesContainer = document.querySelector('.top-trending-movies-container');
const searchResultContainer = document.querySelector('.search-results-container');
const theatresContainer = document.querySelector('.currently-movies-in-theatres-container');
const searchInputs = document.querySelectorAll('.input-search-bar');
const whiteGlassSearches = document.querySelectorAll('.white-search-bar');
const formData = document.querySelectorAll('form');
const titlesContainers = document.querySelectorAll('.trending-movies-container-title, .upcoming-movies-container-title, .popular-movies-container-title');
const popularOfTheDayDiv = document.querySelector('.popular-of-day-container')
const popularOfTheWeekDiv = document.querySelector('.popular-movies-of-week-container')
const overlayDiv = document.querySelector('.overlay')

export {alertMessageContainer,
  dropDownMenu,domTitleTxt,
  burgerIcon,favMoviesContainer,
  upComingMoviesContainer,
  popularMoviesContainer,
  theatresContainer,
  searchInputs
  ,topRatedMoviesContainer,
  searchResultContainer,
  whiteGlassSearches,
  formData,
  titlesContainers
  ,popularOfTheDayDiv
  ,popularOfTheWeekDiv,
  overlayDiv
}