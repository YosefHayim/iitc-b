import { movieCardsDivs, titlesContainers,searchResultContainer,searchResultTitle } from "../dom/domEls.js"
import {createMovieCard} from "../dom/dom-movies-cards.js"
import { getData } from "../api-functions.js";



const searchMovieByName = (inputValue) => {
  getData(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`, (data, response) => {
      
    console.log(data);

    if (!data || (response && response.status === 404)) {
      window.location.href = 'error404.html';
      return;
    }

    titlesContainers.forEach(title => title.remove());
    movieCardsDivs.forEach((container) => container.remove());

    searchResultTitle.style.display = `flex`
    searchResultTitle.innerHTML = `
    <h1>Total movies found "${inputValue.charAt(0).toUpperCase() + inputValue.slice(1)}" : ${data.total_results}</h1>
    `
    
    data.results.forEach((movie) => {
    const movieCard = createMovieCard(movie);
    searchResultContainer.appendChild(movieCard);
    });
  });
};

export {searchMovieByName}