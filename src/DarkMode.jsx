import React, { useState } from "react";
import "./styles/DarkMode.css";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={darkMode ? "container dark-mode" : "container light-mode"}>
      <h1>Dark Mode Toggle</h1>

      <div className="toggle-container">
        <span className="mode-text">
          {darkMode ? "Dark Mode" : "Light Mode"}
        </span>

        <div
          className={`custom-switch ${darkMode ? "dark" : ""}`}
          styles={{
            background: darkMode ? "green" : "#ccc",
          }}
          onClick={handleToggle}
        >
          <div className="custom-slider"></div>
        </div>
      </div>
    </div>
  );
};

export default DarkMode;
