import React, { useState } from 'react';
import ehc from '../assets/ehc.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <div>
        <img src={ehc} alt="Episodic Health Care" />
      </div>
      <h3>Episodic Health Care</h3>
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
