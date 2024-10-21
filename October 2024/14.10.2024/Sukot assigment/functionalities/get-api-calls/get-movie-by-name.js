import { homePageAllContainers, homepageTitlesContainers, navbarDesktopEl, mainContainer, searchPaginationContainer } from "../DOM/storage-elements-dom.js";
import { buildHomeMovieCard } from "../DOM/homepage-movie-cards-dom.js";
import { getData } from "./api-functions.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";

const searchMovieByName = async (inputValue, count) => {
  let defaultPage = 1;

  try {
    // Fetch search results for the movie by name
    const data = await getData(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=${count ? count : defaultPage}`);

    if (!data) {
      redirectToErrorPage();
      return;
    }

    console.log(data);

    // Clear existing titles and movie card containers
    homepageTitlesContainers.forEach(title => {
      if (!title.classList.contains('search-results-name')) {
        title.remove();
      }
    });
    homePageAllContainers.forEach(container => container.remove());

    // Check if search results title and container already exist
    let searchResultTitle = mainContainer.querySelector('.search-results-name');
    let searchResultContainer = mainContainer.querySelector('.search-results-container');

    // Create search results title and container if they don't exist
    if (!searchResultTitle && !searchResultContainer) {
      searchResultTitle = document.createElement('div');
      searchResultTitle.classList.add('search-results-name');
      searchResultTitle.style.display = 'flex';

      searchResultContainer = document.createElement('div');
      searchResultContainer.classList.add('search-results-container');

      // Insert the title and container into the DOM
      navbarDesktopEl.insertAdjacentElement('afterend', searchResultTitle);
      searchResultTitle.insertAdjacentElement('afterend', searchResultContainer);
    }

    // Update the search result title with the total results and movie name
    searchResultTitle.style.display = 'flex';
    searchResultTitle.innerHTML = `<h1>Total results: ${data.total_results}<br> page:<br>${data.page} / ${data.total_pages}</h1>`;

    // Create and append movie cards for each result
    searchPaginationContainer.style.display = 'flex';
    searchResultContainer.innerHTML = '';
    data.results.forEach(movie => {
      const movieCard = buildHomeMovieCard(movie);
      searchResultContainer.appendChild(movieCard);
    });

  } catch (error) {
    console.error('Error fetching search results:', error);
    redirectToErrorPage();
  }
};

export { searchMovieByName };
