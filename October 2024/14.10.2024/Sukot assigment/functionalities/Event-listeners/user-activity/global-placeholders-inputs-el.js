import { searchInputs, whiteGlassSearches } from "../../DOM/storage-elements-dom.js";
// This function is responsible to reset the input placeholder text when the user clicks on it, the text will disappear, else he is not clicking it
// Or not focusing it the search movies placeholder is returned.
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
