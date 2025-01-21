import express from "express";
import dotenvFlow from "dotenv-flow";
import morgan from "morgan";
import { handleUndefinedRoutes } from "./middlewares/handle-undefined-routes.js";
import { logRequest } from "./middlewares/logger.js";
import { errorHandle } from "./middlewares/error-handling.js";
import { connectDB } from "./config/connect-db.js";
import booksRouter from "./routers/books-route.js";
import authorsRouter from "./routers/authors-route.js";
import reviewsRoute from "./routers/reviews-route.js";

dotenvFlow.config();

const app = express();

app.use(logRequest);
app.use(express.json());
app.use(morgan("tiny"));

const PORT = process.env.PORT || 3000;

connectDB();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to books server",
  });
});

// room for the routes.
app.use("/api/books", booksRouter);
app.use("/api/authors", authorsRouter);
app.use("/api/reviews", reviewsRoute);
app.use("*", handleUndefinedRoutes);
app.use(errorHandle);

app.listen(`${PORT}`, (req, res) => {
  console.log(`Server is running on port: ${PORT}`);
});
