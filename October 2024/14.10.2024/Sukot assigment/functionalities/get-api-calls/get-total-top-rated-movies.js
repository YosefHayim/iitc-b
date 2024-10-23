import { getData } from "./api-functions.js";
import { apiKey } from "../global/env.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";
import { dynamicTitlesDisplay } from "../DOM/titles-dynamic-display.js";

// This function retrieves the top-rated movies from the API to display on the homepage.
// It accepts a page number parameter, defaulting to 1 if not provided.
const fetchTopRatedMovies = async (count = 1) => {
  try {
    // Fetch top-rated movies data from the API.
    const data = await getData(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${count}&api_key=${apiKey}`);

    console.log(data);
    

    // If the data is falsy, redirect to the error page.
    if (!data) {
      console.error('Something is wrong with the data:', data);
      redirectToErrorPage();
      return;
    }

    // If valid data is received, display the movies in the appropriate container.
    displayMovies('Top rated movies page', data);

    // Create a dynamic title to inform the user about the current page and total pages.
    const textTitle = `Page: ${count} / ${data.total_pages}`;
    dynamicTitlesDisplay('Top rated movies title', textTitle);

  } catch (error) {
    // Log any errors that occur during the API call and redirect to the error page.
    console.error('Error fetching top-rated movies:', error);
    redirectToErrorPage();
  }
};

export { fetchTopRatedMovies };
