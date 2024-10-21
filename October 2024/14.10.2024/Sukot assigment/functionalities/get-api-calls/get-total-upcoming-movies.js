import { getData } from "./api-functions.js";
import { upComingMoviePage } from "../DOM/storage-elements-dom.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";

const fetchUpcomingMovies = async (pageNumber = 1) => {
  try {
    // Fetch upcoming movies for the current page
    const data = await getData(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${pageNumber}`);

    if (!data) {
      redirectToErrorPage();
      return;
    }

    // Create and append movie cards to the container
    displayMovies('Upcoming movies page',data)    

    // Update and display the current page number and total pages
    upComingMoviePage.style.display = "block";
    upComingMoviePage.textContent = `Page: ${pageNumber} / ${data.total_pages}`;
    
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    redirectToErrorPage();
  }
};

export { fetchUpcomingMovies };
