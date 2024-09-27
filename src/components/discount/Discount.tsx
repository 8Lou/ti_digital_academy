import React from 'react';
import './discount.css';
import Button from '../button/Button';
import Plus from '../../assets/img/Cart-plus.svg';
import Minus from '../../assets/img/Cart-minus.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../../types';
import { selectProductInCart } from '../../store/selectors';
import { updateCartQuantity, addProductToCard } from '../../store/cartSlice';
import { useAppDispatch } from '../../hooks/store-hooks';

interface DiscountProps {
  id: number;
  productId: number;
  price: number;
  discountPercentage: number;
  cartId: number;
}

const Discount: React.FC<DiscountProps> = ({ productId, price, discountPercentage, cartId }) => {
  const dispatch = useAppDispatch();

  const cart = useSelector((state: RootState) => state.cart.cart);
  const productInCart = useSelector((state: RootState) => selectProductInCart(state, productId));
  const quantity = productInCart?.quantity || 0;
  const newPrice = price - (price * discountPercentage / 100);

  const handleUpdateQuantity = (newQuantity: number) => {
    if (cart && cart.id) {
      dispatch(updateCartQuantity({ cartId: cart.id, productId, quantity: newQuantity }));
    } else {
      console.error('Cart ID is undefined');
    }
  };

  const handleIncrement = () => {
    handleUpdateQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      handleUpdateQuantity(quantity - 1);
    } else if (quantity === 1) {
      handleUpdateQuantity(0);
    }
  };

  const handleAddToCart = () => {
    if (cart && cart.id) {
      dispatch(addProductToCard({ cartId: cart.id, productId }));
    } else {
      console.error('Cart ID is undefined');
    }
  };

  return (
    <div className="discount__container">
      <div className="discount__price-content">
        <div className="discount__wrap-one">
          <h1 className="discount__price">${newPrice.toFixed(2)}</h1>
          <h5 className="discount__old-price">${price.toFixed(2)}</h5>
        </div>
        <div className="discount__wrap-two">
          <div className="vertical-line"></div>
          <h5 className="discount__price-label">Your discount:</h5>
          <h5 className="discount__price-value">{discountPercentage}%</h5>
        </div>
      </div>

      {quantity === 0 ? (
        <Button className="discount__button" onClick={handleAddToCart} label="Add to cart" />
      ) : (
        <div className="buttons__container">
          <Button className="button__cart-minus cart__button" onClick={handleDecrement} label="">
            <img src={Minus} alt="Минус" />
          </Button>
          <span className="cart__count">{quantity} {quantity === 1 ? 'item' : 'items'}</span>
          <Button className="button__cart-plus" onClick={handleIncrement} label="">
            <img src={Plus} alt="Плюс" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Discount;