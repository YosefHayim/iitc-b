import { getData } from "./api-functions.js";
import { currentTheaterPage } from "../DOM/storage-elements-dom.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";

const fetchCurrentlyInTheatersMovies = async (pageNumber = 1) => {
  try {
    // Fetch data for the current page
    const data = await getData(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`);

    if (!data) {
      redirectToErrorPage();
      return;
    }

    displayMovies('Currently movies in theatres page', data)

      // Display the current page number and total pages
      currentTheaterPage.style.display = "block";
      currentTheaterPage.textContent = `Page: ${pageNumber} / ${data.total_pages}`;
  } catch (error) {
    console.error('Error fetching currently in theaters movies:', error);
    redirectToErrorPage();
  }
};

export { fetchCurrentlyInTheatersMovies };
