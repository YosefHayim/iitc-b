import React, { useContext, useState, createContext, ReactNode } from "react";
import "./App.css";

// Define the type for the context value
interface ThemeContextType {
  themeColor: string;
  setThemeColor: React.Dispatch<React.SetStateAction<string>>;
}

// Create the ThemeContext with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function App() {
  const [themeColor, setThemeColor] = useState<string>("Light");

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      <div>
        <h1>Exercises of useContext</h1>
        <ThemeDisplay />
      </div>
    </ThemeContext.Provider>
  );
}

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

export default App;
