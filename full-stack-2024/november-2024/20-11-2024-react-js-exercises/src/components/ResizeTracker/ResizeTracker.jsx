import { useEffect } from "react";

const ResizeTracker = () => {
  const handleResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log(`Window resized to ${width}x${height}`);
  };

  useEffect(() => {
    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1>Exercise EIGHT Resize Tracker</h1>
      <div
        style={{
          width: "100%",
          background: "yellow",
          height: "400px",
        }}
      ></div>
    </div>
  );
};

export default ResizeTracker;
