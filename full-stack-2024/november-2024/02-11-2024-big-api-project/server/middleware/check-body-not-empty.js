const isBodyEmpty = (req, res, next) => {
  if (req.method === "POST") {
    for (const [key, value] of Object.entries(req.body)) {
      if (!key || !value) {
        return res.status(404).json({
          status: "Failed",
          response: `You have forgotten to provide a key :${key} or value :${value}`,
        });
      }
    }
  }
  next();
};

export { isBodyEmpty };
