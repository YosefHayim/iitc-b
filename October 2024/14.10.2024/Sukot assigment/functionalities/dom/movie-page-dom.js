import { getData } from "../api-functions.js";
import { apiKey } from "../env.js";
import { redirectToErrorPage } from "./redirect-to-404-dom.js";
import { creatingSingleMovieDataView } from "./single-movie-page-dom.js";


const presentSingleMovieById = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get('movieId');
  const videoUrl = urlParams.get('videoUrl')
  
  if (!movieId) return redirectToErrorPage();

  // Fetch movie details
  getData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`, (singleMovieData) => {
    
  if (!singleMovieData) return redirectToErrorPage();

    
  getData(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`, (creditsData) => {
      
  if (!creditsData) return redirectToErrorPage();

  creatingSingleMovieDataView(singleMovieData,creditsData,videoUrl)

    });
  });
}

export { presentSingleMovieById }
