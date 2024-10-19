import { 
  movieCardsDivs, 
  titlesContainers, 
  navbarDesktop, 
  mainDiv, 
  aboutUsSection, 
  feedbackFormPage 
} from "../global/domEls.js";
import { createMovieCard } from "../dom/dom-movies-cards.js";
import { apiKey } from "../env.js";
import { getData } from "../api-functions.js";

const searchMovieById = (inputValue) => {
  // Fetch movie data based on the movie ID
  getData(`https://api.themoviedb.org/3/movie/${inputValue}?api_key=${apiKey}`, (data) => {
    
    console.log(data);

    if (!data || data === null) {
      window.location.href = `error404.html`; // Redirect to error page if movie is not found
      return;
    }

    // Remove any existing titles and movie card containers before rendering new results
    titlesContainers.forEach(title => {
      if (!title.classList.contains('search-results-name')) {
        title.remove();
      }
    });
    movieCardsDivs.forEach(container => container.remove());

    // Remove specific sections if they exist
    if (aboutUsSection) {
      aboutUsSection.remove();
    }

    if (feedbackFormPage) {
      feedbackFormPage.remove();
    }

    // Check if search result title and container already exist
    let searchResultTitle = mainDiv.querySelector('.search-results-name');
    let searchResultContainer = mainDiv.querySelector('.search-results-container');

    // Create new elements if they don't exist
    if (!searchResultTitle && !searchResultContainer) {
      // Create and append the search result title
      searchResultTitle = document.createElement('div');
      searchResultTitle.classList.add('search-results-name');
      searchResultTitle.style.display = 'flex';

      // Create and append the search result container
      searchResultContainer = document.createElement('div');
      searchResultContainer.classList.add('search-results-container');

      // Insert the title after the .alert-message-container element
      navbarDesktop.insertAdjacentElement('afterend', searchResultTitle);

      // Insert the container after the search result title
      searchResultTitle.insertAdjacentElement('afterend', searchResultContainer);
    }

    // if there is no title, than Update the title content based on the movie data
    if (!data.original_title) {
      searchResultTitle.innerHTML = `<h1>ID: ${inputValue}, movie name is undefined.</h1>`;

    } else {
      searchResultTitle.innerHTML = `<h1>ID: ${inputValue}, movie name: ${data.original_title}</h1>`;
    }

    // Clear the movie cards container before appending new movie cards
    searchResultTitle.style.display = `flex`
    searchResultContainer.innerHTML = '';

    // Append the movie card to the search result container
    const movieCard = createMovieCard(data);
    searchResultContainer.appendChild(movieCard);
  });
};

export { searchMovieById };
