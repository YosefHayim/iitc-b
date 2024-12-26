import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const SOCKET_URL = "http://localhost:3000"; // Replace with your backend URL

const ChatComponent: React.FC = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    // Initialize the socket connection
    const socketInstance = io(SOCKET_URL, {
      autoConnect: true,
      withCredentials: true, // Allow cookies and credentials
    });

    setSocket(socketInstance);

    // Listen for incoming messages
    socketInstance.on("message", (data: any) => {
      setMessages((prev) => [...prev, data.text]); // Append new messages
    });

    // Cleanup on unmount
    return () => {
      socketInstance.disconnect();
      console.log("Socket disconnected");
    };
  }, []);

  // Emit a message to the server
  const sendMessage = () => {
    if (socket && input.trim()) {
      socket.emit("message", { text: input });
      setInput(""); // Clear input field after sending
    }
  };

  return (
    <div>
      <h1>Chat Component</h1>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          height: "200px",
          overflowY: "auto",
        }}
      >
        <h3>Messages:</h3>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        style={{ width: "80%", marginRight: "10px" }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatComponent;
