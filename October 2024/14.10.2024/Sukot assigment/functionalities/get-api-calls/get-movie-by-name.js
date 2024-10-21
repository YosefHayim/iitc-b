import { 
  homePageAllContainers, 
  homepageTitlesContainers, 
  searchPaginationContainer, 
  searchResultTitle, 
} from "../DOM/storage-elements-dom.js";

import { getData } from "./api-functions.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";

const searchMovieByName = async (inputValue, count = 1) => {
  try {
    const data = await getData(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=${count}`);

    if (!data) {
      redirectToErrorPage();
      return;
    }

    homepageTitlesContainers.forEach(title => {if (!title.classList.contains('search-results-name')) title.remove();});
    homePageAllContainers.forEach(container => container.remove());
    
    searchResultTitle.style.textAlign = 'left';
    searchResultTitle.style.display = 'flex';
    searchResultTitle.innerHTML = `Total results for <span class="input-query">${inputValue}</span>${data.total_results} Page: ${data.page} / ${data.total_pages}`;
    searchPaginationContainer.style.display = 'flex';
    displayMovies('Search result page ID + name',data)

  } catch (error) {
    console.error('Error fetching search results:', error); 
  }
};

export { searchMovieByName };
