const isFalsy = (value) => {
  if (value) {
    console.log(`Value is valid: ${value} processing. `);
    return true;
  } else {
    console.error(`Value is not valid: ${value}. `);
    return false;
  }
};

export { isFalsy };
