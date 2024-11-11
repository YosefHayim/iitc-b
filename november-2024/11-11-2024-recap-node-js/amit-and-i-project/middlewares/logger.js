const fs = require("fs");

const logger = (req, res, next) => {
  const log = `
    Time: ${new Date().toLocaleString()} 
    Method: ${req.method} 
    URL: ${req.originalUrl} 
    IP: ${req.ip} 
    Body: ${JSON.stringify(req.body)}
  `;

  // Append the log to a file
  fs.appendFile("request_logs.txt", log + "\n", (err) => {
    if (err) console.error("Logging error:", err);
  });

  console.log(log); // Optional: logs to the console as well
  next();
};

module.exports = logger;
