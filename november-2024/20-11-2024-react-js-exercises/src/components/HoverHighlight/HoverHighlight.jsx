const HoverHighlight = ({ state, setState }) => {
  const handleMouseEnter = (e) => {
    const enterDiv = e.target;

    if (enterDiv) {
      setState((state) => ({
        ...state,
        mouseEnterDiv: true,
      }));
      console.log(`Enter div`);
    }
    setState((state) => ({
      ...state,
      mouseEnterDiv: false,
    }));
  };

  const handleMouseExit = (e) => {
    const exitDiv = e.target;

    if (exitDiv) {
      setState((state) => ({
        ...state,
        mouseExitDiv: true,
      }));
      console.log(`Leave div`);
    }
    setState((state) => ({
      ...state,
      mouseExitDiv: false,
    }));
  };

  return (
    <div>
      <h1>Exercise SIX Hover Highlight</h1>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseExit}
        style={{ background: "green", width: "100%", height: "300px" }}
      ></div>
    </div>
  );
};

export default HoverHighlight;
