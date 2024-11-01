// Checks if the movie has no trailer and sets a warning image on the play button if no trailer is available.
const noTrailerImg = (buttonImage) => {
  buttonImage.src = `/images/user-activity/no-trailer-available-img.svg`;
  return buttonImage;
};

export { noTrailerImg };
