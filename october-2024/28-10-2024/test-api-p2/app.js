import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { logRequest } from "./middleware/logger.js";
import jokesRoute from "./routes/jokesRoute.js";
import productsRoute from "./routes/productsRoute.js";
import usersRoute from "./routes/usersRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("tiny"));
app.use(logRequest);

app.use("/api/jokes", jokesRoute);
app.use("/api/products", productsRoute);
app.use("/api/users", usersRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
