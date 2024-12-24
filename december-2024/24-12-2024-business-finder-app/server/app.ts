import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import morgan from "morgan";

import connectDB from "./config/connectDb";
import errorHandler from "./middlewares/errorHandler";

import undefinedRoutes from "./middlewares/undefinedRoutes";
import logger from "./middlewares/logger";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan("tiny"));
app.use(logger);

connectDB();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: "Success",
    response: "Welcome to the business finder app server.",
  });
});

app.all("*", undefinedRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
