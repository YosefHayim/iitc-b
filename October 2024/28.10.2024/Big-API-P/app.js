import express from "express";
import morgan from "morgan";
import { logRequest } from "./middleware/logger.js";
import jokesRoute from "./routes/jokesRoute.js";
import productsRoute from "./routes/productsRoute.js";
import usersRoute from "./routes/usersRoute.js";
import { errorHandle } from "./middleware/catch-error.js";

const app = express();
const PORT = process.env.port || 3000;

// Convert the responses to json.
app.use(express.json());
// Save each use of the app in the log txt file
app.use(logRequest);
// Log the use of app to the terminal
app.use(morgan("short"));

app.get("/", (req, res) => {
  res.send({
    status: "Server is active",
  });
});

// Get response server is active
app.get("/api/status", (req, res) => {
  res.send({
    status: "API is running",
  });
});

app.use("/api/jokes", jokesRoute);
app.use("/api/products", productsRoute);
app.use("/api/users", usersRoute);

app.use(errorHandle);

// Listen to anything happens on the server.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
