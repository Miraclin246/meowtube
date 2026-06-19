import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

function Sidebar() {
  const { darkMode } = useTheme();

  return (
    <div className={`sidebar ${darkMode ? 'dark' : 'light'}`}>
      <div className="sidebar-card">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Subscriptions</Link>
          <Link to="/">Library</Link>
          <Link to="/">History</Link>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
