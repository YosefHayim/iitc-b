const DropDownSelector = ({ setState, state }) => {
  const handleChange = (e) => {
    const chosenDropDown = e.target.value;
    setState((state) => ({
      ...state,
      dropDownChoice: chosenDropDown,
    }));
  };
  return (
    <div>
      <h1>Exercise FIVE DropDown Selector</h1>
      <select value={state.dropDownChoice} onChange={handleChange}>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
    </div>
  );
};

export default DropDownSelector;
