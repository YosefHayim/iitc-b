const errorHandler = (err, res) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
  console.error(`Error: ${err.message}`);
};

module.exports = errorHandler;
