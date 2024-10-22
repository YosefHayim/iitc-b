const isNameToLong = (title) => {
  let movieName;

  if (title.split(' ').length >= 3) {
    movieName = title.split(' ').slice(0, 2).join(' ');    

  } else {
    movieName = title.split(' ').slice(0, 2).join(' ');
  }
  return movieName
} 

export {isNameToLong}