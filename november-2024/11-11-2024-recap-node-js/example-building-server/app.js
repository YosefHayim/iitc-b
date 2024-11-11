const express = require("express");

const PORT = 3000;
const app = express();

// http://localhost:3000/
app.get("/", (req, res) => {
  res.send(200).json({
    message: "Welcome to the server",
  });
});

app.listen(`${PORT}`, (req, res) => {
  console.log(`Server is running on port: ${PORT}`);
});
