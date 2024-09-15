import React from 'react';
import './header.css';
import Logo from '../logo/Logo';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate(); 

  const handleCartClick = () => {
    navigate('/cart'); 
  };

  const handleCatalogClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate('/');

    setTimeout(() => {
      const element = document.getElementById('catalog');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); 
      }
    }, 100); 
  };
  
  const handleFaqClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate('/');
    
    setTimeout(() => {
      const element = document.getElementById('faq');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); 
      }
    }, 100); 
  };
  
  const handleUserClick = () => {
    navigate('/undefined'); 
  };

  return (
    <header className="header">
      <div className="header__content">
        <Logo />
        <nav className="header__nav">
          <a href="/" onClick={handleCatalogClick} >Catalog</a>
          <a href="/" onClick={handleFaqClick} >FAQ</a>
          <a href="#services" className="cart-link" onClick={handleCartClick}>
            Cart
            <span className="cart-badge"></span>
            <span className="cart-icon">
              <img className="menu__cart-svg" src="src\assets\img\Cart.svg" alt="Фото товара" />
              <img className="menu__bage-svg" src="src\assets\img\Bage.svg" alt="Фото товара" />
            </span>
          </a>
          <a href="/undefined" onClick={handleUserClick} >Johnson Smith</a>
        </nav>
      </div>
    </header>
  );
};export default Header;