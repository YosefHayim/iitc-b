import { getData } from "../api-functions.js";
import {createMovieCard} from "../dom/dom-movies-cards.js"
import { upComingMoviesContainer } from "../dom/domEls.js";

let countPage = 1

const upComingMovies = () => {
  getData(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${countPage}`, (data) => {
    data.results.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      upComingMoviesContainer.appendChild(movieCard);
    });
  });
  ++countPage
};

export {upComingMovies}