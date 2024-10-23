import { homePageAllContainers, homepageTitlesContainers } from "../DOM/storage-elements-dom.js";
import { getData } from "./api-functions.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";
import { dynamicTitlesDisplay } from "../DOM/titles-dynamic-display.js";

// This function searches for movies based on the input value and displays the results.
// If a page number is provided, it uses that; otherwise, it defaults to page 1.
const searchMovieByName = async (inputValue, count = 1) => {
  try {
    // Fetch movie data from the API based on the input value and page number.
    const data = await getData(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=${count}`);

    console.log(data);

    // If the data is falsy, redirect the user to the error page.
    if (!data) {
      redirectToErrorPage();
      return;
    }

    // Remove titles that do not match the search results title.
    homepageTitlesContainers.forEach(title => {
      if (!title.classList.contains('search-results-name')) {
        title.remove();
      }
    });

    // Remove containers that do not match the search results.
    homePageAllContainers.forEach(container => {
      if (!container.classList.contains('search-results-name')) {
        container.remove();
      }
    });

    // Update the title container with the search results information.
    const textTitle = `${data.total_results} ${inputValue} Movies - Page: ${data.page}/${data.total_pages}`;
    dynamicTitlesDisplay('Search result title page by Name', textTitle);

    // Display the movies in the relevant search container.
    displayMovies('Search result page id and name', data);

  } catch (error) {
    // Log any errors that occur during the API call.
    console.error('Error fetching search results:', error);
  }
};

export { searchMovieByName };
