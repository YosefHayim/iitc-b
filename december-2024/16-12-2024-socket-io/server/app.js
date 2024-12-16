const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

// Importing required modules:
// - `express`: For building the web server.
// - `http.createServer`: To create the HTTP server to be used with `socket.io`.
// - `socket.io`: Enables real-time, bidirectional communication between client and server.
// - `cors`: Middleware to handle cross-origin requests.

const app = express();
const server = createServer(app); // Create an HTTP server from the Express app.
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Allow WebSocket connections from the frontend at this origin.
  },
});

const PORT = process.env.PORT || 3000; // Define the port, using environment variables or default to 3000.

app.use(cors({ origin: "http://localhost:5173" }));
// Enable CORS for requests from the frontend origin to allow API calls.

app.get("/", (req, res) => {
  res.status(200).send("Server is running, ready for learning socket.io");
});
// Define a basic HTTP GET endpoint to verify the server is running.

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);
  // Triggered when a new client connects. `socket` represents the connection instance.
  // `socket.id` is a unique identifier for the connected client.

  socket.on("join-room", (roomName) => {
    socket.join(roomName);
    console.log(`${socket.id} joined room: ${roomName}`);
    // Listens for a "join-room" event from the client.
    // `socket.join(roomName)` adds the client to a specific room for targeted communication.
  });

  socket.on("message", (data) => {
    console.log("Message received:", data);
    io.to(data.roomName).emit("message", data);
    // Listens for a "message" event from the client, typically carrying a room name and message.
    // Broadcasts the message to all clients in the specified room using `io.to(roomName).emit`.
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
    // Triggered when a client disconnects, logging the disconnection.
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// Starts the HTTP server and logs the URL for access.
