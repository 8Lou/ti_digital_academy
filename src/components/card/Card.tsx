import React from 'react';
import './card.css';

interface CardProps {
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
        <div className="card">
            <img src="/image.jpg" alt="Фото товара" />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Card;
