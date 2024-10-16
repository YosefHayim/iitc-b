// Function to display movies currently in theaters
const currentlyInTheaters = () => {
  getData(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, (data) => {
    data.results.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      theatresContainer.appendChild(movieCard);
    });
  });
};

export {currentlyInTheaters}