import {
  favMoviesContainer,
  genreResultContainer,
  popularMoviesContainer,
  popularOfTheDayContainer,
  popularOfTheWeekContainer,
  searchResultContainer,
  similarMoviesContainer,
  theatresContainer,
  topRatedMoviesContainer,
  upComingMoviesContainer,
} from "./storage-elements-dom.js";

// This function dynamically selects the appropriate movie container based on the requested container name.
const moviesStorage = (requestedContainer) => {
  // Storage array containing the different movie containers with their names and corresponding DOM elements.
  const storage = [
    {
      containerName: "Search result page id and name",
      containerEl: searchResultContainer,
    },
    {
      containerName: "search movies by genre",
      containerEl: genreResultContainer,
    },
    {
      containerName: "Favorite movie page",
      containerEl: favMoviesContainer,
    },
    {
      containerName: "Todays must watch popular movies page",
      containerEl: popularOfTheDayContainer,
    },
    {
      containerName: "Weekly hits popular movies page",
      containerEl: popularOfTheWeekContainer,
    },
    {
      containerName: "Currently movies in theatres page",
      containerEl: theatresContainer,
    },
    {
      containerName: "popular movies page",
      containerEl: popularMoviesContainer,
    },
    {
      containerName: "Top rated movies page",
      containerEl: topRatedMoviesContainer,
    },
    {
      containerName: "Upcoming movies page",
      containerEl: upComingMoviesContainer,
    },
    {
      containerName: "similar movies container",
      containerEl: similarMoviesContainer,
    },
  ];

  // Find and return the relevant movie container based on the requested container name.
  const movieContainer = storage.find(
    (relevantContainer) =>
      relevantContainer.containerName === requestedContainer
  );

  if (!movieContainer) {
    console.error(`Couldn't find the relevant container you requested.`);
  }

  return movieContainer;
};

export { moviesStorage };
