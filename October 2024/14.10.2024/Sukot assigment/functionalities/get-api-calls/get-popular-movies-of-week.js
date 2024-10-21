import { apiKey } from "../global/env.js";
import { getData } from "./api-functions.js";
import { popularOfTheWeekContainer, homePageAllContainers, templateTitle } from "../DOM/storage-elements-dom.js";
import { buildHomeMovieCard } from "../DOM/homepage-movie-cards-dom.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";

const popularMoviesOfWeek = async (count) => {
  let defaultPage = 1;

  try {
    const data = await getData(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=${count ? count : defaultPage}&api_key=${apiKey}`);

    if (!data) {
      redirectToErrorPage();
      return;
    }

    // Clear the container and append the movie cards
    popularOfTheWeekContainer.innerHTML = "";
    data.results.forEach(movie => {
      // Create movie card and append it to the weekly movies container
      const movieCard = buildHomeMovieCard(movie);
      popularOfTheWeekContainer.appendChild(movieCard);
    });
    
    // Update the title with the total results and page number
    templateTitle.textContent = `${data.total_results} Movies Of Weekly Hits: ${data.page}/${data.total_pages}`;
    console.log(`popularMoviesOfWeek - Total Pages: ${data.total_pages}`);

  } catch (error) {
    console.error('Error fetching popular movies of the week:', error);
    redirectToErrorPage();
  }
};

export { popularMoviesOfWeek };
