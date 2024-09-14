import React from 'react';
import './productCart.css';
import Button from '../button/Button';

const ProductCart: React.FC = () => {
  const handleClick = () => {
    // добавить логику для обработки нажатия кнопки
  };

  return (
    <div className="one__product">
      <div className="one__product-container">
        <h1 className="one__product-title">Заголовок 1</h1>
        <div className="one__product-content">
          <div className="one__product-column one__product-column--large">
            {/* Содержимое первой колонки (776 x 566) */}
          </div>
          <div className="one__product-column one__product-column--small">
            {/* Содержимое второй колонки (356 x 135) */}
          </div>
        </div>
        <div className="one__product-button">
          <Button className='button' label="Show more" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default ProductCart;