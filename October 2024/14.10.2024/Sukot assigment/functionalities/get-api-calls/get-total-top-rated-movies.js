import { getData } from "./api-functions.js";
import { apiKey } from "../global/env.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";
import { dynamicTitlesDisplay } from "../DOM/titles-dynamic-display.js";

const fetchTopRatedMovies = async (pageNumber = 1) => {
  try {
    const data = await getData(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageNumber}&api_key=${apiKey}`);
    
    if (!data) {
      redirectToErrorPage();
      return;
    }

    displayMovies('Top rated movies page',data)
    let textTitle = `Page: ${pageNumber} / ${data.total_pages}`;
    dynamicTitlesDisplay('Top rated movies title',textTitle)

  } catch (error) {
    console.error('Error fetching top-rated movies:', error);
    redirectToErrorPage();
  }
};

export { fetchTopRatedMovies };
