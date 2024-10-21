import { getData } from "./api-functions.js";
import { apiKey } from "../global/env.js";
import { popularMoviesContainer, latestPopularPage } from "../DOM/storage-elements-dom.js";
import { buildHomeMovieCard } from "../DOM/homepage-movie-cards-dom.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";

const fetchPopularMovies = async (pageNumber = 1) => {
  // Clear container for new data
  popularMoviesContainer.innerHTML = "";

  try {
    // Fetch popular movies for the current page
    const data = await getData(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNumber}&api_key=${apiKey}`);

    if (!data) {
      redirectToErrorPage();
      return;
    }

    // Create and append movie cards to the container
    data.results.forEach(movie => {
      const movieCard = buildHomeMovieCard(movie);
      popularMoviesContainer.appendChild(movieCard);
    });

    // Update and display the current page number and total pages
    latestPopularPage.style.display = "block";
    latestPopularPage.textContent = `Page: ${pageNumber} / ${data.total_pages}`;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    redirectToErrorPage();
  }
};

export { fetchPopularMovies };
