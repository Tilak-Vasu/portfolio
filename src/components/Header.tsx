/* src/components/Header.tsx */

import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <nav className="header-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todo">To-Do</NavLink>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>


      <ThemeToggle />

    </header>
  );
};

export default Header;