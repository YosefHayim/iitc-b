import { toggleIconImage, mainContainer } from "./storage-elements-dom.js";
// This function is applying dark mode styles to the browser.
const applyWhiteMode = () => {
  // The reason I am holding the elements here and not calling them from the storage-El is because 
  //they are DOM and It need to be waited for the dom to load which will might cause an 
  //overload on the browser and effect the performance so I choose this way.
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

export { applyWhiteMode };
