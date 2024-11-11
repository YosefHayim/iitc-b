const express = require("express");
const morgan = require("morgan");
const usersRoute = require("./routers/users-route.js");
const connectDB = require("./config/connect-db.js");

const app = express();
const PORT = 3000;

app.use(morgan("tiny"));
app.use(express.json());

connectDB();

app.use("/api/users", usersRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
