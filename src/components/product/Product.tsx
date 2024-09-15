import React from 'react';
import './product.css';
import Button from '../button/Button';
import Image from '../../assets/img/MainPhoto.png';
import Mini from '../../assets/img/mini.png';
import Mini1 from '../../assets/img/mini1.png';
import Mini2 from '../../assets/img/mini2.png';
import Mini3 from '../../assets/img/mini3.png';
import Mini4 from '../../assets/img/mini4.png';
import Mini5 from '../../assets/img/mini5.png';
import starIcon from '../../assets/img/Star.svg';

const Product: React.FC = () => {

  const handleClick = () => {
    alert('Товар добавлен в корзину!');
  };

  const miniImages = [Mini, Mini1, Mini2, Mini3, Mini4, Mini5];

  const totalStars = 5;
  const activeStars = 4;

  return (
    <div className="one__product">
      <div className="one__product-container">
        <div className="one__product-content">

          <div className="one__product--large">
            <img src={Image} alt="Фото продукта в сладере" className="one__product-main-image" />
            <div className="one__product-slider">
              {miniImages.map((src, i) => (
                <img key={i} src={src} alt={`Preview ${i + 1}`} className="one__product-thumb" />
              ))}
            </div>
          </div>

          <div className="one__product--small">
            <h1 className="one__product-subtitle">Essence Mascara Lash Princess</h1>
            <div className="one__product-rating">
              <div className="one__product-stars">
              {[...Array(totalStars)].map((_, i) => (
                <img
                key={i}
                src={starIcon}
                alt={`Star ${i + 1}`}
                className={`one__product-star ${i < activeStars ? 'active' : 'inactive'}`}
                />
              ))}
              </div>
              <h5 className="one__product-star-text">electronics, selfie accessories</h5>
            </div>
            <h4 className="one__product-description">In Stock - Only 5 left!</h4>
            <div className="one__product-info">
              <p>The Essence Mascara Lash Princess is a popular mascara known for its <br/>volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.</p>
            </div>
            <h5 className="one__product-warranty">1 month warranty</h5>
            <h5 className="one__product-info">Ships in 1 month</h5>
            
            <div className="one__product-button-container">
              <Button className="button" label="Show more" onClick={handleClick} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Product;