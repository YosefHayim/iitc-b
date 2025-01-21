import { getData } from "./api-functions.js";
import { apiKey } from "../global/env.js";
import { redirectToErrorPage } from "../dom/redirect-to-404-dom.js";
import { displayMovies } from "../dom/display-movies-dom.js";
import { dynamicTitlesDisplay } from "../dom/titles-dynamic-display.js";
import { isMaxPageReached } from "../dom/is-max-page-reached-dom.js";

// This function retrieves popular movies from the API to display on the homepage.
// It accepts a page number parameter, defaulting to 1 if not provided.
const fetchPopularMovies = async (count = 1) => {
  try {
    // Fetch popular movies data from the API.
    const data = await getData(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${count}&api_key=${apiKey}`
    );

    // If the data is falsy, log an error and redirect to the error page.
    if (!data) {
      console.error("Something is wrong with the data:", data);
      redirectToErrorPage();
      return;
    }

    // If valid data is received, display the movies in the appropriate container.
    displayMovies("popular movies page", data);

    // Create a dynamic title to inform the user about the current page and total pages.
    const textTitle = ` ${data.page}/${data.total_pages} Pages`;
    dynamicTitlesDisplay("Popular movies title", textTitle);

    // Checking if we reached maxed page and if so we return a user notification and stop for further calls by removing the pagination buttons.
    isMaxPageReached(count, data.total_pages);
  } catch (error) {
    // Log any errors that occur during the API call and redirect to the error page.
    console.error("Error fetching popular movies:", error);
    redirectToErrorPage();
  }
};

export { fetchPopularMovies };
