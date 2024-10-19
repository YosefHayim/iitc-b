import { movieCardsDivs, titlesContainers, navbarDesktop, mainDiv,aboutUsSection, feedbackFormPage } from "../dom/domEls.js";
import { createMovieCard } from "../dom/dom-movies-cards.js";
import { getData } from "../api-functions.js";

const searchMovieByName = (inputValue) => {
  getData(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`, (data) => {

    console.log(data)

    if (!data) {
      window.location.href = `error404.html`
      return
    }
    
    // Remove any existing titles and movie card containers before rendering new results
    titlesContainers.forEach(title => title.remove());
    movieCardsDivs.forEach(container => container.remove());

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

      // Insert the title after the .navbar-desktop container
      navbarDesktop.insertAdjacentElement('afterend', searchResultTitle);

      // Insert the container after the searchResultTitle
      searchResultTitle.insertAdjacentElement('afterend', searchResultContainer);
    }

    // Update the title content
    searchResultTitle.style.display = `flex`
    searchResultTitle.innerHTML = `
      <h1>Total movies for "${inputValue.charAt(0).toUpperCase() + inputValue.slice(1)}" : ${data.total_results}</h1>
    `;

    // Clear the container before appending new movie cards
    searchResultContainer.innerHTML = '';

    // Append each movie card to the searchResultContainer
    data.results.forEach(movie => {
      const movieCard = createMovieCard(movie);
      searchResultContainer.appendChild(movieCard);
    });
  });
};

export { searchMovieByName };
