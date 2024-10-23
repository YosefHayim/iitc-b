import { generateFavoriteMovieCard } from "./favorite-movie-card-dom.js";
import { buildHomeMovieCard } from "./homepage-movie-cards-dom.js";
import { moviesStorage } from "./storage-movies-elements-dom.js";
// This function is displaying movies based on the chosen container.
const displayMovies = (requestedContainer, data) => {
  // We get the chosen container from the movieStorage with the requested container and proceed.
  const chosenContainer = moviesStorage(requestedContainer);
// If they are both exist we are resetting the html of them to avoid appending and duplicated movies to the dom.
  if (chosenContainer && chosenContainer.containerEl) {
    chosenContainer.containerEl.innerHTML = '';

    // Check if data has a 'results' array or is a single object
    if (Array.isArray(data.results)) {
      // If results is an array, loop through each movie
      data.results.forEach(movie => {
        let movieCard;

        // a nested if the requested is favorite movie page, we preform another creation since we have a different element names for the favorite movie page.
        if (requestedContainer === 'Favorite movie page') {
          movieCard = generateFavoriteMovieCard(movie);
          // if its not we preform a regular creation of the movie card.
        } else {
          movieCard = buildHomeMovieCard(movie);
        }
        // Appending each movie to the chosen container that is relevant for that movie category. e.g. Weekly hits movies is appended to the weekly hit container.
        chosenContainer.containerEl.appendChild(movieCard);
      });
      // Else if the data we received is falsy which means either we received null api response or we received a response which is not an array e.g. search query by name or by id for a specific movie
    } else if (!data.results) {
      // Handle the case where data is a single movie object
      let movieCard;
      // Again we separate the favorite movie page because there could be only 1 movie that we added to our favorite list of movies though the API
      if (requestedContainer === 'Favorite movie page') {
        movieCard = generateFavoriteMovieCard(data); // Directly pass the movie object
      } else {
        movieCard = buildHomeMovieCard(data); // Directly pass the movie object
      }

      chosenContainer.containerEl.appendChild(movieCard);
      // In case its really null
    } else {
      console.error("No movies found in data.");
    }
    // In case there is no container by the container we are looked in our container movies storage.
  } else {
    console.error("Container not found for:", requestedContainer);
  }
};

export { displayMovies }
