import { getData } from "./api-functions.js";
import { apiKey } from "../global/env.js";
import { topRatedMoviesContainer, topTrendingPage } from "../DOM/storage-elements-dom.js";
import { buildHomeMovieCard } from "../DOM/homepage-movie-cards-dom.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";

const fetchTopRatedMovies = async (pageNumber = 1) => {
  // Clear container for new data
  topRatedMoviesContainer.innerHTML = "";

  try {
    // Fetch top-rated movies for the current page
    const data = await getData(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageNumber}&api_key=${apiKey}`);

    if (!data) {
      redirectToErrorPage();
      return;
    }

    // Create and append movie cards to the container
    data.results.forEach((movie) => {
      const movieCard = buildHomeMovieCard(movie);
      topRatedMoviesContainer.appendChild(movieCard);
    });

    // Update and display the current page number and total pages
    topTrendingPage.style.display = "block";
    topTrendingPage.textContent = `Page: ${pageNumber} / ${data.total_pages - pageNumber}`;

  } catch (error) {
    console.error('Error fetching top-rated movies:', error);
    redirectToErrorPage();
  }
};

export { fetchTopRatedMovies };
