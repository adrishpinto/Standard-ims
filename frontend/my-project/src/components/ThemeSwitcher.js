import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon} from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeSwitcher = () => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  const light = <FaLightbulb size={35} />;
  const moon = <FaLightbulb size={35} color='yellow'/>
  return (
     <i className="hover:cursor-pointer " onClick={toggleDarkMode}>{darkMode ? moon : light}</i>
  );
};

export default ThemeSwitcher;
