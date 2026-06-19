import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VideoDetail from './pages/VideoDetail';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import CategoryBar from './components/CategoryBar';
import { useTheme } from './ThemeContext';

function App() {
  const { darkMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <div
        className={`app ${darkMode ? 'dark' : 'light'}`}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${darkMode ? 'chibi-cat-bg-dark.png' : 'chibi-cat-bg-light.png'})`,
          backgroundSize: 'cover',
          minHeight: '100vh',
          transition: 'background 0.3s ease'
        }}
      >
        <Navbar onSearch={setSearchQuery} />
        <CategoryBar />
        <div className="main-layout">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home searchQuery={searchQuery} />} />
            <Route path="/video/:id" element={<VideoDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
