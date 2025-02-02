import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./ThemeLightAndDarkMode.css";

const ThemeLightAndDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="theme-light-and-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default ThemeLightAndDarkMode;
