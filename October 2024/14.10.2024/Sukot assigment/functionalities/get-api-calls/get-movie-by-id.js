import { movieCardsDivs, titlesContainers, navbarDesktop, mainDiv, aboutUsSection,feedbackFormPage } from "../dom/domEls.js";
import { createMovieCard } from "../dom/dom-movies-cards.js";
import { apiKey } from "../env.js";
import { getData } from "../api-functions.js";

const searchMovieById = (inputValue) => {
  getData(`https://api.themoviedb.org/3/movie/${inputValue}?api_key=${apiKey}`, (data) => {

    console.log(data);

    if (!data || data === null) {
      window.location.href = `error404.html`; // Handle movie not found by redirecting
      return;
    }

    // Remove any existing titles and movie card containers before rendering new results
    titlesContainers.forEach(title => {
      if (!title.classList.contains('search-results-name')) {
        title.remove();
      }
    });

    if (aboutUsSection) {
      aboutUsSection.remove()
    }

    if (feedbackFormPage) {
      feedbackFormPage.remove()
    }

    movieCardsDivs.forEach(container => container.remove());

    // Check if both searchResultTitle and searchResultContainer already exist
    let searchResultTitle = mainDiv.querySelector('.search-results-name');
    let searchResultContainer = mainDiv.querySelector('.search-results-container');

    if (!searchResultTitle && !searchResultContainer) {
      // Create and append the searchResultTitle if it doesn't exist
      searchResultTitle = document.createElement('div');
      searchResultTitle.classList.add('search-results-name');
      searchResultTitle.style.display = 'flex';

      // Create and append the searchResultContainer if it doesn't exist
      searchResultContainer = document.createElement('div');
      searchResultContainer.classList.add('search-results-container');

      // Insert the title after the .alert-message-container element
      navbarDesktop.insertAdjacentElement('afterend', searchResultTitle);

      // Insert the container after the searchResultTitle
      searchResultTitle.insertAdjacentElement('afterend', searchResultContainer);
    }

    // Update the title content
    if (!data.original_title) {
      searchResultTitle.innerHTML = `
        <h1>ID: ${inputValue}, movie name is undefined.</h1>
      `;
    } else {
      searchResultTitle.innerHTML = `
        <h1>ID: ${inputValue}, movie name: ${data.original_title}</h1>
      `;
    }

    // Clear the movie cards container before appending new movie cards
    searchResultContainer.innerHTML = '';

    // Append the movie card to the searchResultContainer
    const movieCard = createMovieCard(data);
    searchResultContainer.appendChild(movieCard);
  });
};

export { searchMovieById };
