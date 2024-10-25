import { displayAlertMessage } from "../DOM/alert-message-dom.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { getData } from "./api-functions.js";

const getGenresIds = async () => {
  try {
    const data = await getData(`https://api.themoviedb.org/3/genre/movie/list?language=en`);

    console.log(data);

    if (!data) {
      displayAlertMessage('no-genre-movies-found', genreId);
      redirectToErrorPage();
      return;
    }


  } catch (error) {
    console.error('An error occurred during the API call', error);
  }
}

export {getGenresIds}