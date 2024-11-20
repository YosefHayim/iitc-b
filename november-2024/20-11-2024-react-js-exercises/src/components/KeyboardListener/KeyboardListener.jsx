const KeyboardListener = ({ setState, state }) => {
  const handleKeyPress = (e) => {
    const keyPressed = e.key;
    if (keyPressed) {
      setState((state) => ({
        ...state,
        keyPressed: keyPressed,
      }));
      console.log(state.keyPressed);
    }
  };

  return (
    <div>
      <h1>Exercise SEVEN Keyboard Listener</h1>
      <label htmlFor="name">Keyboard Listener</label>
      <input type="text" id="name" onKeyDown={handleKeyPress} />
    </div>
  );
};

export default KeyboardListener;
