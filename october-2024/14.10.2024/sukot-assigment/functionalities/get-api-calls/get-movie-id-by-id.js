import { apiKey } from "../global/env.js";
import { getData } from "./api-functions.js";
import { redirectToErrorPage } from "../dom/redirect-to-404-dom.js";
import { searchPaginationContainer } from "../dom/storage-elements-dom.js";
import { displayMovies } from "../dom/display-movies-dom.js";
import { dynamicTitlesDisplay } from "../dom/titles-dynamic-display.js";
import { displayAlertMessage } from "../dom/alert-message-dom.js";

// This function searches for a movie using a specific ID passed as an input value.
const searchMovieById = async (inputValue) => {
  try {
    // Fetch movie data from the API based on the provided movie ID.
    const data = await getData(
      `https://api.themoviedb.org/3/movie/${inputValue}?api_key=${apiKey}`
    );

    // If the data is falsy (e.g., movie not found), redirect the user to the error page.
    if (!data) {
      displayAlertMessage("no-movie-id-found", inputValue);
      redirectToErrorPage();
      return;
    }

    // Since this is an ID search and only one movie is expected, remove the pagination buttons.
    searchPaginationContainer.remove();

    // Display the search result in the relevant container.
    displayMovies("Search result page id and name", data);

    // Update the title container with the movie's original title.
    const textTitle = `Movie ID name ${inputValue}: ${data.original_title}`;
    dynamicTitlesDisplay("Search result title page by ID", textTitle);
  } catch (error) {
    // Log any errors that occur during the API call.
    console.error("Error fetching movie by ID:", error);
  }
};

export { searchMovieById };
