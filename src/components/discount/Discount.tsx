import React from 'react';
import './discount.css';
import Button from '../button/Button';
import Plus from '../../assets/img/Cart-plus.svg';
import Minus from '../../assets/img/Cart-minus.svg';

interface DiscountProps {
  price: number;
  discountPercentage: number;
  newPrice: number;
}

const Discount: React.FC<DiscountProps> = ({ price, discountPercentage, newPrice }) => {

  const [count, setCount] = React.useState(0);
  const [showButtons, setShowButtons] = React.useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleClick = () => {
    setCount(1);
    setShowButtons(true);
  };

  const totalPrice = count > 0 ? count * newPrice : newPrice;

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

      {count > 0 ? (
        <div className="buttons__container">
          <Button className="button__cart-minus cart__button" onClick={handleDecrement} label={''}>
            <img src={Minus} alt="Минус" />
          </Button>
          <span className="cart__count">{count} {count === 1 ? 'item' : 'items'}</span>
          <Button className="button__cart-plus" onClick={handleIncrement} label={''}>
            <img src={Plus} alt="Плюс" />
          </Button>
        </div>
      ) : (
        <Button className="discount__button" label="Add to cart" onClick={handleClick} />
      )}
      {count > 0}
    </div>
  );
};

export default Discount;
