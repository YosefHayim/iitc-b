import { toggleIconImage, mainContainer } from "./storage-elements-dom.js";

// Reverts the website's view to the default (dark mode) by resetting the styles changed by the toggle icon.
const returnDarkMode = () => {
  const movieImgs = document.querySelectorAll('.movie-img');
  const whiteModeEls = document.querySelectorAll('.template-title-container, .search-results-container-title, .feedback-me-container-title, .about-us-container-title, .favorite-movies-container-title, .popular-movies-container-title, .trending-movies-container-title, .upcoming-movies-container-title, .currently-movies-in-theatres-container-title');
  const allH1Titles = document.querySelectorAll('h1');
  const titles = document.querySelectorAll('.title');

  // Change the toggle icon image back to the red circle (dark mode).
  toggleIconImage.src = '../images/user-activity/red-circle.svg';

  // Reset the color of all titles.
  titles.forEach((title) => {
    title.style.cssText = `
    color: '';
    `;
  });

  // Reset the styles of all movie images.
  movieImgs.forEach((img) => {
    img.style.cssText = `
    opacity: '';
    box-shadow: '';
    `;
  });

  // Reset the styles of white mode elements.
  whiteModeEls.forEach((titleContainer) => {
    titleContainer.style.cssText = `
      background: '';
      border-style: '';
    `;
  });

  // Reset the main container's styles.
  mainContainer.style.cssText = `
  background: '';
  color: '';
  opacity: '';
  `;

  // Reset the color of all H1 elements.
  allH1Titles.forEach(title => {
    title.style.cssText = `
      color: '';
    `;
  });
};

export { returnDarkMode };
