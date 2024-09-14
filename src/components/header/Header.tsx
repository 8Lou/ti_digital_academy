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
          <a href="#services" className="cart-link">
            Cart
            <span className="cart-badge"></span>
            <span className="cart-icon">
            <img className="menu__cart-svg" src="src\assets\img\Cart.svg" alt="Фото товара" />
            <img className="menu__bage-svg" src="src\assets\img\Bage.svg" alt="Фото товара" />

            </span>
          </a>
          <a href="#contact">Johnson Smith</a>
        </nav>
      </div>
    </header>
  );
};
export default Header;