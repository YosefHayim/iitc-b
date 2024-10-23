import { favMoviesContainer,popularMoviesContainer, popularOfTheDayContainer, popularOfTheWeekContainer, searchResultContainer, theatresContainer, topRatedMoviesContainer, upComingMoviesContainer } from "./storage-elements-dom.js"
// This function is responsible for the requested movie container to allow a dynamic display of the movies.
// It takes one parameter which is the requested container.
const moviesStorage = (requestedContainer) => {
  // Thats the storage of it and it is being filtered by the container name, once I provided the container name 
  //I am receiving the containerEl which stands for element to do a DOM on it.
  const storage = [
    {
      containerName : 'Search result page id and name',
      containerEl : searchResultContainer,
    },
    {
    containerName : 'Favorite movie page',
    containerEl : favMoviesContainer,
    },

    {
      containerName : 'Todays must watch popular movies page',
      containerEl : popularOfTheDayContainer,
    },

    {
      containerName : 'Weekly hits popular movies page',
      containerEl : popularOfTheWeekContainer,
    },

    {
      containerName : 'Currently movies in theatres page',
      containerEl : theatresContainer,
    },

    {
      containerName : 'popular movies page',
      containerEl : popularMoviesContainer,
    },

    {
      containerName : 'Top rated movies page',
      containerEl : topRatedMoviesContainer,
    },

    {
      containerName : 'Upcoming movies page',
      containerEl : upComingMoviesContainer,
    }
  ]
  // Searching for the first true return from the storage that is requested.
  const movieContainer = storage.find(relevantContainer => relevantContainer.containerName === requestedContainer)  
  return movieContainer
}

export {moviesStorage}