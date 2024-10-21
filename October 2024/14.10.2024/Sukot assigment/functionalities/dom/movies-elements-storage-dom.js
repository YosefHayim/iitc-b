import { favMoviesContainer,popularMoviesContainer, popularOfTheDayContainer, popularOfTheWeekContainer, searchResultContainer, theatresContainer, topRatedMoviesContainer, upComingMoviesContainer } from "./storage-elements-dom.js"

const moviesStorage = (requestedContainer) => {
  const storage = [
    {
    containerName : 'Favorite movies page',
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
    },

    {
      containerName : 'Search result page ID + name',
      containerEl : searchResultContainer,
    }
  ]

  const movieContainer = storage.find(relevantContainer => relevantContainer.containerName === requestedContainer)
  return movieContainer
}

export {moviesStorage}