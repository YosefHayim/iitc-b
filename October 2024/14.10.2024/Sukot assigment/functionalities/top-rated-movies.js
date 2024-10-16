// Function to display top-rated movies
const topRatedMovies = () => {
  getData(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${apiKey}`, (data) => {
    data.results.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      topRatedMoviesContainer.appendChild(movieCard);
    });
  });
};

export {topRatedMovies}