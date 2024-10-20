import { apiKey } from "../global/env.js";
import { getData } from "./api-functions.js";
import { popularOfTheWeekDiv, movieCardsDivs } from "../DOM/storage-elements-dom.js";
import { createMovieCard } from "../DOM/homepage-movie-cards-dom.js";

const popularMoviesOfWeek = () => {
  getData(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=1&api_key=${apiKey}`, (data) => {
    if (!data) {
      redirectToErrorPage();
      return;
    }

    data.results.forEach(movie => {
      const movieCard = createMovieCard(movie);
      popularOfTheWeekDiv.appendChild(movieCard);
    });

    movieCardsDivs.forEach(container => {
      container.style.display = container.classList.contains('popular-movies-of-week-container') ? 'flex' : 'none';
    });

    console.log(`popularOfTheWeekDiv - Total Pages: ${data.total_pages}`);
  });
};

export { popularMoviesOfWeek };
