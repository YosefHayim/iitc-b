const isBodyEmpty = (bodyReq, next) => {
  for (const [key, value] of Object.entries(bodyReq)) {
    if (!key || !value) {
      const error = new Error(
        `Invalid request: missing or empty value for key "${key}"`
      );
      error.type = `BAD_REQUEST`;
      next(error);
      return;
    }
    
  }
};

export { isBodyEmpty };
