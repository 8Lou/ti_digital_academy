import React, { useState } from 'react';
import './shoppingCard.css';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';

interface ShoppingCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  quantity: number;
}

const ShoppingCard: React.FC<ShoppingCardProps> = ({
  id,
  title,
  price,
  discountPercentage,
  thumbnail,
  quantity,
}) => {
  const navigate = useNavigate();
  // const products = useSelector((state) => state.cart.products);
  
  const [count, setCount] = useState(0);
  
  const newPrice = price - (price * discountPercentage / 100);

  const handleImageClick = () => {
    navigate(`/product/${id}`);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(`Добавлено ${count + 1} товара(ов) ${title}`);
    setCount(0);
  };

    const handleDelete = () => {
    setCount(0);
  };

  return (
    <div className="shoppingCard__container">
      <div className="shoppingCard-content">
        <div className="shoppingCard-one">
          <img className="shoppingCard__image" src={thumbnail} alt={title} />
        </div>
        <div className="shoppingCard-two">
          <h5 className='card__title' onClick={handleImageClick}>{title}</h5>
          <p className='price'>${newPrice.toFixed(2)}</p>
        </div>
      </div>
      <div className="shoppingCard-three">
        {quantity === 0 ? (
          <Button className='cart__button' onClick={handleAddToCart} label='Add to Cart'>
            <img src="src/assets/img/Cart.svg" alt="Кнопка Корзина" />
          </Button>
        ) : (
          <div className="buttons-container">
            <Button className="button__cart-minus cart__button" onClick={handleDecrement} label={''}>
              <img src="src/assets/img/Cart-minus.svg" alt="Минус" />
            </Button>
            <span className="cart__count">{quantity} {quantity === 1 ? 'item' : 'items'}</span>
            <Button className="button__cart-plus cart__button" onClick={handleIncrement} label={''}>
              <img src="src/assets/img/Cart-plus.svg" alt="Плюс" />
            </Button>
          </div>
        )}
        {quantity > 0 && (
          <h6 className="shoppingCard__delete" onClick={handleDelete}>Delete</h6>
        )}
      </div>
    </div>
  );
};

export default ShoppingCard;