const express = require("express");
const morgan = require("morgan");
const usersRoute = require("./routers/users-route.js");
const connectDB = require("./config/connect-db.js");
const logger = require("./middlewares/logger.js");
const errorHandle = require("./middlewares/error-handle.js");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(logger);

connectDB();

app.use("/api/users", usersRoute);
app.use(errorHandle);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port: ${process.env.PORT}`);
});
