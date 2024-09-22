import React from 'react';
import './header.css';
import Logo from '../logo/Logo';
import { useNavigate, Link } from 'react-router-dom';
import cartIcon from '../../assets/img/Cart.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../../types'; 

const Header: React.FC = () => {
  const navigate = useNavigate(); 
  const { cart } = useSelector((state: RootState) => state.cart);
  const totalQuantity = cart?.totalQuantity || 0;

  const handleCartClick = () => {
    navigate('/basket'); 
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
        <Link to="/" onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>Catalog</Link>
        <Link to="/" onClick={handleFaqClick}>FAQ</Link>
          <span className="cart-link" onClick={handleCartClick}>
            Cart
            {totalQuantity > 0 && (
              <span className="cart__badge">{totalQuantity}</span>
            )}
            <span className="cart-icon">
              <img src={cartIcon} className='menu__cart-svg' alt='Иконка корзины' />
            </span>
          </span>
          <Link to="/undefined" onClick={handleUserClick} >Johnson Smith</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;