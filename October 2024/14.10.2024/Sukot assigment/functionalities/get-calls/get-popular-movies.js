import { getData } from "../api-functions.js";
import {apiKey} from "../security/env.js"



const popularMovies = () => {
  getData(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`, (data) => {
    data.results.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      popularMoviesContainer.appendChild(movieCard);
    });
  })}

  export {popularMovies}