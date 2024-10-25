import { displayAlertMessage } from "../DOM/alert-message-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";
import { isMaxPageReached } from "../DOM/is-max-page-reached-dom.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { genreResultContainerTitle } from "../DOM/storage-elements-dom.js";
import { dynamicTitlesDisplay } from "../DOM/titles-dynamic-display.js";
import { getData } from "./api-functions.js";
console.log(genreResultContainerTitle);


const getMovieGenresById = async (genreId = 28,count = 1) => {
  try {
    const data = await getData(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&page=${count}`);

    console.log(data);

    if (!data) {
      displayAlertMessage('no-genre-movies-found', genreId);
      redirectToErrorPage();
      return;
    }

    displayMovies('search movies by genre',data)

    const textTitle = `Page: ${count} / ${data.total_pages}`;
    dynamicTitlesDisplay('movies-genres-title', textTitle);

    isMaxPageReached(count,data.total_pages)


  } catch (error) {
    console.error('An error occurred during the API call', error);
  }
}

export {getMovieGenresById}