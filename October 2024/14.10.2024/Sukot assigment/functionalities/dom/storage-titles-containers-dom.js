import { currentTheaterPage, latestPopularPage, searchResultTitle, templateTitle, topTrendingPage, upComingMoviePage } from "./storage-elements-dom.js";
// This function stores the requestedTContainer which stands for title to do a DOM on it as well.
// The requestedTContainer it being located by the containerTitleName and than we receive back the relevant container to do on it DOM
// E.g. searchResultTitle is being used for either movie name query or ID query so we manipulate these two in different h1 text. 
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
  return matchedTitle;
};

export { titlesStorage };
