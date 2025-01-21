const MouseTracker = () => {
  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    console.log(`Mouse position: X=${x}, Y=${y}`);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        background: "purple",
        height: "300px",
        width: "100%",
      }}
    >
      <h1>Exercise FOUR mouse tracker</h1>
    </div>
  );
};

export default MouseTracker;
