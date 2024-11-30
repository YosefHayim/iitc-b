const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDb = require("./config/connectDb.js");
const usersRoute = require("./routes/usersRoute.js");
const logger = require("./middlewares/logger.js");
const errorHandler = require("./middlewares/errorHandle.js");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("tiny"));

connectDb();

app.use("/users", usersRoute);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success",
    response: "Welcome to the Pokemon DB server",
  });
});
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
