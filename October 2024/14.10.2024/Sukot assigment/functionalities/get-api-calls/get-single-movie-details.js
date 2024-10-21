import { getData } from "./api-functions.js";
import { apiKey } from "../global/env.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { renderSingleMoviePage } from "../DOM/single-movie-page-dom.js";

const displaySingleMovieById = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const videoUrl = urlParams.get('videoUrl');
  const movieId = urlParams.get('movieId');
    
  if (!movieId) {
    return redirectToErrorPage();
  }

  try {
    // Fetch movie details
    const singleMovieData = await getData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
    console.log(singleMovieData);
    
    if (!singleMovieData) {
      return redirectToErrorPage();
    }

    // Fetch movie actors details
    const creditsData = await getData(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`);
    console.log(creditsData);

    if (!creditsData) {
      return redirectToErrorPage();
    }

    // Render the single movie page
    if (videoUrl) {
      renderSingleMoviePage(singleMovieData, creditsData, videoUrl);
    } else {
      renderSingleMoviePage(singleMovieData, creditsData);
    }
  } catch (error) {
    console.error('Error fetching movie details or credits:', error);
    redirectToErrorPage();
  }
}

export { displaySingleMovieById };
