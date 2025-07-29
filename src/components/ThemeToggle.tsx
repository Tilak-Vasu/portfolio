/* src/components/ThemeToggle.tsx */

import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`theme-toggle-switch ${theme}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* The thumb now CONTAINS the icons */}
      <div className="switch-thumb">
        <div className="icon sun">☀️</div>
        <div className="icon moon">🌙</div>
      </div>
    </button>
  );
};

export default ThemeToggle;