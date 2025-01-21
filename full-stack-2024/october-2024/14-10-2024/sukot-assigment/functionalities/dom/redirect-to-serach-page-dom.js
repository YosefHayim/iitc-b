// Redirects the user to the homepage (index.html) with the search query, either by ID or name.
const redirectToSearchPage = (params) => {
  window.location.href = `/pages/search.html?${params.toString()}`;
};

export { redirectToSearchPage };
