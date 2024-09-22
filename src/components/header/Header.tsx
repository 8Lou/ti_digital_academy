import React, {useEffect} from 'react';
import './header.css';
import Logo from '../logo/Logo';
import { useNavigate, Link } from 'react-router-dom';
import cartIcon from '../../assets/img/Cart.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../types'; 
import { selectTotalCartQuantity } from '../../store/selectors';
import { fetchCart } from '../../store/cartSlice';

interface HeaderProps {
  cart: ReturnType<typeof selectCart> | null;
}
const Header: React.FC<HeaderProps> = ({ cart }) => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const {  loading } = useSelector((state: RootState) => state.cart);
  const totalQuantity = useSelector(selectTotalCartQuantity);

  // useEffect(() => {
  //   if (!cart) {
  //     dispatch(fetchCart(33));// ID пользователя
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
            {!loading && totalQuantity > 0 && (
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