import { apiKey } from "../global/env.js";
import { getData } from "./api-functions.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { 
  homepageTitlesContainers, 
  homePageAllContainers, 
  searchResultTitle, 
} from "../DOM/storage-elements-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";

const searchMovieById = async (inputValue) => {
  try {
    const data = await getData(`https://api.themoviedb.org/3/movie/${inputValue}?api_key=${apiKey}`);
        
    if (!data) {
      redirectToErrorPage();
      return;
    }
    
    homepageTitlesContainers.forEach(title => {if (!title.classList.contains('search-results-name')) {title.remove();}});
    homePageAllContainers.forEach(container => container.remove());
    searchResultTitle.innerHTML = `Movie name of ID ${inputValue}: <span class="input-query"> ${data.original_title}</span>`;
    displayMovies('Search result page ID + name',data)
    
  } catch (error) {
    console.error('Error fetching movie by ID:', error);
  }
};

export { searchMovieById };
