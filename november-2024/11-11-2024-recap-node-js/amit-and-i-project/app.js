const express = require("express");
const morgan = require("morgan");
const usersRoute = require("./routers/users-route.js");

const app = express();
const PORT = 3000;

app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Amit and Joseph project.",
  });
});

app.use("/api/users", usersRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
