import { apiKey } from "../global/env.js";
import { getData } from "./api-functions.js";
import { popularOfTheDayDiv, movieCardsDivs } from "../DOM/storage-elements-dom.js";
import { createMovieCard } from "../DOM/dom-movies-cards.js";

const popularMoviesOfDay = () => {
  getData(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1&api_key=${apiKey}`, (data) => {
    if (!data) {
      redirectToErrorPage();
      return;
    }

    data.results.forEach(movie => {
      const movieCard = createMovieCard(movie);
      popularOfTheDayDiv.appendChild(movieCard);
    });

    movieCardsDivs.forEach(container => {
      container.style.display = container.classList.contains('popular-of-day-container') ? 'flex' : 'none';
    });

    console.log(`popularMoviesOfDay - Total Pages: ${data.total_page}`);
  });
};

export { popularMoviesOfDay };
