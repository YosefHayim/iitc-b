import { apiKey } from "../global/env.js";
import { getData } from "./api-functions.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { 
  homepageTitlesContainers, 
  homePageAllContainers, 
  searchResultTitle, 
} from "../DOM/storage-elements-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";

// Function to search a movie by its ID
const searchMovieById = async (inputValue) => {
  
  try {
    // Fetch movie data based on the provided movie ID
    const data = await getData(`https://api.themoviedb.org/3/movie/${inputValue}?api_key=${apiKey}`);
        
    // If no data is returned, redirect the user to the 404 error page
    if (!data) {
      redirectToErrorPage();
      return;
    }
    
    // Clear any homepage titles that are not related to search results
    homepageTitlesContainers.forEach(title => {
      if (!title.classList.contains('search-results-name')) {
        title.remove();
      }
    });
    
    // Remove all containers on the homepage to make room for the movie data
    homePageAllContainers.forEach(container => container.remove());

    // Update the search result title with the movie's name and ID
    searchResultTitle.innerHTML = `Movie name of ID ${inputValue}: <span class="input-query"> ${data.original_title}</span>`;
    
    // Generate a movie card using the fetched data and append it to the search result container
    displayMovies('Search result page ID + name',data)
    
  } catch (error) {
    // Log any errors during the API request and handle potential redirection to the error page
    console.error('Error fetching movie by ID:', error);
    // redirectToErrorPage(); // Optionally redirect to the error page
  }
};

export { searchMovieById };
