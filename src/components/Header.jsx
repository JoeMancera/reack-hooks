import React, { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const [isDarkMode, setDarkMode] = useState(true);
  const color = useContext(ThemeContext);

  if(isDarkMode){
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }

  const handleDarkMode = () => {
    setDarkMode(!isDarkMode);
    if(isDarkMode){
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  return (
    <div className="header">
      <h1 style={{ color }}>ReactHooks Shop</h1>
      <button type="button" onClick={handleDarkMode}>{isDarkMode ? 'Dark mode' : 'Light mode'}</button>
    </div>
  );
}

export default Header;
