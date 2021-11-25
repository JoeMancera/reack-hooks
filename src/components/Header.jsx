import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const {isDarkMode, setTheme} = useContext(ThemeContext);

  if(isDarkMode){
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
  }

  const handleDarkMode = () => {
    setTheme(!isDarkMode);
    if(isDarkMode){
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  return (
    <div className="header">
      <h1>ReactHooks Shop</h1>
      <button type="button" onClick={handleDarkMode}>{isDarkMode ? 'Dark mode' : 'Light mode'}</button>
    </div>
  );
}

export default Header;
