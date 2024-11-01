import {
  currentTheaterPage,
  genreResultContainerTitle,
  latestPopularPage,
  searchResultTitle,
  similarMoviesTitleContainer,
  templateTitle,
  topTrendingPage,
  upComingMoviePage,
} from "./storage-elements-dom.js";

// This function dynamically selects the appropriate title container based on the requested title container name (requestedTContainer).
// It finds the matching title container to allow DOM manipulation for various sections like search results, weekly hits, etc.
const titlesStorage = (requestedTContainer) => {
  // Storage array containing title containers with their names and corresponding DOM elements.
  const storage = [
    {
      containerTitleName: "Todays must watch page title",
      containerTitleEl: templateTitle,
    },
    {
      containerTitleName: "Weekly hits page title",
      containerTitleEl: templateTitle,
    },
    {
      containerTitleName: "Search result title page by ID",
      containerTitleEl: searchResultTitle,
    },
    {
      containerTitleName: "Search result title page by Name",
      containerTitleEl: searchResultTitle,
    },
    {
      containerTitleName: "Currently In Theatres title",
      containerTitleEl: currentTheaterPage,
    },
    {
      containerTitleName: "Upcoming movies title",
      containerTitleEl: upComingMoviePage,
    },
    {
      containerTitleName: "Top rated movies title",
      containerTitleEl: topTrendingPage,
    },
    {
      containerTitleName: "Popular movies title",
      containerTitleEl: latestPopularPage,
    },
    {
      containerTitleName: "genres movies title display",
      containerTitleEl: genreResultContainerTitle,
    },
    {
      containerTitleName: "Single movie page - similar movies container title",
      containerTitleEl: similarMoviesTitleContainer,
    },
  ];

  // Find and return the relevant title container based on the requested title container name.
  const matchedTitle = storage.find(
    (title) => title.containerTitleName === requestedTContainer
  );

  if (!matchedTitle) {
    console.error(`Error occurred while finding the container: ${title}.`);
  }

  return matchedTitle;
};

export { titlesStorage };
