import { useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
