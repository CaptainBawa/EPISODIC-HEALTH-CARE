import React, { useState} from 'react';
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
      <div className="background">
        <button className="menu__icon" onClick={toggleMenu}>
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
      {menuOpen && (
        <div className="menu__items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
