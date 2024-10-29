const errorHandle = (err, req, res, next) => {
  console.error("Error:", err.message || err);

  res.status(err.status || 500).send({
    status: "Error",
    message: err.message || "An unexpected error occurred",
  });
};

export { errorHandle };
