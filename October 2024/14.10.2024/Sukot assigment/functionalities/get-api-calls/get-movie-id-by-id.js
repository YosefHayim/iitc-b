import { buildHomeMovieCard } from "../DOM/homepage-movie-cards-dom.js";
import { apiKey } from "../global/env.js";
import { getData } from "./api-functions.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { searchResultContainer, homepageTitlesContainers , homePageAllContainers ,searchResultTitle, searchPaginationContainer } from "../DOM/storage-elements-dom.js"

const searchMovieById = async (inputValue) => {
  searchResultContainer.innerHTML = '';
  console.log(searchPaginationContainer);
    
  try {
    // Fetch movie data based on the movie ID
    const data = await getData(`https://api.themoviedb.org/3/movie/${inputValue}?api_key=${apiKey}`);
    
    console.log(data);
    
    if (!data) {
      redirectToErrorPage();
      return;
    }
    
    // Clear existing titles and movie card containers
    homepageTitlesContainers.forEach(title => {
      if (!title.classList.contains('search-results-name')) {
        title.remove();
      }
    });
    
    homePageAllContainers.forEach(container => container.remove());
    
    searchResultTitle.textContent = `Movie Id ${inputValue} name is: ${data.original_title}`
    // Append the movie card to the search result container
    const movieCard = buildHomeMovieCard(data);
    searchResultContainer.appendChild(movieCard);
    
  } catch (error) {
    console.error('Error fetching movie by ID:', error);
    // redirectToErrorPage();
  }
};

export { searchMovieById };
