import { toggleIconImage } from "./storage-elements-dom.js";

// Reverts the website's view to the default (dark mode) by resetting the styles changed by the toggle icon.
const applyDarkMode = () => {
  const movieImgs = document.querySelectorAll('.movie-img');
  const whiteModeEls = document.querySelectorAll('.template-title-container, .search-results-container-title, .feedback-me-container-title, .about-us-container-title, .favorite-movies-container-title, .popular-movies-container-title, .trending-movies-container-title, .upcoming-movies-container-title, .currently-movies-in-theatres-container-title');
  const mainEl = document.querySelector('main')
  const mobileNavTop = document.querySelector('.navbar-mobile')
  const footer = document.querySelector('footer')

  // Change the toggle icon image back to the red circle (dark mode).
  toggleIconImage.src = '../images/user-activity/red-circle.svg';


  mainEl.style.cssText = `
  background: '';
  color:'';
  `

  footer.style.cssText = `
  background:'';
  `

  mobileNavTop.style.cssText = `
  background:'';
  `

  movieImgs.forEach((img) => {
    img.style.cssText = `
    opacity:'';
    `;
  });

  whiteModeEls.forEach((titleContainer) => {
    titleContainer.style.cssText = `
      background:'';
      border-style:'';
    `;
  });
};

export { applyDarkMode };
