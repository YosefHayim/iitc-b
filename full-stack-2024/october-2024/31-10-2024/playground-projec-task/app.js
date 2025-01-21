import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { logRequest } from "./middleware/logger.js";
import jokesRoute from "./routes/jokes-route.js";
import productsRoute from "./routes/products-route.js";
import usersRoute from "./routes/users-route.js";
import { connectDB } from "./config/connect-db.js";
import { errorHandle } from "./middleware/error-handling.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("tiny"));
app.use(logRequest);

connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to the server.");
});

app.use("/api/jokes", jokesRoute);
app.use("/api/products", productsRoute);
app.use("/api/users", usersRoute);
app.use("*", (req, res) => {
  res.status(404).json({ message: "This is nota valid server path." });
});

app.use(errorHandle);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
