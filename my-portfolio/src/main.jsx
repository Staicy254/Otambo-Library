import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Ensure styles are imported

import useThemeStore from "./context/ThemeContext"; // Import theme store


const Root = () => {
  const { darkMode } = useThemeStore(); // Get theme state

  return (
    <div className={darkMode ? "dark" : ""}>
      <App />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
