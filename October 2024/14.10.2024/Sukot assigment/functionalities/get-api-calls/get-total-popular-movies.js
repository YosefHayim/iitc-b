import { getData } from "./api-functions.js";
import { apiKey } from "../global/env.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";
import { dynamicTitlesDisplay } from "../DOM/titles-dynamic-display.js";

// This function retrieves popular movies from the API to display on the homepage.
// It accepts a page number parameter, defaulting to 1 if not provided.
const fetchPopularMovies = async (count = 1) => {
  try {
    // Fetch popular movies data from the API.
    const data = await getData(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${count}&api_key=${apiKey}`);

    // If the data is falsy, log an error and redirect to the error page.
    if (!data) {
      console.error('Something is wrong with the data:', data);
      redirectToErrorPage();
      return;
    }

    // If valid data is received, display the movies in the appropriate container.
    displayMovies('popular movies page', data);

    // Create a dynamic title to inform the user about the current page and total pages.
    const textTitle = `Page: ${count} / ${data.total_pages}`;
    dynamicTitlesDisplay('Popular movies title', textTitle);

  } catch (error) {
    // Log any errors that occur during the API call and redirect to the error page.
    console.error('Error fetching popular movies:', error);
    redirectToErrorPage();
  }
};

export { fetchPopularMovies };
