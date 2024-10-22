import { mainContainer, navbarDesktopEl, whiteModeEls } from "./storage-elements-dom.js";

const turnWhiteWeb = () => {    
  const userButtonsEl = document.querySelectorAll('.white-share-img, .white-heart-img, .play-button-img, .remove-btn-img, .white-data-img');
  const imgMovies = document.querySelectorAll('.movie-img');
  const inputPlaceholders = document.querySelectorAll('.input-search-bar');
  
  inputPlaceholders.forEach((input) => {
    input.style.color = 'black';
    input.style.setProperty('::placeholder', 'color', 'black');
  });

  imgMovies.forEach((img) => {
    img.style.boxShadow = '0em 0em 0.5em 0.1em whitesmoke';
  });

  whiteModeEls.forEach((el) => {
    el.style.color = 'white';
  });

  userButtonsEl.forEach((btn) => {
    btn.style.background = 'black';
  });

  mainContainer.style.background = 'gray';
  navbarDesktopEl.style.background = 'dimgray';
};

const turnDarkWeb = () => {    
  const userButtonsEl = document.querySelectorAll('.white-share-img, .white-heart-img, .play-button-img, .remove-btn-img, .white-data-img');
  const imgMovies = document.querySelectorAll('.movie-img');
  const inputPlaceholders = document.querySelectorAll('.input-search-bar');
  
  inputPlaceholders.forEach((input) => {
    input.style.color = '';  // Revert to default color
    input.style.setProperty('::placeholder', 'color', ''); // Reset the placeholder color
  });

  imgMovies.forEach((img) => {
    img.style.boxShadow = '';  // Remove the white mode shadow
  });

  whiteModeEls.forEach((el) => {
    el.style.color = '';  // Revert color back to default
  });

  userButtonsEl.forEach((btn) => {
    btn.style.background = '';  // Revert background to default
  });

  mainContainer.style.background = '';  // Reset background to default
  navbarDesktopEl.style.background = '';  // Reset background to default
};

export { turnWhiteWeb, turnDarkWeb };
