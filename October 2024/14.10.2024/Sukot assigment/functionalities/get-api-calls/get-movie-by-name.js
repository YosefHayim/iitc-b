import { homePageAllContainers, homepageTitlesContainers,searchPaginationContainer, searchResultTitle,searchResultContainer } from "../DOM/storage-elements-dom.js";
import { buildHomeMovieCard } from "../DOM/homepage-movie-cards-dom.js";
import { getData } from "./api-functions.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";

const searchMovieByName = async (inputValue, count) => {
  let defaultPage = 1;

  try {
    // Fetch search results for the movie by name
    const data = await getData(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=${count ? count : defaultPage}`);

    // if (!data) {
    //   redirectToErrorPage();
    //   return;
    // }

    console.log(data);

    // Clear existing titles and movie card containers
    homepageTitlesContainers.forEach(title => {
      if (!title.classList.contains('search-results-name')) {
        title.remove();
      }
    });

    homePageAllContainers.forEach(container => container.remove());
    
    searchResultTitle.style.textAlign = `left`
    searchResultTitle.style.display = 'flex';
    searchPaginationContainer.style.display = 'flex';
    searchResultTitle.innerHTML = `Total results: ${data.total_results}<br>page:${data.page} / ${data.total_pages}`;
    searchResultContainer.innerHTML = '';

    // Create and append movie cards for each result
    data.results.forEach(movie => {
      const movieCard = buildHomeMovieCard(movie);
      searchResultContainer.appendChild(movieCard);
    });

  } catch (error) {
    console.error('Error fetching search results:', error);
    // redirectToErrorPage();
  }
};

export { searchMovieByName };
