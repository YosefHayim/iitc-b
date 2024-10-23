import { apiKey } from "../global/env.js";
import { getData } from "./api-functions.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";
import { dynamicTitlesDisplay } from "../DOM/titles-dynamic-display.js";

// This function retrieves popular movies of the week for the "Weekly Hits" page.
// It accepts a page count parameter for pagination, defaulting to 1 if not provided.
const popularMoviesOfWeek = async (count = 1) => {
  try {
    // Fetch popular movies data from the API for the specified page.
    const data = await getData(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=${count}&api_key=${apiKey}`);

    // If the data is falsy, redirect the user to the error page.
    if (!data) {
      redirectToErrorPage();
      return;
    }

    // If valid data is received, display the movies in the appropriate container.
    displayMovies('Weekly hits popular movies page', data);

    // Update the title with the total number of results and current page information.
    let textTitle = `${data.total_results} Weekly hits movies: ${data.page}/${data.total_pages}`;
    dynamicTitlesDisplay('Weekly hits page title', textTitle);

  } catch (error) {
    // Log any errors that occur during the fetch operation and redirect to the error page.
    console.error('Error fetching popular movies of the week:', error);
    redirectToErrorPage();
  }
};

export { popularMoviesOfWeek };
