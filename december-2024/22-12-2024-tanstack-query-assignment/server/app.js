const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

require("dotenv").config();

const userRouter = require("./routes/userRoute");
const postRouter = require("./routes/postRoutes");
const errorHandler = require("./middlewares/errorHandler");
const connectDB = require("./config/connectDb");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "success",
    response: "Welcome to the tanstack learning API server",
  });
});

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

app.all("*", (req, res) => {
  res.status(404).json({
    error: "Route not found",
    message: `The requested URL '${req.originalUrl}' was not found on this server.`,
  });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
