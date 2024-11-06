const errorHandle = (err, req, res, next) => {
  if (err) {
    console.error(`Error occurred: ${err.message}`);

    res.status(500).json({
      message: err.message,
    });
  }
};

export { errorHandle };
