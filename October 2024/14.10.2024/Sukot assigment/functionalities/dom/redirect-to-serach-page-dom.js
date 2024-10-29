// Redirects the user to the homepage (index.html) with the search query, either by ID or name.
const redirectToSearchPage = (params) => {
  window.location.href = `/October 2024/14.10.2024/Sukot assigment/pages/search.html?${params.toString()}`;
};

export { redirectToSearchPage };
