import { useState } from "react";
import "./App.css";
import Chat from "./components/Chat/Chat";
import Rooms from "./components/Rooms/Rooms";
import io from "socket.io-client";

const socket = io("http//localhost:3000");

function App() {
  const [roomName, setRoomName] = useState<string>("");

  const handleClick = (e) => {
    const btn = e.target.closest("button");

    if (btn) {
      setRoomName(btn.innerText);
    } else {
      return;
    }
  };

  return (
    <div onClick={handleClick}>
      <h1>Learn Socket.io</h1>
      <div>
        <h2>Messages displayed here:</h2>
      </div>
      <Rooms />
      <Chat roomName={roomName} />
    </div>
  );
}

export default App;
