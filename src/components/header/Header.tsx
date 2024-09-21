import React, { useEffect } from 'react';
import './header.css';
import Logo from '../logo/Logo';
import { useNavigate, Link } from 'react-router-dom';
import cartIcon from '../../assets/img/Cart.svg';
import bagIcon from '../../assets/img/bage.svg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../../store/cartSlice';
import { RootState } from '../../../types'; 

const Header: React.FC = () => {
  const navigate = useNavigate(); 
  // const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.cart);
  // const { totalQuantity } = useSelector((state: RootState) => state.cart);
  const totalQuantity = cart?.totalQuantity || 0;

//   useEffect(() => {
//   if (!cart) {
//     dispatch(fetchCart(6)); // ID пользователя пока 5
//   }
// }, [dispatch, cart]);

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
              {/* <img src={bagIcon} className='menu__bage-svg' alt="Иконка бэйджа" /> */}
            </span>
          </span>
          <Link to="/undefined" onClick={handleUserClick} >Johnson Smith</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;