import { apiKey } from "../global/env.js";
import { getData } from "./api-functions.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";
import { dynamicTitlesDisplay } from "../DOM/titles-dynamic-display.js";

const popularMoviesOfWeek = async (count) => {
  let defaultPage = 1;
  try {
    const data = await getData(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=${count ? count : defaultPage}&api_key=${apiKey}`);

    if (!data) {
      redirectToErrorPage();
      return;
    }

    displayMovies('Weekly hits popular movies page',data)
    let textTitle = `${data.total_results} Weekly hits movies: ${data.page}/${data.total_pages}`;
    dynamicTitlesDisplay('Weekly hits page title',textTitle)

  } catch (error) {
    console.error('Error fetching popular movies of the week:', error);
    redirectToErrorPage();
  }
};

export { popularMoviesOfWeek };
