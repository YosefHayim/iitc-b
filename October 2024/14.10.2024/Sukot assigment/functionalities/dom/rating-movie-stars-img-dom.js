const getStarRatingImage = (voteFloatingNumber) => {

  if (voteFloatingNumber < 2) return "../images/user-activity/one-star-icon.svg";

  else if (voteFloatingNumber < 4) 
    return "../images/user-activity/two-stars-icon.svg";

  else if (voteFloatingNumber < 6) 
    return "../images/user-activity/three-stars-icon.svg";

  else if (voteFloatingNumber < 8) 
    return "../images/user-activity/four-stars-icon.svg";

  else if (voteFloatingNumber <= 10) 
    return "../images/user-activity/five-stars-icon.svg";

  else {
    return "../images/user-activity/no-stars-rating.svg";
  }
};

export {getStarRatingImage}