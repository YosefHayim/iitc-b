const isFalsy = (value) => {
  if (value) {
    return;
  } else {
    console.error(`Value is not valid: ${value}. `);
    return;
  }
};

export { isFalsy };
