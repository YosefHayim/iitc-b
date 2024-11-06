import fs from "fs";

const logRequest = (req, res, next) => {
  const log = `
  Activity received at: ${new Date().toLocaleString()}
  Method: ${req.method}
  Full Path: ${req.protocol}://${req.get("host")}${req.baseUrl}${
    req.originalUrl
  }
  Status Code: ${res.statusCode}
  Headers: ${JSON.stringify(req.headers)}
  Query Parameters received: ${JSON.stringify(req.query)}
  Body: ${JSON.stringify(req.body)} \n
  `;

  fs.appendFile("./logs.txt", log, (err) => {
    if (err) {
      console.error("Error appending to logs.txt", err);
    }
  });

  next();
};

export { logRequest };
