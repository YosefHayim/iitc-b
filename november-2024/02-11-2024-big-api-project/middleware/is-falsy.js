const isFalsy = (value, next) => {
  if (value) {
    console.log(`${value} is valid, processing request...`);
    return value;
  }
  const error = new Error();
  error.type = `NOT_FOUND`;
  console.error(`${value} is not valid, stopping request...`);
  next(error);
  return null; 
};

export { isFalsy };
