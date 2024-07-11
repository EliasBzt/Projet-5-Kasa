import React from 'react';
import logo from '../assets/logoWhite.png'; // Assurez-vous que le chemin est correct
import '../styles/Footer.scss'; // Assurez-vous de créer ce fichier CSS pour styliser le footer

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa Logo" className="footer-logo" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
