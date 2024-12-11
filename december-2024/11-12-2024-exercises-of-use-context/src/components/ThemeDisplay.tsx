import { useContext } from "react";
import { ThemeContext } from "../App";

// A component to consume the theme context
function ThemeDisplay() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeDisplay must be used within a ThemeContext.Provider");
  }

  const { themeColor, setThemeColor } = context;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setThemeColor((prevTheme) => (prevTheme === "Light" ? "Dark" : "Light"));
  };

  return (
    <div onClick={handleClick}>
      <button>{themeColor}</button>
    </div>
  );
}

export default ThemeDisplay;
