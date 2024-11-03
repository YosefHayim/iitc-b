const isBodyEmpty = (bodyReq, next) => {
  if (Object.keys(bodyReq).length === 0) {
    const error = new Error();
    error.message = `You must provide data in the body request.`;
    error.type = `BAD_REQUEST`;
    next(error);
    return;
  }
};

export { isBodyEmpty };
