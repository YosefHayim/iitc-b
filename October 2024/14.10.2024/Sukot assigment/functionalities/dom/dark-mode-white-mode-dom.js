import { toggleIconImage, mainContainer, footer } from "../DOM/storage-elements-dom.js";

const applyDarkModeStyles = () => {
  const movieImgs = document.querySelectorAll('.movie-img');
  const whiteModeEls = document.querySelectorAll('.template-title-container, .search-results-container-title, .feedback-me-container-title, .about-us-container-title, .favorite-movies-container-title, .popular-movies-container-title, .trending-movies-container-title, .upcoming-movies-container-title, .currently-movies-in-theatres-container-title');
  const allH1Titles = document.querySelectorAll('h1');
  
  toggleIconImage.src = '../images/user-activity/white-circle.svg';

  movieImgs.forEach((img) => {
    img.style.cssText = `
    opacity: 1;
    box-shadow: 0em 0em 0.5em 0.1em black;
    `;
  });

  whiteModeEls.forEach((titleContainer) => {
    titleContainer.style.cssText = `
      background: black;
      border-style: none;
    `;
  });

  mainContainer.style.cssText = `
  background: #f4f4f4;
  color: black;
  opacity: 1;
  `

  allH1Titles.forEach(title => {
    title.style.cssText = `
      color: black;
    `;
  });
};

const removeDarkModeStyles = () => {
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

export { applyDarkModeStyles, removeDarkModeStyles };
