import { getData } from "./api-functions.js";
import { redirectToErrorPage } from "../dom/redirect-to-404-dom.js";
import { displayMovies } from "../dom/display-movies-dom.js";
import { dynamicTitlesDisplay } from "../dom/titles-dynamic-display.js";
import { isMaxPageReached } from "../dom/is-max-page-reached-dom.js";

// This function searches for movies based on the input value and displays the results.
// If a page number is provided, it uses that; otherwise, it defaults to page 1.
const searchMovieByName = async (inputValue, count = 1) => {
  try {
    // Fetch movie data from the API based on the input value and page number.
    const data = await getData(
      `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=${count}`
    );

    // If the data is falsy, redirect the user to the error page.
    if (!data) {
      redirectToErrorPage();
      return;
    }

    // Update the title container with the search results information.
    const textTitle = `${data.total_results} ${inputValue} Movies: ${data.page}/${data.total_pages} Pages`;
    dynamicTitlesDisplay("Search result title page by Name", textTitle);

    // Checking if we reached maxed page and if so we return a user notification and stop for further calls by removing the pagination buttons.
    isMaxPageReached(count, data.total_pages);

    // Display the movies in the relevant search container.
    displayMovies("Search result page id and name", data);
  } catch (error) {
    // Log any errors that occur during the API call.
    console.error("Error fetching search results:", error);
  }
};

export { searchMovieByName };
