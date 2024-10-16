// Function to reset the placeholder text in the search input
const resetPlaceholder = () => {
  searchInputs.forEach((searchInput, index) => {
    const whiteGlassSearch = whiteGlassSearches[index];
    searchInput.addEventListener('focus', () => {
      searchInput.placeholder = '';
      if (whiteGlassSearch) whiteGlassSearch.style.display = 'none';
    });

    searchInput.addEventListener('blur', () => {
      searchInput.placeholder = 'Search movies';
      if (whiteGlassSearch) whiteGlassSearch.style.display = 'block';
    });
  });
};

export {resetPlaceholder}