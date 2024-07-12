import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import '../styles/Header.scss'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Kasa Logo" className="logo" />
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À propos</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
