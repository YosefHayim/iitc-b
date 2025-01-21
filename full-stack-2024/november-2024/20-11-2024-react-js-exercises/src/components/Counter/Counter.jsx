const Counter = ({ setState, state }) => {
  const handleClick = () => {
    setState({ ...state, count: state.count + 1 });
  };
  return (
    <div>
      <h1>Exercise ONE Button: {state.count}</h1>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
};

export default Counter;
