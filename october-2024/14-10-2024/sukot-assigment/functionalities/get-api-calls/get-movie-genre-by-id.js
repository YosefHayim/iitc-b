import { displayAlertMessage } from "../dom/alert-message-dom.js";
import { displayMovies } from "../dom/display-movies-dom.js";
import { isMaxPageReached } from "../dom/is-max-page-reached-dom.js";
import { redirectToErrorPage } from "../dom/redirect-to-404-dom.js";
import { genresIdsStorage } from "../dom/storage-genres-ids.js";
import { dynamicTitlesDisplay } from "../dom/titles-dynamic-display.js";
import { getData } from "./api-functions.js";
// Provide a default Id just in case something goes wrong.
const getMoviesGenresById = async (genreId = 14, count = 1) => {
  const urlParams = new URLSearchParams(window.location.search);
  const genreUrlId = Number(urlParams.get("genreId")); // Get genreId from URL if available

  try {
    // Fetch movies by genre from API with specified page count
    const data = await getData(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${
        genreUrlId || genreId
      }&page=${count}`
    );

    if (!data) {
      displayAlertMessage("no-genre-movies-found", genreUrlId); // Notify user if no movies are found
      redirectToErrorPage(); // Redirect to error page
      return;
    }

    displayMovies("search movies by genre", data); // Display movies based on genre

    const genreName = genresIdsStorage(genreUrlId).name; // Retrieve genre name from local storage

    // Update title with current genre and page info
    const textTitle = `${genreName} Movies: ${count}/${data.total_pages} Pages`;
    dynamicTitlesDisplay("genres movies title display", textTitle);

    isMaxPageReached(count, data.total_pages); // Check if the last page has been reached
  } catch (error) {
    console.error("An error occurred during the API call", error); // Log any API errors
  }
};

export { getMoviesGenresById };
