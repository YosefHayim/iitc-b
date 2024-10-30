import { toggleIconImage } from "./storage-elements-dom.js";

// Reverts the website's view to dark mode by resetting all styles changed by white mode.
const applyDarkMode = () => {
  const whiteModeEls = document.querySelectorAll(".template-title-container, .search-results-container-title, .feedback-me-container-title, .about-us-container-title, .favorite-movies-container-title, .popular-movies-container-title, .trending-movies-container-title, .upcoming-movies-container-title, .currently-movies-in-theatres-container-title");
  const announcementFactsSecondtP = document.querySelector("body > main > div.announcement-bar > p:nth-child(1)");
  const movieImgs = document.querySelectorAll(".movie-img");
  const mobileNavTop = document.querySelector(".navbar-mobile");
  const footer = document.querySelector("footer");
  const mainEl = document.querySelector("main");
  const genreTitles = document.querySelectorAll(".genre-title");
  const genresButtons = document.querySelectorAll(".genre-direct-btn");
  const shortphraseGenres = document.querySelectorAll(".shortphrase-genre");
  const redirectGenresButtons = document.querySelectorAll(".button-t");
  const allImgs = document.querySelectorAll("img");
  const announcementFactsFirstP = document.querySelector(".fun-facts-p");
  const singleMovieData = document.querySelector(".single-movie-card");

  // Change the toggle icon image back to red circle for dark mode.
  if (toggleIconImage) {
    toggleIconImage.src = "/images/user-activity/red-circle.svg";
  }

  // Reset styles for single movie data
  if (singleMovieData) {
    singleMovieData.style.cssText = `color: '';`;
  }

  // Reset opacity for announcement facts
  if (announcementFactsSecondtP) {
    announcementFactsSecondtP.style.cssText = `opacity: '';`;
  }
  if (announcementFactsFirstP) {
    announcementFactsFirstP.style.cssText = `opacity: '';`;
  }

  // Reset opacity for all images
  if (allImgs.length) {
    allImgs.forEach((img) => {
      img.style.cssText = `opacity: '';`;
    });
  }

  // Reset color for redirect buttons
  if (redirectGenresButtons.length) {
    redirectGenresButtons.forEach((redirectBtn) => {
      redirectBtn.style.cssText = `color: '';`;
    });
  }

  // Reset color for genre phrases
  if (shortphraseGenres.length) {
    shortphraseGenres.forEach((phrase) => {
      phrase.style.cssText = `color: '';`;
    });
  }

  // Reset color and opacity for genre buttons
  if (genresButtons.length) {
    genresButtons.forEach((button) => {
      button.style.cssText = `opacity: ''; color: '';`;
    });
  }

  // Reset color for genre titles
  if (genreTitles.length) {
    genreTitles.forEach((title) => {
      title.style.cssText = `color: '';`;
    });
  }

  // Reset styles for main element
  if (mainEl) {
    mainEl.style.cssText = `background: ''; color: '';`;
  }

  // Reset background for footer
  if (footer) {
    footer.style.cssText = `background: '';`;
  }

  // Reset background for mobile navbar
  if (mobileNavTop) {
    mobileNavTop.style.cssText = `background: '';`;
  }

  // Reset opacity for movie images
  if (movieImgs.length) {
    movieImgs.forEach((img) => {
      img.style.cssText = `opacity: '';`;
    });
  }

  // Reset background and border style for white mode elements
  if (whiteModeEls.length) {
    whiteModeEls.forEach((titleContainer) => {
      titleContainer.style.cssText = `background: ''; border-style: '';`;
    });
  }
};

export { applyDarkMode };
