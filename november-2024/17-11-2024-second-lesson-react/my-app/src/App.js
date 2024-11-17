import "./App.css";

let currentCount = 0;

function App() {
  const increaseCount = () => {
    currentCount++;
  };

  const reduceCount = () => {
    currentCount--;
  };

  return (
    <div className="App">
      <button onClick={increaseCount}>+</button>
      <p>{currentCount}</p>
      <button onClick={reduceCount}>-</button>
    </div>
  );
}

export default App;
