import { getData } from "./api-functions.js";
import { theatresContainer, currentTheaterPage } from "../DOM/storage-elements-dom.js";
import { buildHomeMovieCard } from "../DOM/homepage-movie-cards-dom.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";

const fetchCurrentlyInTheatersMovies = async (pageNumber = 1) => {
  // Clear container for new data
  theatresContainer.innerHTML = "";

  try {
    // Fetch data for the current page
    const data = await getData(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`);

    if (!data) {
      redirectToErrorPage();
      return;
    }

    if (data.results) {
      data.results.forEach(movie => {
        const movieCard = buildHomeMovieCard(movie);
        theatresContainer.appendChild(movieCard);
      });

      // Display the current page number and total pages
      currentTheaterPage.style.display = "block";
      currentTheaterPage.textContent = `Page: ${pageNumber} / ${data.total_pages}`;
    } else {
      console.error("No valid data received from the API.");
    }
  } catch (error) {
    console.error('Error fetching currently in theaters movies:', error);
    redirectToErrorPage();
  }
};

export { fetchCurrentlyInTheatersMovies };
