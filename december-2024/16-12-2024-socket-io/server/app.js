const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 3000;

app.use(cors, {
  origin: "http://localhost:5137",
});

app.get("/", (req, res) => {
  res.status(200).send("Server is running, ready for learning socket.io");
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
