import React, { useState } from 'react';
import './card.css';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../../types';

interface CardProps {
    product: Product,
}
    const Card: React.FC<CardProps> = ({ product}) => {
    const navigate = useNavigate();
    const { id, title, thumbnail, price, discountPercentage } = product;

    const [count, setCount] = useState(0);
    const [showButtons, setShowButtons] = useState(false);

    const newPrice = price - (price * discountPercentage / 100);

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

    const handleImageClick = () => {
        navigate(`/product/${id}`); 
    };

    return (
        <div className="card">
            <div className="card__image-container" onClick={handleImageClick}>
                <h3 className="card__overlay">Show details</h3>
                <img className="card__image" src={thumbnail} alt="Фото товара" />
            </div>

            <div className="card__content">
                <div>
                    <h5 className='card__title' onClick={handleImageClick} >{title}</h5>
                    <p className='price'>{newPrice.toFixed(2)}</p>
                </div>

                
                {count > 0 ? (
                    <div className="buttons__container">
                        <Button className="button__cart-minus cart__button" onClick={handleDecrement} label={''}>
                            <img src="src/assets/img/Cart-minus.svg" alt="Минус" />
                        </Button>
                        <span className="cart__count">{count} {count === 1 ? 'item' : 'items'}</span>
                        <Button className="button__cart-plus" onClick={handleIncrement} label={''}>
                            <img src="src/assets/img/Cart-plus.svg" alt="Плюс" />
                        </Button>
                    </div>
                ) : (
                    <Button className='cart__button' onClick={handleClick} label={''}>
                        <img src="src/assets/img/Cart.svg" alt="Кнопка Корзина" />
                    </Button>
                )}
                {count > 0 }
            </div>
        </div>
    );
};

export default Card;