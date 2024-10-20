import { apiKey } from "../global/env.js";
import { getData } from "./api-functions.js";
import { popularOfTheDayContainer, homePageAllContainers } from "../DOM/storage-elements-dom.js";
import { buildHomeMovieCard } from "../DOM/homepage-movie-cards-dom.js";

const popularMoviesOfDay = () => {
  getData(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1&api_key=${apiKey}`, (data) => {
    
    if (!data) {
      redirectToErrorPage();
      return;
    }

    data.results.forEach(movie => {
      // Creating in each loop a skeleton movie box
      const movieCard = buildHomeMovieCard(movie);
      // Appending it to the div of the weekly movies
      popularOfTheDayContainer.appendChild(movieCard);

    });

    homePageAllContainers.forEach(container => {
      container.style.display = container.classList.contains('popular-of-day-container') ? 'flex' : 'none';
    });

    console.log(`popularMoviesOfDay - Total Pages: ${data.total_page}`);
  });
};

export { popularMoviesOfDay };
