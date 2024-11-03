const errorStorage = [
  {
    statusTitle: "NOT_FOUND",
    statusCode: 404,
    message: "Resource not found",
  },
  {
    statusTitle: "DUPLICATE",
    statusCode: 400,
    message: "Duplicate entry",
  },
  {
    statusTitle: "VALIDATION_ERROR",
    statusCode: 422,
    message: "Validation failed",
  },
  {
    statusTitle: "UNAUTHORIZED",
    statusCode: 401,
    message: "Unauthorized access",
  },
  {
    statusTitle: "FORBIDDEN",
    statusCode: 403,
    message: "Access forbidden",
  },
  {
    statusTitle: "BAD_REQUEST",
    statusCode: 400,
    message: "Bad request",
  },
  {
    statusTitle: "SERVER_ERROR",
    statusCode: 500,
    message: "Internal server error",
  },
  {
    statusTitle: "TOO_MANY_REQUESTS",
    statusCode: 429,
    message: "Too many requests",
  },
  {
    statusTitle: "NOT_ACCEPTABLE",
    statusCode: 406,
    message: "Not acceptable",
  },
  {
    statusTitle: "TIMEOUT",
    statusCode: 504,
    message: "Gateway timeout",
  },
];

export { errorStorage };
