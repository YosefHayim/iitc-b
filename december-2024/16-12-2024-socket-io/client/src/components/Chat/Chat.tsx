const Chat = ({ roomName }) => {
  if (!roomName) {
    roomName = "Not choosen";
  }

  return (
    <div>
      <h1>Chat of {roomName}</h1>
      <div>Messages displayed here:</div>
      <form>
        <input type="text" placeholder="Type your message..." />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Chat;
