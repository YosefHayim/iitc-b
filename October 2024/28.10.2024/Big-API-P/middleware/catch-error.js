// Define the error-handling function
const errorHandle = (err, req, res, next) => {
  if (!req) {
    res.status(400).send(`Your request is not valid, please check requirements.`)
  }

  console.error("Error:", err.message || err);

  res.status(err.status).send({
    status: "Error",
    message: err.message || "An unexpected error occurred",
  });
}

export { errorHandle }
