import express from "express";
import dotenvFlow from "dotenv-flow";
import { handleUndefinedRoutes } from "./middleware/handle-undefined-routes.js";
import { logRequest } from "./middleware/logger.js";
import { errorHandle } from "./middleware/error-handling.js";
import { connectDB } from "./config/connect-db.js";

dotenvFlow.config();

const app = express();

app.use(logRequest);
app.use(express.json());
app.use(morgan("tiny"));

const PORT = process.env.PORT || 3000;

connectDB();

// room for the routes.

app.use("*", handleUndefinedRoutes);
app.use(errorHandle);

app.listen(`${PORT}`, (req, res) => {
  console.log(`Server is running on port: ${PORT}`);
});
