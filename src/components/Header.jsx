import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>AluraFlix</h1>
      </div>
      <nav className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/new-video">Nuevo Video</Link>
      </nav>
    </header>
  );
};

export default Header;
