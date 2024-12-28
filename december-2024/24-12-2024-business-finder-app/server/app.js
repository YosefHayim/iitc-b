const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./config/connectDb");
const errorHandler = require("./middlewares/errorHandler");
const userRouter = require("./routers/userRoutes");
const businessRouter = require("./routers/businessRoutes");
const googleAuthRouter = require("./routers/oAuthRoutes");
const undefinedRoutes = require("./middlewares/undefinedRoutes");
const logger = require("./middlewares/logger");
const socketHandler = require("./socketHandler");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});
socketHandler(io);
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    credentials: true, // Allow credentials (cookies)
  })
);
app.use(morgan("tiny"));
app.use(cookieParser());

connectDB();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    response: "Welcome to the business finder app server.",
  });
});

app.use("/api/users", userRouter);
app.use("/oAuth", googleAuthRouter);
app.use("/api/business", businessRouter);

app.all("*", undefinedRoutes);

app.use(errorHandler);

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
