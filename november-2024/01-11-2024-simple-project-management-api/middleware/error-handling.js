import { errorStorage } from "../config/error-storage.js";

const errorHandle = (err, req, res, next) => {
  const chosenError = errorStorage.find((e) => e.statusTitle === err.type) || {
    statusCode: 500,
    message: "An unexpected error occurred",
  };

  res.status(chosenError.statusCode).json({
    message: chosenError.message,
  });
};

export { errorHandle };