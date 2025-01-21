import { useState } from "react";
import "./App.css";
import Parent from "./components/Parent/Parent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Parent />
    </div>
  );
}

export default App;
