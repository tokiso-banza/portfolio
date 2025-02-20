"use client";
import { useEffect, useState, useCallback } from "react";
import "./Switcher.css";
import PropTypes from "prop-types";

const Switcher = ({ darkClassName = "dark-mode" }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => typeof window !== "undefined" && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setIsDarkMode(e.matches);

    // Initial setting & update on change
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const applyTheme = useCallback(() => {
    if (isDarkMode) {
      document.body.classList.add(darkClassName);
      return "☀️";
    } else {
      document.body.classList.remove(darkClassName);
      return "🌙";
    }
  }, [isDarkMode, darkClassName]);

  useEffect(() => {
    applyTheme();
  }, [applyTheme]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    console.log(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? darkClassName : ""}>
      {/* Content */}
    </div>
  );
};

Switcher.propTypes = {
  darkClassName: PropTypes.string,
};

export default Switcher;