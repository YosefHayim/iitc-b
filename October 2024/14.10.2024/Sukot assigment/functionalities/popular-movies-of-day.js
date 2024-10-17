import { apiKey } from "./env.js";
import { getData } from "./api-functions.js";
import { popularOfTheDayDiv, 
  titlesContainers,
  domTitleTxt,movieCardsDivs
} from "./domEls.js";
import { createMovieCard } from "./dom-movies-cards.js";

const popularMoviesOfDay = () => {
    getData(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}`, (data) => {
      data.results.forEach((movie) => {
        const movieCard = createMovieCard(movie);
        popularOfTheDayDiv.appendChild(movieCard);
        titlesContainers.forEach(title => title.style.display = 'none');
        movieCardsDivs.forEach((container) => container.style.display = `none`)
        domTitleTxt.textContent = `POPULAR MOVIES OF TODAY`;
      });
    });
  } 
export {popularMoviesOfDay}