import React, { useEffect } from 'react';
import './header.css';
import Logo from '../logo/Logo';
import { useNavigate, Link } from 'react-router-dom';
import cartIcon from '../../assets/img/Cart.svg';
import { selectTotalCartQuantity } from '../../store/selectors';
import { useGetCurrentUserQuery } from '../../store/api';
import { fetchCart } from '../../store/cartSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';

const Header = ({ isLoginPage }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.cart);
  const totalQuantity = useAppSelector(selectTotalCartQuantity);
  const { data: user } = useGetCurrentUserQuery('userId')

  useEffect(() => {
    if (user) {
      dispatch(fetchCart(user.id));
    }
  }, [user, dispatch]);

  const handleCartClick = () => {
    navigate('/basket');
  };

  return (
    <header className="header">
      <div className="header__content">
        <Logo />
        {!isLoginPage && (
          <nav className="header__nav">
            <Link to="/" onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>Catalog</Link>
            <Link to="/" onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}>FAQ</Link>
            <Link to="/basket" className="cart-link" onClick={handleCartClick}>
              Cart
              {!loading && totalQuantity > 0 && (
                <span className="cart__badge">{totalQuantity}</span>
              )}
              <span className="cart-icon">
                <img src={cartIcon} className='menu__cart-svg' alt='Иконка корзины' />
              </span>
            </Link>
            {user ? (
              <span>
                {user.firstName} {user.lastName}
              </span>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;