import { getData } from "./api-functions.js";
import { apiKey } from "../global/env.js";
import { redirectToErrorPage } from "../dom/redirect-to-404-dom.js";
import { renderSingleMoviePage } from "../dom/single-movie-page-dom.js";
import { singleMoviePageListener } from "../event-listeners/user-activity/single-movie-page-el.js";

// This function fetches data about a specific movie using its ID and retrieves actor information for that movie.
const displaySingleMovieById = async () => {
  // Create a new URL object to parse the query parameters.
  const urlParams = new URLSearchParams(window.location.search);

  // Get the video URL and movie ID from the URL parameters.
  const videoUrl = urlParams.get("videoUrl");

  const movieId = urlParams.get("movieId");

  // If the movie ID is not provided, redirect the user to the error page.
  if (!movieId) {
    console.error("Something is wrong with the movie ID:", movieId);
    return redirectToErrorPage();
  }

  try {
    // Fetch the movie details using the movie ID.
    const singleMovieData = await getData(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
    );

    singleMoviePageListener(
      singleMovieData.vote_count,
      singleMovieData.vote_average
    );

    // Fetch the credits (actors) for the specific movie.
    const creditsData = await getData(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
    );

    // If a video URL is provided, pass it along with the movie and credits data to render the movie page.
    if (videoUrl) {
      renderSingleMoviePage(singleMovieData, creditsData, videoUrl);
    } else {
      // If no video URL is provided, only pass the movie and credits data.
      renderSingleMoviePage(singleMovieData, creditsData);
    }
  } catch (error) {
    // Log any errors that occur during the fetching of movie details or credits.
    console.error("Error fetching movie details or credits:", error);
    redirectToErrorPage(); // Redirect to the error page in case of an error.
  }
};

export { displaySingleMovieById };
