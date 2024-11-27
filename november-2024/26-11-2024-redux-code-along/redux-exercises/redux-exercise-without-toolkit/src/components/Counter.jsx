import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Amount: {counter}</h1>
      <h3>Click to increase or decrease</h3>
      <button onClick={() => dispatch({ type: "INCREASE" })}>Increase</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>Decrease</button>
    </div>
  );
};

export default Counter;
