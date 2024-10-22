import { toggleIconImage, mainContainer, footer } from "../DOM/storage-elements-dom.js";

const applyDarkModeStyles = () => {
  const movieImgs = document.querySelectorAll('.movie-img');
  const whiteModeEls = document.querySelectorAll('.template-title-container, .search-results-container-title, .feedback-me-container-title, .about-us-container-title, .favorite-movies-container-title, .popular-movies-container-title, .trending-movies-container-title, .upcoming-movies-container-title, .currently-movies-in-theatres-container-title');
  const userButtonsEl = document.querySelectorAll('.white-share-img, .white-heart-img, .play-button-img, .remove-btn-img, .white-data-img');
  const allH1Titles = document.querySelectorAll('h1');
  const footerBg = document.querySelector('footer')
  
  toggleIconImage.src = '../images/user-activity/white-circle.svg';

  footerBg.style.background = `gray`

  movieImgs.forEach((img) => {
    img.style.cssText = `
      box-shadow: 0em 0em 0.5em 0.1em white;
    `;
  });

  whiteModeEls.forEach((titleContainer) => {
    titleContainer.style.cssText = `
      background: black;
      border-style: none;
    `;
  });

  mainContainer.style.background = 'gray';

  allH1Titles.forEach(title => {
    title.style.cssText = `
      color: black;
    `;
  });

  userButtonsEl.forEach((btn) => {
    btn.style.cssText = `
      background: black;
    `;
  });
};

const removeDarkModeStyles = () => {
  const logos = document.querySelectorAll('.logo-icon');
  const movieImgs = document.querySelectorAll('.movie-img');
  const whiteModeEls = document.querySelectorAll('.template-title-container, .search-results-container-title, .feedback-me-container-title, .about-us-container-title, .favorite-movies-container-title, .popular-movies-container-title, .trending-movies-container-title, .upcoming-movies-container-title, .currently-movies-in-theatres-container-title');
  const userButtonsEl = document.querySelectorAll('.white-share-img, .white-heart-img, .play-button-img, .remove-btn-img, .white-data-img');
  const allH1Titles = document.querySelectorAll('h1');
  const footerBg = document.querySelector('footer')

  toggleIconImage.src = '../images/user-activity/red-circle.svg';

  footerBg.style.background = ``


  logos.forEach((logo) => {
    logo.style.background = '';
    logo.style.borderRadius = '';
  });

  movieImgs.forEach((img) => {
    img.style.boxShadow = '';
  });

  whiteModeEls.forEach((titleContainer) => {
    titleContainer.style.background = '';
    titleContainer.style.borderStyle = '';
  });

  mainContainer.style.background = '';

  allH1Titles.forEach(title => {
    title.style.color = '';
  });

  userButtonsEl.forEach((btn) => {
    btn.style.background = '';
  });
};

export { applyDarkModeStyles, removeDarkModeStyles };
