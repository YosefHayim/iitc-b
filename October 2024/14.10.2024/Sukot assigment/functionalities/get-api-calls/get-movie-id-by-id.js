import { apiKey } from "../global/env.js";
import { getData } from "./api-functions.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { homepageTitlesContainers, homePageAllContainers, searchPaginationContainer } from "../DOM/storage-elements-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";
import { dynamicTitlesDisplay } from "../DOM/titles-dynamic-display.js";

// This function searches for a movie using a specific ID passed as an input value.
const searchMovieById = async (inputValue) => {
  try {
    // Fetch movie data from the API based on the provided movie ID.
    const data = await getData(`https://api.themoviedb.org/3/movie/${inputValue}?api_key=${apiKey}`);
    console.log(data);

    // If the data is falsy (e.g., movie not found), redirect the user to the error page.
    if (!data) {
      redirectToErrorPage();
      return;
    }    

    // Remove titles and containers that are not related to the search result.
    homepageTitlesContainers.forEach(title => {
      if (!title.classList.contains('search-results-name')) {
        title.remove();
      }
    });
    
    // Remove all movie card containers.
    homePageAllContainers.forEach(container => container.remove());

    // Since this is an ID search and only one movie is expected, remove the pagination buttons.
    searchPaginationContainer.remove();
    
    // Display the search result in the relevant container.
    displayMovies('Search result page id and name', data);
    
    // Update the title container with the movie's original title.
    const textTitle = `Movie ID name ${inputValue}: ${data.original_title}`;
    dynamicTitlesDisplay('Search result title page by ID', textTitle);
    
  } catch (error) {
    // Log any errors that occur during the API call.
    console.error('Error fetching movie by ID:', error);
  }
};

export { searchMovieById };
