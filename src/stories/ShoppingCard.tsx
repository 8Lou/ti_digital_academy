import React, { useState } from 'react';
import './shoppingCard.css';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import MidlePhoto from './MidlePhoto.png';

interface ShoppingCardProps {
  title: string;
  description: string;
  id: string;
}

const ShoppingCard: React.FC<ShoppingCardProps> = ({ id }) => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate(`/product/${id}`);
  };

  const cardsData = Array.from({ length: 1 }, () => ({
    title: 'Essence Mascara Lash Princess',
    description: '$110',
  }));

  const [count, setCount] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Функция для обработки нажатия на кнопку корзины
  const handleCartClick = () => {
    setCount(1); // Установка счетчика на 1
    setShowButtons(true); // Показываем кнопки для увеличения/уменьшения
  };

  // Функция для обнуления счетчика
  const handleDelete = () => {
    setCount(0);
    setShowButtons(false); // Скрываем кнопки увеличения/уменьшения
  };

  return (
    <div className="shoppingCard__container">
      <div className="shoppingCard-content">
        <div className="shoppingCard-one">
          <img className="card__image" src={MidlePhoto} alt="Фото товара" />
        </div>

        <div className="shoppingCard-two">
          {cardsData.map((card, index) => (
            <div key={index}>
              <h5 className='card__title' onClick={handleImageClick}>{card.title}</h5>
              <p className='price'>{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="shoppingCard-three">
        {count === 0 ? (
          <Button className='cart__button' onClick={handleCartClick} label={''}>
            <img src="src/assets/img/Cart.svg" alt="Кнопка Корзина" />
          </Button>
        ) : (
          <div className="buttons-container">
            <Button className="button__cart-minus cart__button" onClick={handleDecrement} label={''}>
              <img src="src/assets/img/Cart-minus.svg" alt="Минус" />
            </Button>
            <span className="cart__count">{count} {count === 1 ? 'item' : 'items'}</span>
            <Button className="button__cart-plus cart__button" onClick={handleIncrement} label={''}>
              <img src="src/assets/img/Cart-plus.svg" alt="Плюс" />
            </Button>
          </div>
        )}

        {count > 0 && (
          <h6 className="shoppingCard__delete" onClick={handleDelete}>Delete</h6>
        )}
      </div>
    </div>
  );
};

export default ShoppingCard;
