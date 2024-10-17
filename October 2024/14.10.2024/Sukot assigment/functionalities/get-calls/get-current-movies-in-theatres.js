import { getData } from "../api/api-functions.js";

const currentlyInTheaters = () => {
  getData(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, (data) => {
    data.results.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      theatresContainer.appendChild(movieCard);
    });
  });
};

export {currentlyInTheaters}