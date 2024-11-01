// Receives the movie's vote (as a float) and returns the corresponding star rating image.
const getStarRatingImage = (voteFloatingNumber) => {
  if (voteFloatingNumber < 2) return "★☆☆☆☆"; // 1 star
  else if (voteFloatingNumber < 4) return "★★☆☆☆"; // 2 stars
  else if (voteFloatingNumber < 6) return "★★★☆☆"; // 3 stars
  else if (voteFloatingNumber < 8) return "★★★★☆"; // 4 stars
  else if (voteFloatingNumber <= 10) return "★★★★★"; // 5 stars
  else return "☆☆☆☆☆"; // No stars if out of range
};

export { getStarRatingImage };
