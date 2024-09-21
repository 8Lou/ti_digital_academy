import React, { useState } from 'react';
import './shoppingCard.css';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
import MidlePhoto from '../../assets/img/MidlePhoto.png';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cartSlice';
import '../../../types';

interface ShoppingCardProps {
  title: string;
  description: string;
  id: string;
  price: number;
  discountPercentage: number; // Добавлено для скидки
  thumbnail: string; // Добавлено для изображения
  }

const ShoppingCard: React.FC<ShoppingCardProps> = ({ id, title, description, price, discountPercentage, thumbnail }) => {
  // console.log('Продукт:', { id, title, description });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newPrice = useSelector((state) => state.cart.newPrice); 
  const [count, setCount] = useState(0);

  const handleImageClick = () => {
    navigate(`/product/${id}`);
  };

  // const cardsData = Array.from({ length: 1 }, () => ({
  //   title: 'Essence Mascara Lash Princess',
  //   description: '$110',
  // }));

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // const handleCartClick = () => {
  //   setCount(1);
  //   setShowButtons(true); 
  // };

  // const handleDelete = () => {
  //   setCount(0);
  //   setShowButtons(false); 
  // };

  // const handleAddToCart = () => {
  //   if (count > 0) {
  //     const product = {
  //       id: Number(id),
  //       title,
  //       price,
  //       quantity: count,
  //       discountedTotal: price * count,
  //     };
  //     dispatch(addToCart(product));
  //     setCount(0);
  //   }
  // };

  // const handleDelete = () => {
  //   setCount(0);
  //   dispatch(removeFromCart(Number(id)));
  // };

  // const handleAddToCart = () => {
  //   if (product) {
  //     dispatch(addToCart(product));
  //   }
  // };

  const handleAddToCart = () => {
    const product = {
      id: Number(id),
      title,
      price,
      quantity: count + 1,
      discountedTotal: price * (count + 1),
    };
    dispatch(addToCart(product));
    setCount(0);
  };

  const handleDelete = () => {
    dispatch(removeFromCart(Number(id)));
    setCount(0);
  };
  
  return (
    <div className="shoppingCard__container">
      <div className="shoppingCard-content">
        <div className="shoppingCard-one">
          <img className="card__image" src={MidlePhoto} alt="Фото товара" />
        </div>

        <div className="shoppingCard-two">
          {/* {cardsData.map((card, index) => (
            <div key={index}> */}
              <h5 className='card__title' onClick={handleImageClick}>{title}</h5>
              <p className='price'>${newPrice ? newPrice : price}</p>
              {/* </div> */}
          {/* ))} */}
        </div>
      </div>

      <div className="shoppingCard-three">
        {count === 0 ? (
          <Button className='cart__button' onClick={handleAddToCart} label='Add to Cart'>
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
