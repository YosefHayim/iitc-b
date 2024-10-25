import { displayAlertMessage } from "../DOM/alert-message-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";
import { isMaxPageReached } from "../DOM/is-max-page-reached-dom.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { genresIdsStorage } from "../DOM/storage-genres-ids.js";
import { dynamicTitlesDisplay } from "../DOM/titles-dynamic-display.js";
import { getData } from "./api-functions.js";

const getMoviesGenresById = async (genreId = 14, count = 1) => {
  const urlParams = new URLSearchParams(window.location.search);
  const genreUrlId = Number(urlParams.get('genreId'));
  
  try {
    const data = await getData(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreUrlId || genreId}&page=${count}`);

    if (!data) { // Check if there are no results
      displayAlertMessage('no-genre-movies-found', genreUrlId);
      redirectToErrorPage();
      return;
    }

    displayMovies('search movies by genre', data);

    const genreName = genresIdsStorage(genreUrlId).name;

    const textTitle = `Genre Movies: ${genreName} Page: ${count} / ${data.total_pages}`;
    dynamicTitlesDisplay('genres movies title display', textTitle);

    isMaxPageReached(count, data.total_pages);

  } catch (error) {
    console.error('An error occurred during the API call', error);
  }
}

export { getMoviesGenresById };
