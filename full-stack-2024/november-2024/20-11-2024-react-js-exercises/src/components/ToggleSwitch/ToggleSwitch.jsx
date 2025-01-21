import { useState } from "react";
import styles from "./ToggleSwitch.module.css";

const ToggleSwitch = ({ state, setState }) => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleClick = () => {
    if (backgroundColor === `white`) {
      setBackgroundColor("black");
      setState((state) => ({
        ...state,
        toggle: true,
      }));
    } else {
      setBackgroundColor("white");
      setState((state) => ({
        ...state,
        toggle: false,
      }));
    }
  };

  return (
    <div className={styles.ThreeContainer} style={{ backgroundColor }}>
      <h1>Exercise THREE Toggle Switch</h1>
      <button onClick={handleClick}>Click me to change background</button>
    </div>
  );
};

export default ToggleSwitch;
