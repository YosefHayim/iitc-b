// Function to create movie card
const createMovieCard = (movie) => {
  const movieCardDiv = document.createElement('div');
  movieCardDiv.classList.add('movie-card');
  movieCardDiv.id = `movieN-${movie.id}`;

  const starRatingImage = getStarRatingImage(movie.vote_average);

  movieCardDiv.innerHTML = `
    <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="movie-img" class="movie-img">
    <h1 class="title">${movie.original_title}</h1>
    <div class="img-container">
      <img src="${starRatingImage}" alt="rating-img" class="rating-img">
      <a class="play-button-btn"><img src="../images/play-button-icon.svg" alt="play-button-icon" class="play-button-img"></a>
      <button class="white-share-trailer-btn"><img src="../images/white-share-icon.svg" alt="white-share-img" class="white-share-img"></button>
      <button class="white-heart-trailer-btn"><img src="../images/white-heart-icon.svg" alt="white-heart-img" class="white-heart-img"></button>
      <h2 class="rating-number-txt">${movie.vote_average.toFixed(1)}</h2>
    </div>
  `;
  
  getMoviesTrailers(movie.id, movieCardDiv);
  return movieCardDiv;
};

export {createMovieCard}