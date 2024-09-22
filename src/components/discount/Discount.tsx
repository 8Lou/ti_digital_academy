import React from 'react';
import './discount.css';
import Button from '../button/Button';
import Plus from '../../assets/img/Cart-plus.svg';
import Minus from '../../assets/img/Cart-minus.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../types';
import { selectProductInCart } from '../../store/selectors';

interface DiscountProps {
  productId: number;
  price: number;
  discountPercentage: number;
  quantity: number;
   // newPrice: number;
}

const Discount: React.FC<DiscountProps> = ({ productId, price, discountPercentage }) => {

  const dispatch = useDispatch();
  const [showButtons, setShowButtons] = React.useState(false);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const productInCart = useSelector((state) => selectProductInCart(state, productId));
  const quantity = productInCart?.quantity || 0;
  const newPrice = price - (price * discountPercentage / 100);
  const count = productInCart ? productInCart.quantity : 0;
  const totalPrice = quantity > 0 ? quantity * newPrice : newPrice;
  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };

  // const handleDecrement = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };

  // const handleClick = () => {
  //   setCount(1);
  //   setShowButtons(true);
  // };

  // const totalPrice = count > 0 ? count * newPrice : newPrice;

  return (
    <div className="discount__container">

      <div className="discount__price-content">
        <div className="discount__wrap-one">
        <h1 className="discount__price">${totalPrice.toFixed(2)}</h1>
        <h5 className="discount__old-price">${price.toFixed(2)}</h5>
        </div>

        <div className="discount__wrap-two">
          <div className="vertical-line"></div>
          <h5 className="discount__price-label">Your discount:</h5>
          <h5 className="discount__price-value">{discountPercentage}%:</h5>
        </div>
      </div>

      {quantity  > 0 ? (
        <div className="buttons__container">
          <Button className="button__cart-minus cart__button" label={''}>
            <img src={Minus} alt="Минус" />
          </Button>
          <span className="cart__count">{quantity } {quantity  === 1 ? 'item' : 'items'}</span>
          <Button className="button__cart-plus" label={''}>
            <img src={Plus} alt="Плюс" />
          </Button>
        </div>
      ) : (
        <Button className="discount__button" label="Add to cart" />
      )}
      {count > 0}
    </div>
  );
};

export default Discount;