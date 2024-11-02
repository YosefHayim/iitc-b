import { displayMovies } from "../dom/display-movies-dom.js";
import { redirectToErrorPage } from "../dom/redirect-to-404-dom.js";
import { similarMoviesTitleContainer } from "../dom/storage-elements-dom.js";
import { dynamicTitlesDisplay } from "../dom/titles-dynamic-display.js";
import { getData } from "./api-functions.js";

const getSimilarMoviesByMovieId = async (count = 1) => {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get("movieId");

  try {
    const data = await getData(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=${count}`
    );

    if (!data) {
      redirectToErrorPage();
      return;
    }

    // If valid data is received, display the movies in the appropriate container.
    displayMovies("similar movies container", data);

    if (data.results.length === 0) {
      similarMoviesTitleContainer.remove();
    }

    // Update the title with the total number of results and current page information.
    let textTitle = `Similar movies`;
    dynamicTitlesDisplay(
      `Single movie page - similar movies container title`,
      textTitle
    );
  } catch (error) {
    console.error(`Something happened while fetching similar movies data.`);
    redirectToErrorPage();
  }
};

export { getSimilarMoviesByMovieId };
