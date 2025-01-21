import { getData } from "./api-functions.js";
import { apiKey } from "../global/env.js";
import { redirectToErrorPage } from "../dom/redirect-to-404-dom.js";
import { displayAlertMessage } from "../dom/alert-message-dom.js";

// This function retrieves the relevant movie trailer using the provided movie ID.
const getMovieTrailer = async (movieId) => {
  try {
    // Fetch movie data along with videos from the API.
    const data = await getData(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`
    );

    // If the data received is falsy, log the error and redirect to the error page.
    if (!data) {
      console.error(`Error fetching data`);
      displayAlertMessage("No-trailer-found", movieId);
      redirectToErrorPage();
      return;
    }

    // If valid data is received, search for the first valid trailer.
    const video = data.videos?.results?.find(
      (vid) => vid.type === "Trailer" && vid.key
    );
    return video; // Return the trailer object if found.
  } catch (error) {
    // Log any errors that occur during the API call.
    console.error("Error fetching trailer:", error);
  }
};

export { getMovieTrailer };
