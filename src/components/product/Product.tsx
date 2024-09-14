import React from 'react';
import './product.css';
import Button from '../button/Button';

const Product: React.FC = () => {
  const handleClick = () => {
    // добавить логику для обработки нажатия кнопки
    console.log('Button clicked!');
  };

  return (
    <div className="one__product">
      <div className="one__product-container">
        <h1 className="one__product-title">Заголовок товара</h1>
        <div className="one__product-content">
          <div className="one__product-column one__product-column--large">
            <img src="https://via.placeholder.com/520x400" alt="Основное фото" className="one__product-main-image" />
            <div className="one__product-slider">
              {[...Array(6)].map((_, i) => (
                <img key={i} src={`https://via.placeholder.com/100x100?text=${i + 1}`} alt={`Preview ${i + 1}`} className="one__product-thumb" />
              ))}
            </div>
          </div>
          <div className="one__product-column one__product-column--small">
            <h2 className="one__product-subtitle">Название товара</h2>
            <div className="one__product-rating">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`one__product-star ${i < 4 ? 'one__product-star--active' : ''}`}>★</span>
              ))}
            </div>
            <p className="one__product-description">Описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="one__product-info">
              <p>Дополнительная информация 1</p>
            </div>
            <div className="one__product-info">
              <p>Описание характеристик</p>
            </div>
            <div className="one__product-info">
              <p>Еще какая-то информация</p>
            </div>
          </div>
        </div>
        <div className="one__product-button-container">
          <Button className="button" label="Show more" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Product;