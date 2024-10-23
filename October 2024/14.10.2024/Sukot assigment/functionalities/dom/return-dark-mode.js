import { toggleIconImage, mainContainer } from "./storage-elements-dom.js";
// This function is returning to the default view of the website by setting none to each of the selected elements that was manipulated by the toggleIcon.
const returnDarkMode = () => {
  const movieImgs = document.querySelectorAll('.movie-img');
  const whiteModeEls = document.querySelectorAll('.template-title-container, .search-results-container-title, .feedback-me-container-title, .about-us-container-title, .favorite-movies-container-title, .popular-movies-container-title, .trending-movies-container-title, .upcoming-movies-container-title, .currently-movies-in-theatres-container-title');
  const allH1Titles = document.querySelectorAll('h1');

  toggleIconImage.src = '../images/user-activity/red-circle.svg';

  movieImgs.forEach((img) => {
    img.style.cssText = `
    opacity: '';
    box-shadow:'';
    `;
  });

  whiteModeEls.forEach((titleContainer) => {
    titleContainer.style.cssText = `
      background: '';
      border-style: '';
    `;
  });

  mainContainer.style.cssText = `
  background: '';
  color: '';
  opacity: '';
  `

  allH1Titles.forEach(title => {
    title.style.cssText = `
      color: '';
    `;
  });
};

export {returnDarkMode}