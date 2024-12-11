import { useContext } from "react";
import { countContext } from "../App";

const ButtonIncrease = () => {
  const countNumber = useContext(countContext);
  if (!countNumber) {
    throw new Error(
      "Count number Context must be used within a countNumberContext.Provider"
    );
  }
  const { count, setCount } = countNumber;

  return (
    <div>
      <h1>Count useContext</h1>
      <p>{count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrease
      </button>
    </div>
  );
};

export default ButtonIncrease;
