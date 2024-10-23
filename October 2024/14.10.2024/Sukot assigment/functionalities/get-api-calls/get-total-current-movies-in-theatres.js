import { getData } from "./api-functions.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";
import { dynamicTitlesDisplay } from "../DOM/titles-dynamic-display.js";

// This function retrieves currently playing movies in theaters and displays them on the homepage.
// It accepts a page number parameter, defaulting to 1 if not provided.
const fetchCurrentlyInTheatersMovies = async (count = 1) => {
  try {
    // Fetch data for currently playing movies from the API.
    const data = await getData(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${count}`);

    // If the data is falsy, log an error and redirect to the error page.
    if (!data) {
      console.error('Something is wrong with the data:', data);
      redirectToErrorPage();
      return;
    }

    // If valid data is received, display the movies in the appropriate container.
    displayMovies('Currently movies in theatres page', data);
    
    // Create a dynamic title to inform the user about the current page and total pages.
    const textTitle = `Page: ${count} / ${data.total_pages}`;
    dynamicTitlesDisplay('Currently In Theatres title', textTitle);
    
  } catch (error) {
    // Log any errors that occur during the API call and redirect to the error page.
    console.error('Error fetching currently in theaters movies:', error);
    redirectToErrorPage();
  }
};

export { fetchCurrentlyInTheatersMovies };
