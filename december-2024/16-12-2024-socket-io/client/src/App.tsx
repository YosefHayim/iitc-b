import { useState } from "react";
import "./App.css";
import Chat from "./components/Chat/Chat";
import Rooms from "./components/Rooms/Rooms";

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
      <Rooms />
      <Chat roomName={roomName} />
    </div>
  );
}

export default App;
