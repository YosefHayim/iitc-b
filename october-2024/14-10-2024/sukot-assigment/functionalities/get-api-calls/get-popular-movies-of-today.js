import { apiKey } from "../global/env.js";
import { getData } from "./api-functions.js";
import { redirectToErrorPage } from "../dom/redirect-to-404-dom.js";
import { displayMovies } from "../dom/display-movies-dom.js";
import { dynamicTitlesDisplay } from "../dom/titles-dynamic-display.js";
import { isMaxPageReached } from "../dom/is-max-page-reached-dom.js";

// This function retrieves popular movies of the day for the "Today's Must Watch" page.
// It accepts a page count parameter for pagination, defaulting to 1 if not provided.
const popularMoviesOfDay = async (count = 1) => {
  try {
    // Fetch popular movies data from the API for the specified page.
    const data = await getData(
      `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${count}&api_key=${apiKey}`
    );

    // If the data is falsy, log the error and redirect the user to the error page.
    if (!data) {
      console.error("Something is wrong with the data:", data);
      redirectToErrorPage();
      return;
    }

    // If valid data is received, display the movies in the appropriate container.
    displayMovies("Todays must watch popular movies page", data);

    // Update the title with the total number of results and current page information.
    let textTitle = `Todays must watch movies: ${data.page}/${data.total_pages} Pages`;
    dynamicTitlesDisplay("Todays must watch page title", textTitle);

    // Checking if we reached maxed page and if so we return a user notification and stop for further calls by removing the pagination buttons.
    isMaxPageReached(count, data.total_pages);
  } catch (error) {
    // Log any errors that occur during the fetch operation and redirect to the error page.
    console.error("Error fetching popular movies of the day:", error);
    redirectToErrorPage();
  }
};

export { popularMoviesOfDay };
