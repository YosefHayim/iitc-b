const generateRandomId = (min = 1, max = 10000) => {
  return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
};
export default generateRandomId;
