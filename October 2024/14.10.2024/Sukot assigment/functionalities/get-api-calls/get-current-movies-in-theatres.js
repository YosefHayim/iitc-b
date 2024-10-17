import { getData } from "../api-functions.js";
import {theatresContainer,currentPage} from "../dom/domEls.js"
import {createMovieCard} from "../dom/dom-movies-cards.js"

let pageNumber;

const currentlyInTheaters = (pageNumber = 1) => {
  theatresContainer.innerHTML = "";

  getData(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`, (data) => {
        
    if (data && data.results) {
      data.results.forEach((movie) => {
        const movieCard = createMovieCard(movie);
        theatresContainer.appendChild(movieCard);
      });
      currentPage.style.display = `block`
      currentPage.textContent = `${pageNumber} / ${data.total_pages - pageNumber} PAGES`

    } else {
      console.error("No data received from the API.");
    }
  });};



export {currentlyInTheaters}