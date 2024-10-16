// Function to display the upcoming movies
const upComingMovies = () => {
  getData(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`, (data) => {
    data.results.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      upComingMoviesContainer.appendChild(movieCard);
    });
  });
};

export {upComingMovies}