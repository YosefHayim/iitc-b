const isParamsValid = (paramsId) => {
  if (!paramsId) {
    const error = new Error();
    error.type = `BAD_REQUEST`;
    return error;
  }
};

export { isParamsValid };
