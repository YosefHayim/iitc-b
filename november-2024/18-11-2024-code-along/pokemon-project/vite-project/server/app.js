const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDb = require("./config/connectDb.js");
const usersRoute = require("./routes/usersRoute.js");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

connectDb();

app.use("/users", usersRoute);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success",
    response: "Welcome to the Pokemon DB server",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
