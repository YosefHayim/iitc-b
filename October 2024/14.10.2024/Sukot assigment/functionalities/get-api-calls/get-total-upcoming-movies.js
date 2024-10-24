import { getData } from "./api-functions.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";
import { dynamicTitlesDisplay } from "../DOM/titles-dynamic-display.js";
import { isMaxPageReached } from "../DOM/is-max-page-reached-dom.js";

// This function retrieves upcoming movies from the API to display on the homepage.
// It accepts a page number parameter, defaulting to 1 if not provided.
const fetchUpcomingMovies = async (count = 1) => {
  try {
    // Fetch upcoming movies data from the API.
    const data = await getData(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${count}`);

    console.log(data);
    

    // If the data is falsy, redirect to the error page.
    if (!data) {
      redirectToErrorPage();
      return;
    }

    // If valid data is received, display the movies in the appropriate container.
    displayMovies('Upcoming movies page', data);

    // Create a dynamic title to inform the user about the current page and total pages.
    const textTitle = `Page: ${count} / ${data.total_pages}`;
    dynamicTitlesDisplay('Upcoming movies title', textTitle);

    // Checking if we reached maxed page and if so we return a user notification and stop for further calls by removing the pagination buttons.
    isMaxPageReached(count,data.total_pages)

  } catch (error) {
    // Log any errors that occur during the API call and redirect to the error page.
    console.error('Error fetching upcoming movies:', error);
    redirectToErrorPage();
  }
};

export { fetchUpcomingMovies };
