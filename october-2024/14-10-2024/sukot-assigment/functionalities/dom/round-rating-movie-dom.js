// Rounds the movie rating to one decimal place (e.g., 7.542 becomes 7.5).
const roundMovieRating = (movieRating) => {
  if (!movieRating) {
    let roundValue = 0;
    return roundValue;
  }

  let roundValue = movieRating.toFixed(1);
  return roundValue;
};

export { roundMovieRating };
