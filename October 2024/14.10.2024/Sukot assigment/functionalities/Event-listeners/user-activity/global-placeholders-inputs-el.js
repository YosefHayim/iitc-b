import { searchInputs, whiteGlassSearches } from "../../DOM/storage-elements-dom.js";

const resetPlaceholder = () => {
  searchInputs.forEach((searchInput, index) => {
    const whiteGlassSearch = whiteGlassSearches[index];

    searchInput.addEventListener('focus', (ev) => {
      ev.preventDefault()
      searchInput.placeholder = '';
      if (whiteGlassSearch) whiteGlassSearch.style.display = 'fixed';
    });

    searchInput.addEventListener('blur', (ev) => {
      ev.preventDefault()
      searchInput.placeholder = 'Search movies';
      if (whiteGlassSearch) whiteGlassSearch.style.display = 'block';
    });
  });
};

export { resetPlaceholder };
