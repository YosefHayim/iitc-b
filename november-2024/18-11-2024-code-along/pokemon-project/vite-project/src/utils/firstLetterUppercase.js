const capitalizeFirstLetter = (str) => {
  const updatedWord = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return updatedWord;
};

export default capitalizeFirstLetter;
