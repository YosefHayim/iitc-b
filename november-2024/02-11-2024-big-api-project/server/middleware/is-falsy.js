const isFalsy = (value, next) => {
  if (value) {
    return true;
  } else {
    return false;
  }
  next();
};

export { isFalsy };
