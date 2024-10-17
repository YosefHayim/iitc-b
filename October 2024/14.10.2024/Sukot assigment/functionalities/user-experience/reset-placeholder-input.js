import {searchInputs,whiteGlassSearches} from "../elements/domEls.js"

const resetPlaceholder = () => {
  searchInputs.forEach((searchInput, index) => {
    const whiteGlassSearch = whiteGlassSearches[index];
    searchInput.addEventListener('focus', () => {
      searchInput.placeholder = '';
      if (whiteGlassSearch) whiteGlassSearch.style.display = 'fixed';
    });

    searchInput.addEventListener('blur', () => {
      searchInput.placeholder = 'Search movies';
      if (whiteGlassSearch) whiteGlassSearch.style.display = 'block';
    });
  });
};

export {resetPlaceholder}