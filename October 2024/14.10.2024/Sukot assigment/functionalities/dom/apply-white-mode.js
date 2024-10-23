import { toggleIconImage, mainContainer } from "./storage-elements-dom.js";

// Applies light mode styles to the browser.
const applyWhiteMode = () => {
  // Query elements directly here for better performance and to avoid unnecessary delays.
  const movieImgs = document.querySelectorAll('.movie-img');
  const whiteModeEls = document.querySelectorAll('.template-title-container, .search-results-container-title, .feedback-me-container-title, .about-us-container-title, .favorite-movies-container-title, .popular-movies-container-title, .trending-movies-container-title, .upcoming-movies-container-title, .currently-movies-in-theatres-container-title');
  const allH1Titles = document.querySelectorAll('h1');
  const mobileNavTop = document.querySelector('.navbar-mobile');
  const titles = document.querySelectorAll('.title')
  const footer = document.querySelector('footer');

  // Update the dark mode icon.
  toggleIconImage.src = '../images/user-activity/white-circle.svg';

  // Apply black color for the titles of the movie cards.
  titles.forEach((title) => {
    title.style.cssText = `
    color:black;
    `
  })

  // Apply background styles to footer and mobile navbar.
  footer.style.cssText = `background: black;`;
  mobileNavTop.style.cssText = `background: black;`;

  // Update styles for all movie images.
  movieImgs.forEach((img) => {
    img.style.cssText = `
    opacity: 1;
    box-shadow: 0em 0em 0.5em 0.1em black;
    `;
  });
  

  // Apply background styles to title containers.
  whiteModeEls.forEach((titleContainer) => {
    titleContainer.style.cssText = `
      background: black;
      border-style: none;
    `;
  });

  // Apply background and text color for the main container.
  mainContainer.style.cssText = `
  background: #f4f4f4;
  color: black;
  opacity: 1;
  `;

  // Set text color for all H1 elements.
  allH1Titles.forEach(title => {
    title.style.cssText = `color: black;`;
  });
};

export { applyWhiteMode };
