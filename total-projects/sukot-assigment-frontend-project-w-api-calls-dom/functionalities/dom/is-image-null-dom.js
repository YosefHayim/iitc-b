// Receives the image source from the API call; sets a default image if the source is falsy.
const isImageNull = (imageSource) => {
  if (!imageSource) {
    // Set a default image if the source is null or undefined to maintain layout symmetry.
    imageSource = `/images/user-activity/template-null-img.svg`;
  } else {
    // If the image source exists, set the URL to the actual image from the API.
    imageSource = `https://image.tmdb.org/t/p/original/${imageSource}`;
  }
  return imageSource;
};

export { isImageNull };
