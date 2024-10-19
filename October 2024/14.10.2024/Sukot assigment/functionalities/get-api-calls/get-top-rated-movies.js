import { getData } from "./api-functions.js";
import { apiKey } from "../global/env.js";
import { topRatedMoviesContainer, topTrendingPage } from "../DOM/storage-elements-dom.js";
import { createMovieCard } from "../DOM/dom-movies-cards.js";

const topRatedMovies = (pageNumber = 1) => {
    // For manipulating the dom and showing teh next data
  topRatedMoviesContainer.innerHTML = "";

  getData(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageNumber}&api_key=${apiKey}`, (data) => {

    console.log(data);
    
    if (!data) {
      redirectToErrorPage()
      return;
    }
      data.results.forEach((movie) => {
        const movieCard = createMovieCard(movie);
        topRatedMoviesContainer.appendChild(movieCard);
      });

      topTrendingPage.style.display = `block`;
      topTrendingPage.textContent = `Page: ${pageNumber} / ${data.total_pages - pageNumber}`

    }
  )
}


export { topRatedMovies };
