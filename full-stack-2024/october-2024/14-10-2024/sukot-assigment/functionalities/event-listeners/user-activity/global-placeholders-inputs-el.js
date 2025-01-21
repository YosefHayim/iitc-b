import {
  searchInputs,
  whiteGlassSearches,
} from "../../dom/storage-elements-dom.js";

// Resets the input placeholder text when the user focuses on the input field.
// If the input field loses focus, the placeholder text is restored.
const resetPlaceholder = () => {
  searchInputs.forEach((searchInput, index) => {
    const whiteGlassSearch = whiteGlassSearches[index];

    // Remove the placeholder text when the input field is focused.
    searchInput.addEventListener("focus", (ev) => {
      ev.preventDefault();
      searchInput.placeholder = ""; // Clear the placeholder
      if (whiteGlassSearch) whiteGlassSearch.style.display = "fixed"; // Change display of associated element
    });

    // Restore the placeholder text when the input field loses focus.
    searchInput.addEventListener("blur", (ev) => {
      ev.preventDefault();
      searchInput.placeholder = "Search movies"; // Reset the placeholder
      if (whiteGlassSearch) whiteGlassSearch.style.display = "block"; // Reset display of associated element
    });
  });
};

export { resetPlaceholder };
