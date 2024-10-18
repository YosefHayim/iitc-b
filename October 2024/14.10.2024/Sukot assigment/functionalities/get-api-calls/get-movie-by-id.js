import { movieCardsDivs, titlesContainers,domTitleTxt,searchResultContainer,searchResultTitle } from "../dom/domEls.js"
import {createMovieCard} from "../dom/dom-movies-cards.js"
import {apiKey} from "../env.js"
import {getData} from "../api-functions.js"

const searchMovieById = (inputValue) => {
  getData(`https://api.themoviedb.org/3/movie/${inputValue}?api_key=${apiKey}`, (data) => {
    if (data === null || data === undefined || !data) {
      window.location.href = 'error404.html';
      return;
    }
    
    titlesContainers.forEach(title => title.remove());

    movieCardsDivs.forEach((container) => container.remove());

    searchResultContainer.innerHTML = '';

    searchResultTitle.textContent = `NAME OF THE MOVIE IS: ${data.title}`;

    const movieCard = createMovieCard(data);
    searchResultContainer.appendChild(movieCard);
  });
};


export {searchMovieById}