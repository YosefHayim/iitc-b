import { apiKey } from "../env.js";
import { getData } from "../api-functions.js";
import { popularOfTheDayDiv, titlesContainers,movieCardsDivs } from "../global/domEls.js";
import { createMovieCard } from "../dom/dom-movies-cards.js";

const popularMoviesOfDay = () => {

  getData(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1&api_key=${apiKey}`, (data) => {
    
    if (data && data.results) {
      console.log(data);
      
      data.results.forEach((movie) => {
        const movieCard = createMovieCard(movie);
        popularOfTheDayDiv.appendChild(movieCard);
      });
      
      movieCardsDivs.forEach(container => {
        container.style.display = container.classList.contains('popular-of-day-container') ? 'flex' : 'none';
      });
      
      console.log(`popularMoviesOfDay -  Total Pages - ${data.total_page}`);

    } else {
      console.error("No data received from the API.");
    }
  });
};

export { popularMoviesOfDay };
