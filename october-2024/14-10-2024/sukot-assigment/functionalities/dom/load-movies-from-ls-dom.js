// Load the Set from localStorage
function loadMoviesFromLocalStorage() {
  const storedMovies = localStorage.getItem("favoriteMovies");
  if (storedMovies) {
    const movieArray = JSON.parse(storedMovies); // Convert JSON string back to array
    return new Set(movieArray); // Convert array back to Set
  }
  return new Set(); // Return an empty Set if nothing is stored
}

export { loadMoviesFromLocalStorage };
