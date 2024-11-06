const isBodyEmpty = (bodyReq, next) => {
  for (const [key, value] of Object.entries(bodyReq)) {
    if (!key || !value) {
      return res.status(404).json({
        msg: "Failed",
        reason: `You have forgotten to provide a key :${key} or value :${value}`,
      });
    }
  }
  next();
};

export { isBodyEmpty };
