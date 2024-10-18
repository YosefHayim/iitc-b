import { movieCardsDivs, titlesContainers,domTitleTxt,searchResultContainer,searchResultTitle,footer } from "../dom/domEls.js"
import {createMovieCard} from "../dom/dom-movies-cards.js"
import { getData } from "../api-functions.js";



const searchMovieByName = (inputValue) => {
  getData(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`, (data) => {
      console.log(data.results);
      
    if (data.results.length === 0) {
      window.location.href = 'error404.html';
      return;
    }
    console.log(data);

    titlesContainers.forEach(title => title.remove());

    movieCardsDivs.forEach((container) => container.remove());

    searchResultTitle.style.display = `flex`
    searchResultTitle.textContent = `Total movies found for "${inputValue.charAt(0).toUpperCase() + inputValue.slice(1)}" : ${data.total_results}`;
    
    data.results.forEach((movie) => {
    const movieCard = createMovieCard(movie);
    searchResultContainer.appendChild(movieCard);
    });
  });
};

export {searchMovieByName}