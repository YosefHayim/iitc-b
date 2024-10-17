import { movieCardsDivs, titlesContainers,domTitleTxt,searchResultContainer } from "./domEls.js"
import {createMovieCard} from "./dom-movies-cards.js"


const searchMovieByName = (inputValue) => {
  titlesContainers.forEach(title => title.style.display = 'none');
  movieCardsDivs.forEach((container) => container.style.display =`none`)
  getData(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`, (data) => {
    if (!data) {
      window.location.href = 'error404.html';
    } else {
      
      domTitleTxt.textContent = `Total movies found for ${inputValue.charAt(0).toUpperCase() + inputValue.slice(1)} : ${data.total_results}`;
      data.results.forEach((movie) => {
        const movieCard = createMovieCard(movie);
        searchResultContainer.appendChild(movieCard);
      });
    }
  });
}

export {searchMovieByName}