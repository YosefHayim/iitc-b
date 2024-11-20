const FormInput = ({ state, setState }) => {
  const handleInput = (e) => {
    const name = e.target.value;
    setState({ ...state, name });
  };

  return (
    <div>
      <h1>Exercise TWO Input Form</h1>
      <h2>Input result: {state.name}</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" onChange={handleInput} />
    </div>
  );
};

export default FormInput;
