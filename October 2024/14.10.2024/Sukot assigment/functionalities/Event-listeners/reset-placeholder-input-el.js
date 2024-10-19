import { searchInputs, whiteGlassSearches } from "../DOM/storage-elements-dom.js";

// Function to reset placeholder text and manage the visibility of white glass search icon
const resetPlaceholder = () => {
  // Loop through each search input element
  searchInputs.forEach((searchInput, index) => {
    // Get the corresponding white glass icon for the current search input
    const whiteGlassSearch = whiteGlassSearches[index];

    // When the search input gains focus
    searchInput.addEventListener('focus', () => {
      // Clear the placeholder text
      searchInput.placeholder = '';
      // If the white glass icon exists, display it in a fixed position
      if (whiteGlassSearch) whiteGlassSearch.style.display = 'fixed';
    });

    // When the search input loses focus
    searchInput.addEventListener('blur', () => {
      // Restore the placeholder text to "Search movies"
      searchInput.placeholder = 'Search movies';
      // If the white glass icon exists, change display back to 'block'
      if (whiteGlassSearch) whiteGlassSearch.style.display = 'block';
    });
  });
};

export { resetPlaceholder };
