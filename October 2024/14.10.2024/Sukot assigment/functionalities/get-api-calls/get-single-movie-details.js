import { getData } from "./api-functions.js";
import { apiKey } from "../global/env.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { renderSingleMoviePage } from "../DOM/single-movie-page-dom.js";
import { displayAlertMessage } from "../DOM/alert-message-dom.js";


const displaySingleMovieById = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const videoUrl = urlParams.get('videoUrl')

  const movieId = urlParams.get('movieId');
  console.log(movieId);
  if (!movieId) return redirectToErrorPage();
  
  // Fetch movie details
  getData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`, (singleMovieData) => {
    console.log(singleMovieData);

  if (!singleMovieData) return redirectToErrorPage();

  // Fetch movie actors details    
  getData(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`, (creditsData) => {
    console.log(creditsData);
    
  if (!creditsData) return redirectToErrorPage();
  
  if (videoUrl) {
    renderSingleMoviePage(singleMovieData,creditsData,videoUrl)
  } else {
    renderSingleMoviePage(singleMovieData,creditsData)
  }

    });
  });
}

export { displaySingleMovieById }
