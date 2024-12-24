const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const morgan = require("morgan");

const connectDB = require("./config/connectDb");
const errorHandler = require("./middlewares/errorHandler");
const userRouter = require("./routers/userRoutes");
const businessRouter = require("./routers/businessRoutes");
const undefinedRoutes = require("./middlewares/undefinedRoutes");
const logger = require("./middlewares/logger");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan("tiny"));
app.use(logger);

connectDB();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    response: "Welcome to the business finder app server.",
  });
});

app.use("/api/users", userRouter);
app.use("/api/business", businessRouter);

app.all("*", undefinedRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
