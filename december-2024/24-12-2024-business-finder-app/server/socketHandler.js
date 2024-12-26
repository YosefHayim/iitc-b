const io = require("io");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    // Custom event handlers
    socket.on("message", (data) => {
      console.log("Message received:", data);
      io.emit("message", data); // Broadcast to all clients
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};
