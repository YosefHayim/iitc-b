// Save the current Set to localStorage
const saveMoviesToLocalStorage = (movieIdList) => {
  const movieArray = Array.from(movieIdList); // Convert Set to Array
  localStorage.setItem("favoriteMovies", JSON.stringify(movieArray)); // Store as JSON
};

export { saveMoviesToLocalStorage };
