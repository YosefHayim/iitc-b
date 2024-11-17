import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const reduceCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <button onClick={increaseCount}>+</button>
      <p>{count}</p>
      <button onClick={reduceCount}>-</button>
    </div>
  );
}

export default App;
