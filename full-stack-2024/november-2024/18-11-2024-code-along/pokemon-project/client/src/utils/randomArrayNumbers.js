const randomizeArray = () => {
  const randomArray = [];
  for (let i = 0; i < 4; i++) {
    const randomNumber = Math.round(Math.random() * 1000);
    randomArray.push(randomNumber);
  }
  return randomArray;
};

export default randomizeArray;
