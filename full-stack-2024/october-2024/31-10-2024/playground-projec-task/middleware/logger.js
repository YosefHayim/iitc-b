import fs from "fs";

const logRequest = (req, res, next) => {
  const log = `
  Activity received at: ${new Date().toLocaleString()}
  Method : ${req.method}
  Path received at: ${req.originalUrl}
  Status Code: ${res.statusCode}
  Body: ${JSON.stringify(req.body)} \n
  `;

  console.log(log);

  fs.appendFile("./logs.txt", log, (err) => {
    if (err) {
      console.error("There was an error appending the data to logs.txt", err);
    }
  });

  next();
};

export { logRequest };
