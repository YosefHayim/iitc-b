import { getData } from "../api-functions.js";
import { theatresContainer, currentTheaterPage } from "../dom/domEls.js";
import { createMovieCard } from "../dom/dom-movies-cards.js";

const currentlyInTheaters = (pageNumber = 1) => {
  // Fetch the data from the API for the current page
  getData(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`,(data) => {

    console.log(data);
    
      // Check if we have valid data and results
      if (data && data.results) {
        // Loop through each movie and create its card
        data.results.forEach((movie) => {
          const movieCard = createMovieCard(movie);
          theatresContainer.appendChild(movieCard);
        });

        // Display the current page number and total pages
        currentTheaterPage.style.display = "block";
        currentTheaterPage.textContent = `Page: ${pageNumber} / ${data.total_pages}`;
      } else {
        console.error("No data received from the API.");
      }
    }
  );
};

export { currentlyInTheaters };
