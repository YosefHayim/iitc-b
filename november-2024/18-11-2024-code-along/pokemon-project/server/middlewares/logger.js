const fs = require("fs");

const logger = (req, res, next) => {
  const log = `${new Date()} - ${req.method} ${req.url}\n`;

  fs.appendFile("logs.txt", log, (err) => {
    if (err) console.error("Error writing log:", err);
  });

  next();
};

module.exports = logger;
