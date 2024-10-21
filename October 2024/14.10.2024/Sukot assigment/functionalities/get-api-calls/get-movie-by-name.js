import { 
  homePageAllContainers, 
  homepageTitlesContainers, 
  searchPaginationContainer, 
  searchResultTitle, 
} from "../DOM/storage-elements-dom.js";

import { getData } from "./api-functions.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";

// Function to search movies by name, with inputValue being the search term and count as the page number (optional)
const searchMovieByName = async (inputValue, count = 1) => {
  // If no page number is provided, default to page 1
  // This ensures we avoid errors if a function calls searchMovieByName without passing a page number
  try {
    // Fetch the movie search results using the API with the search term and specified page
    const data = await getData(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=${count}`);

    // If no data is returned (null or undefined), redirect the user to the 404 error page
    if (!data) {
      redirectToErrorPage();
      return;
    }

    // Remove existing homepage titles unless they belong to the search results
    homepageTitlesContainers.forEach(title => {
      if (!title.classList.contains('search-results-name')) title.remove();
    });

    // Remove all containers from the homepage to prepare for search result display
    homePageAllContainers.forEach(container => container.remove());

    // Display the search result title and pagination
    searchResultTitle.style.textAlign = 'left'; // Aligns the result title to the left
    searchResultTitle.style.display = 'flex';   // Ensures the title is visible
    searchResultTitle.innerHTML = `Total results for <span class="input-query">${inputValue}</span>${data.total_results} Page: ${data.page} / ${data.total_pages}`;  // Show total results and page info

    // Show the pagination container, so users can navigate through search results
    searchPaginationContainer.style.display = 'flex';

    // Clear any previous search results before appending new ones

    // Iterate over each movie result and create a card for it, then append it to the search result container
    displayMovies('Search result page ID + name',data)

  } catch (error) {
    console.error('Error fetching search results:', error); // Log any errors during the fetching process
    // Optionally redirect to the error page if desired (currently commented out)
    // redirectToErrorPage();
  }
};

export { searchMovieByName };
