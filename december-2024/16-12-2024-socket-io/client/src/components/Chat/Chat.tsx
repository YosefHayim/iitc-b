import { useRef, useState, useEffect } from "react";
import io from "socket.io-client";

// Establish a connection to the socket.io server at the specified URL.
const socket = io("http://localhost:3000");

const Chat = ({ roomName = "Not chosen" }) => {
  const ref = useRef(); // Reference for the input field to easily access its value.
  const [messages, setMessages] = useState([]); // State to store the list of messages.

  useEffect(() => {
    // When the component mounts, emit "join-room" to join the specified room.
    socket.emit("join-room", roomName);

    // Listen for "message" events from the server and update the messages state.
    socket.on("message", (msg) => setMessages((prev) => [...prev, msg]));

    // Cleanup when the component unmounts:
    // - Emit "leave-room" (optional cleanup event).
    // - Remove the "message" listener.
    return () => {
      socket.emit("leave-room", roomName);
      socket.off("message");
    };
  }, [roomName]); // Effect runs whenever the `roomName` changes.

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission.
    const message = ref.current.value.trim(); // Get the input value and trim whitespace.
    if (message) {
      // Emit a "message" event to the server with the room name and message content.
      socket.emit("message", { roomName, message });
      ref.current.value = ""; // Clear the input field.
    }
  };

  return (
    <div>
      <h1>Chat of {roomName}</h1>
      <div>
        <h2>Messages:</h2>
        {/* Render the list of messages */}
        {messages.map((msg, index) => (
          <p key={index}>{msg.message}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={ref} placeholder="Type your message..." />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Chat;
