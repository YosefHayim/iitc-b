import { displayAlertMessage } from "../dom/alert-message-dom.js";
import { redirectToErrorPage } from "../dom/redirect-to-404-dom.js";
import { getData } from "./api-functions.js";

const getGenresIds = async () => {
  try {
    const data = await getData(
      `https://api.themoviedb.org/3/genre/movie/list?language=en`
    );

    console.log(data); // Logs data for debugging

    if (!data) {
      // If no data is returned, displays an alert message and redirects to error page
      displayAlertMessage("no-genre-movies-found", genreId);
      redirectToErrorPage();
      return;
    }
  } catch (error) {
    // Logs any errors that occur during the API call
    console.error("An error occurred during the API call", error);
  }
};

export { getGenresIds };
