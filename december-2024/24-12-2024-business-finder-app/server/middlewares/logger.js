const winston = require("winston");

const initialLogger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: "logs.txt" })],
});

const logger = (req, res, next) => {
  initialLogger.info({
    method: req.method,
    url: req.url,
    headers: req.headers,
    query: req.query,
    body: req.body,
    timestamp: new Date().toISOString(),
  });
  next();
};

module.exports = logger;
