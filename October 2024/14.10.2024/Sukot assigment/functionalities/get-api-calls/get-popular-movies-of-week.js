import { apiKey } from "../env.js";
import { getData } from "../api-functions.js";
import { popularOfTheWeekDiv, 
  titlesContainers,
  domTitleTxt,movieCardsDivs,
} from "../dom/domEls.js";
import { createMovieCard } from "../dom/dom-movies-cards.js";

const popularMoviesOfWeek = () => {

  popularOfTheWeekDiv.innerHTML = ``;

  titlesContainers.forEach(title => title.remove());

  movieCardsDivs.forEach(container => {
    container.style.display = container.classList.contains('popular-movies-of-week-container') ? 'flex' : 'none';
  });

  getData(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=${apiKey}`, (data) => {
    console.log(data); 
    data.results.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      popularOfTheWeekDiv.appendChild(movieCard);
    });

    domTitleTxt.style.fontSize = '1em';
    domTitleTxt.textContent = `POPULAR MOVIES OF THE WEEK`;
  });
}

export {popularMoviesOfWeek}