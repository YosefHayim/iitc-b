import { useRef } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

const Chat = ({ roomName = "Not chosen" }) => {
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = ref.current.value.trim();
    if (message) {
      socket.emit("message", { roomName, message });
      ref.current.value = "";
    }
  };

  return (
    <div>
      <h1>Chat of {roomName}</h1>
      <div>Messages displayed here:</div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={ref} placeholder="Type your message..." />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Chat;
