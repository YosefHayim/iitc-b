import { apiKey } from "../env.js";
import { getData } from "../api-functions.js";
import { popularOfTheDayDiv, titlesContainers, domTitleTxt, movieCardsDivs, popDayMoviePage, templateTitle } from "../dom/domEls.js";
import { createMovieCard } from "../dom/dom-movies-cards.js";

const popularMoviesOfDay = (pageNumber = 1) => {

  getData(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${pageNumber}&api_key=${apiKey}`, (data) => {
    if (data && data.results) {
      console.log(data);
      
      data.results.forEach((movie) => {
        const movieCard = createMovieCard(movie);
        popularOfTheDayDiv.appendChild(movieCard);
      });

      if (window.location.pathname.endsWith('popular-day.html')) {

      } else if (window.location.pathname.endsWith('index.html')) {
        popularOfTheDayDiv.innerHTML = ``;

        titlesContainers.forEach(title => title.remove());

        movieCardsDivs.forEach(container => {
          container.style.display = container.classList.contains('popular-of-day-container') ? 'flex' : 'none';
        });
      }

      console.log(`popularMoviesOfDay: ${pageNumber} / ${data.total_page}`);

    } else {
      console.error("No data received from the API.");
    }
  });
};

export { popularMoviesOfDay };
