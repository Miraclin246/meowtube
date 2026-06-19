import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';

function Navbar({ onSearch }) {
  const { darkMode, toggleTheme } = useTheme();
  const [query, setQuery] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(query);
    }
  };

  return (
    <div className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <img src={`${process.env.PUBLIC_URL}/assets/pastel-logo.png`} alt="Meowtube Logo" className="logo" />
      <img src={`${process.env.PUBLIC_URL}/assets/paw-play-icon.png`} alt="Paw Play" className="paw-icon" />
      <input 
        type="text" 
        placeholder="Search videos..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="search-bar" 
      />
      <button className="toggle-btn" onClick={toggleTheme}>
        {darkMode ? "🐾 Dark Paw" : "🐾 Light Paw"}
      </button>
    </div>
  );
}

export default Navbar;
