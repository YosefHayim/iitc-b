import { currentTheaterPage, latestPopularPage, searchResultTitle, templateTitle, topTrendingPage, upComingMoviePage } from "./storage-elements-dom.js";

const titlesStorage = (requestedTContainer) => {
  const storage = [
    {
      containerTitleName: 'Todays must watch page title',
      containerTitleEl: templateTitle,
    },
    {
      containerTitleName: 'Weekly hits page title',
      containerTitleEl: templateTitle
    },
    {
      containerTitleName: 'Search result title page by ID',
      containerTitleEl: searchResultTitle,
    },
    {
      containerTitleName: 'Search result title page by Name',
      containerTitleEl: searchResultTitle,
    },
    {
      containerTitleName: 'Weekly hits page title',
      containerTitleEl: templateTitle
    },
    {
      containerTitleName: 'Currently In Theatres title',
      containerTitleEl: currentTheaterPage,
    },
    {
      containerTitleName: 'Upcoming movies title',
      containerTitleEl: upComingMoviePage,
    },
    {
      containerTitleName: 'Top rated movies title',
      containerTitleEl: topTrendingPage,
    },
    {
      containerTitleName: 'Popular movies title',
      containerTitleEl: latestPopularPage,
    },
  ];
  // Find the first matched title
  const matchedTitle = storage.find(title => title.containerTitleName === requestedTContainer);
  console.log(matchedTitle);
  
  return matchedTitle;
};

export { titlesStorage };
