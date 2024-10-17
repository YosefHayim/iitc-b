import { apiKey } from "../env.js";
import { getData } from "../api-functions.js";
import { popularOfTheDayDiv, titlesContainers, domTitleTxt, movieCardsDivs, popDayMoviePage } from "../dom/domEls.js";
import { createMovieCard } from "../dom/dom-movies-cards.js";

const popularMoviesOfDay = (pageNumber = 1) => {
  popularOfTheDayDiv.innerHTML = ``;
  titlesContainers.forEach(title => title.remove());

  movieCardsDivs.forEach(container => {
    container.style.display = container.classList.contains('popular-of-day-container') ? 'flex' : 'none';
  });

  getData(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${pageNumber}&api_key=${apiKey}`, (data) => {
    if (data && data.results) {
      data.results.forEach((movie) => {
        const movieCard = createMovieCard(movie);
        popularOfTheDayDiv.appendChild(movieCard);
      });

      domTitleTxt.style.fontSize = '1em';
      domTitleTxt.textContent = `POPULAR MOVIES OF TODAY`;

      popDayMoviePage.style.display = `block`;
      console.log(`popularMoviesOfDay: ${pageNumber} / ${data.total_pages - pageNumber}`);

    } else {
      console.error("No data received from the API.");
    }
  });
};

export { popularMoviesOfDay };
