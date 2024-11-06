import { errorStorage } from "../config/error-storage.js";

const errorHandle = (err, req, res, next) => {
  if (err) {
    console.error(`Error occurred: ${err.message}`);
    const chosenError = errorStorage.find(
      (e) => e.statusTitle === err.type
    ) || {
      status: `Error`,
      response: `An unexpected error occurred durning the middlewares: ${err.message}`,
    };

    res.status(chosenError.statusCode || 500).json({
      message: err.message || chosenError.message,
    });
  }
};

export { errorHandle };
