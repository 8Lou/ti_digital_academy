import React from 'react';
import './header.css';
import Logo from '../logo/Logo';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__content">
      <Logo />
      <nav className="header__nav">
        <a href="#home">Catalog</a>
        <a href="#about">FAQ</a>
        <a href="#services">Cart</a>
        <a href="#contact">Johnson Smith</a>
      </nav>
      </div>        
    </header>
  );
};
export default Header;