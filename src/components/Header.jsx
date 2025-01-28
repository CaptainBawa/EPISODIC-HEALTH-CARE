import React from 'react';
import ehc from '../assets/ehc.png';

const Header = () => (
  <header>
    <div>
      <img src={ehc} alt="Episodic Health Care" />
    </div>
    <div className="background">
      <button className="menu__icon">
        <span />
        <span />
        <span />
      </button>
    </div>
  </header>
);

export default Header;
