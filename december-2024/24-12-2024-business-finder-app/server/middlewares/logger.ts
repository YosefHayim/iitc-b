import { NextFunction, Request, Response } from "express";
import winston from "winston";

const initialLogger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: "logs.txt" })],
});

const logger = (req: Request, res: Response, next: NextFunction) => {
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

export default logger;
