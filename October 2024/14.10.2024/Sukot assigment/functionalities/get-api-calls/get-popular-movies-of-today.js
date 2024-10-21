import { apiKey } from "../global/env.js";
import { getData } from "./api-functions.js";
import { templateTitle } from "../DOM/storage-elements-dom.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";

// Function to fetch and display the popular movies of the day
const popularMoviesOfDay = async (count) => {
  // Set a default page value of 1 if no page number is provided
  let defaultPage = 1;

  try {
    // Fetch the trending movies for the day using the API and the specified page number (or default page if count is not provided)
    const data = await getData(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${count ? count : defaultPage}&api_key=${apiKey}`);

    // If no data is returned, redirect to the 404 error page
    if (!data) {
      redirectToErrorPage();
      return;
    }

    // Loop through the list of popular movies and create a movie card for each one, appending them to the container
    displayMovies('Todays must watch popular movies page',data)

    // Update the template title with the total number of movies and current page info
    templateTitle.textContent = `${data.total_results} Movies Of Today's must watch: ${data.page}/${data.total_pages}`;
    console.log(`popularMoviesOfDay - Total Pages: ${data.total_pages}`); // Log the total pages for debugging

  } catch (error) {
    // Log the error and redirect to the 404 error page if the fetch fails
    console.error('Error fetching popular movies of the day:', error);
    redirectToErrorPage();
  }
};

export { popularMoviesOfDay };
