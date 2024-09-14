import React from 'react';
import './card.css';

interface CardProps {
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
        <div className="card">
            <div className="card__image-container">
                <h3 className="card__overlay">Show details</h3>
                <img className="card__image" src="src\assets\img\image.png" alt="Фото товара" />
            </div>
            <div className="card__content">
                <div>
                <h5 className='card__title'>{title}</h5>
                <p className='price'>{description}</p>
            </div>
                <button className='card__button'><img src="src\assets\img\Cart.svg" alt="Кнопка Корзина" /></button>
            </div>
        </div>
    );
};

export default Card;
