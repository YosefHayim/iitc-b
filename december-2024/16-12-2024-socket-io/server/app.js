const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send("Server is running, ready for learning socket.io");
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
