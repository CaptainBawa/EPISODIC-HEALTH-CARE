import React, { useState } from 'react';
import apple from '../assets/apple.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <div>
        <img src={apple} alt="Episodic Health Care" />
      </div>
      <div className="header-text">
        <h3>Boafo Adom Nyame Ent.</h3>
        <h5>Wholesale and Retails of Apple and Gripes</h5>
      </div>
      <div className="background">
        <button type="button" className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? (
            <div className="close-icon">X</div>
          ) : (
            <>
              <span />
              <span />
              <span />
            </>
          )}
        </button>
      </div>
      <div className={`menu-items ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#location">Location</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
