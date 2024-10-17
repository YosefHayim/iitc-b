import { getData } from "./api-functions.js";
import {apiKey} from "./env.js"
import { popularMoviesContainer } from "./domEls.js";
import {createMovieCard} from "./dom-movies-cards.js"



const popularMovies = () => {
  getData(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`, (data) => {
    data.results.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      popularMoviesContainer.appendChild(movieCard);
    });
  })}

  export {popularMovies}