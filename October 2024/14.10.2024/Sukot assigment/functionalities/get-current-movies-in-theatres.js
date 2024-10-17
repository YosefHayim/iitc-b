import { getData } from "./api-functions.js";
import {theatresContainer} from "./domEls.js"
import {createMovieCard} from "./dom-movies-cards.js"



const currentlyInTheaters = () => {
  getData(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, (data) => {
    data.results.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      theatresContainer.appendChild(movieCard);
    });
  });
};

export {currentlyInTheaters}