import { getData } from "./api-functions.js";
import { apiKey } from "../global/env.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { creatingSingleMovieDataView } from "../DOM/single-movie-page-dom.js";


const presentSingleMovieById = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const videoUrl = urlParams.get('videoUrl')

  const movieId = urlParams.get('movieId');
  if (!movieId) return redirectToErrorPage();
  

  // Fetch movie details
  getData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`, (singleMovieData) => {
  if (!singleMovieData) return redirectToErrorPage();

  // Fetch movie actors details    
  getData(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`, (creditsData) => {
  if (!creditsData) return redirectToErrorPage();
  
  if (videoUrl) {
    creatingSingleMovieDataView(singleMovieData,creditsData,videoUrl)
  } else {
    creatingSingleMovieDataView(singleMovieData,creditsData)
  }

    });
  });
}

export { presentSingleMovieById }
