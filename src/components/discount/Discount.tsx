import React from 'react';
import './discount.css';
import Button from '../button/Button';

const Discount: React.FC = () => {
  const handleClick = () => {
  };

  return (
    <div className="product-container">

      <div className="cart__price-content">
      <div className="cart__price-one">
        <h1 className="product-price">$7.17</h1>
        <h5 className="product-old-price">$9.99</h5>
      </div>

      <div className="cart__price-two">
        <div className="vertical-line"></div>
        <h5 className="cart__price-label">Your discount:</h5>
        <h5 className="cart__price-value">14.5%:</h5>
      </div>
      </div>

      <Button className="button" label="Add to cart" onClick={handleClick} />
    </div>
  );
};

export default Discount;
