const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const cookieParser = require("cookie-parser");

// Middlewares
const logger = require("./middlewares/logger.js");
const errorHandler = require("./middlewares/errorHandle.js");
const { undefinedRoutes } = require("./middlewares/undefinedRoutes.js");

// etc
const usersRoute = require("./routes/usersRoute.js");
const connectDb = require("./config/connectDb.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger);
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));
app.use(morgan("tiny"));

connectDb();

app.use("/users", usersRoute);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success",
    response: "Welcome to the Pokemon DB server",
  });
});

app.get("*", undefinedRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
