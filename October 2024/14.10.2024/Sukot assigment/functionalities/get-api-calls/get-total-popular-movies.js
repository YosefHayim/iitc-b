import { getData } from "./api-functions.js";
import { apiKey } from "../global/env.js";
import { latestPopularPage } from "../DOM/storage-elements-dom.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";

const fetchPopularMovies = async (pageNumber = 1) => {
  try {
    const data = await getData(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNumber}&api_key=${apiKey}`);

    if (!data) {
      redirectToErrorPage();
      return;
    }

    displayMovies('popular movies page',data)
    latestPopularPage.style.display = "block";
    latestPopularPage.textContent = `Page: ${pageNumber} / ${data.total_pages}`;

  } catch (error) {
    console.error('Error fetching popular movies:', error);
    redirectToErrorPage();
  }
};

export { fetchPopularMovies };
