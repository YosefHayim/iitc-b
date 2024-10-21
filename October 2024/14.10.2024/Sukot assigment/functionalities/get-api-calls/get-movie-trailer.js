import { getData } from "./api-functions.js";
import { apiKey } from "../global/env.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js"

// Function to fetch the trailer for a given movie by its ID
const getMovieTrailer = async (movieId) => {
  try {
    // Fetch movie data along with associated videos (including trailers) using the movie ID
    const data = await getData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`);

    // If no data is returned, log an error message and optionally redirect to the error page
    if (!data) {
      console.log(`Error fetching data`);
      // redirectToErrorPage(); // Optionally redirect to the 404 error page
      return;
    }

    // Find the first video of type "Trailer" in the returned movie videos
    const video = data.videos?.results?.find(vid => vid.type === "Trailer" && vid.key);
    console.log(`Video URL found:`, video); // Log the trailer information for debugging

    // Return the trailer video if found
    return video;

  } catch (error) {
    // Log any error that occurs during the API request
    console.error('Error fetching trailer:', error);
    // redirectToErrorPage(); // Optionally redirect to the error page
  }
};

export { getMovieTrailer };
