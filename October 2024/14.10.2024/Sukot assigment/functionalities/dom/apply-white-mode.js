import { toggleIconImage } from "./storage-elements-dom.js";

// Apply dark mode styles to the browser.
const applyWhiteMode = () => {
  // Get all elements for styling
  const movieImgs = document.querySelectorAll('.movie-img');
  const whiteModeEls = document.querySelectorAll('.template-title-container, .search-results-container-title, .feedback-me-container-title, .about-us-container-title, .favorite-movies-container-title, .popular-movies-container-title, .trending-movies-container-title, .upcoming-movies-container-title, .currently-movies-in-theatres-container-title');
  const mobileNavTop = document.querySelector('.navbar-mobile');
  const footer = document.querySelector('footer');
  const mainEl = document.querySelector('main');
  const genreTitles = document.querySelectorAll('.genre-title');
  const genresButtons = document.querySelectorAll('.genre-direct-btn');
  const shortphraseGenres = document.querySelectorAll('.shortphrase-genre');
  const redirectGenresButtons = document.querySelectorAll('.button-t');
  const allImgs = document.querySelectorAll('img');
  const announcementFactsFirstP = document.querySelector('.fun-facts-p');
  const announcementFactsSecondtP = document.querySelector('body > main > div.announcement-bar > p:nth-child(1)');
  const singleMovieData = document.querySelector('.single-movie-card');

  // Change toggle icon image if it exists
  if (toggleIconImage) {
    toggleIconImage.src = '../images/user-activity/white-circle.svg';
  }

  // Style single movie data
  if (singleMovieData) {
    singleMovieData.style.cssText = `color: black;`;
  }

  // Set opacity for announcement facts
  if (announcementFactsSecondtP) {
    announcementFactsSecondtP.style.cssText = `opacity: 1;`;
  }
  if (announcementFactsFirstP) {
    announcementFactsFirstP.style.cssText = `opacity: 1;`;
  }

  // Set opacity for all images
  if (allImgs.length) {
    allImgs.forEach((img) => {
      img.style.cssText = `opacity: 1;`;
    });
  }

  // Style redirect buttons
  if (redirectGenresButtons.length) {
    redirectGenresButtons.forEach((redirectBtn) => {
      redirectBtn.style.cssText = `color: black;`;
    });
  }

  // Style genre phrases
  if (shortphraseGenres.length) {
    shortphraseGenres.forEach((phrase) => {
      phrase.style.cssText = `color: black;`;
    });
  }

  // Style genre buttons
  if (genresButtons.length) {
    genresButtons.forEach((button) => {
      button.style.cssText = `opacity: 1; color: black;`;
    });
  }

  // Style genre titles
  if (genreTitles.length) {
    genreTitles.forEach((title) => {
      title.style.cssText = `color: black;`;
    });
  }

  // Style main element
  if (mainEl) {
    mainEl.style.cssText = `background: #f4f4f4; color: black;`;
  }

  // Style footer
  if (footer) {
    footer.style.cssText = `background: black;`;
  }

  // Style mobile navbar
  if (mobileNavTop) {
    mobileNavTop.style.cssText = `background: black;`;
  }

  // Set opacity for movie images
  if (movieImgs.length) {
    movieImgs.forEach((img) => {
      img.style.cssText = `opacity: 1;`;
    });
  }

  // Style titles in white mode
  if (whiteModeEls.length) {
    whiteModeEls.forEach((titleContainer) => {
      titleContainer.style.cssText = `background: black; border-style: none;`;
    });
  }
};

export { applyWhiteMode };
