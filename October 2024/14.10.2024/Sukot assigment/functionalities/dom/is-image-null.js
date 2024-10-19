const isImageNull = (imageSource) => {
    
  if (imageSource === null) {
    imageSource = `/IITC-B/October 2024/14.10.2024/Sukot assigment/images/user-activity/template-null-img.svg`;
    return imageSource;

  } else {
    imageSource = `https://image.tmdb.org/t/p/original/${imageSource}`;
    return imageSource;
  }
}

export { isImageNull };
