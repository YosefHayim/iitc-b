const isFalsy = (value, next) => {
  if (value) {
    console.log(`${value} is valid, processing request...`);
    return value;
  }
  const error = new Error();
  error.type = `NOT_FOUND`;
  next(error);
  console.error(`${value} is not valid, stopping request...`);
  return null;
};

export { isFalsy };
