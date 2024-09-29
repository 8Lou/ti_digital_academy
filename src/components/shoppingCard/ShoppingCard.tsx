import React from 'react';
import './shoppingCard.css';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
import { updateCartQuantity } from '../../store/cartSlice';
import { useAppDispatch } from '../../hooks/store-hooks';
import { useGetProductByIdQuery } from '../../store/api';

interface ShoppingCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  quantity: number;
  cartId: number;
}

const ShoppingCard: React.FC<ShoppingCardProps> = ({
  id,
  title,
  price,
  discountPercentage,
  thumbnail,
  quantity,
  cartId,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const newPrice = price - (price * discountPercentage / 100);
  const { data: product } = useGetProductByIdQuery(id);
  const stock = product?.stock || 0;  

  
  const handleImageClick = () => {
    navigate(`/product/${id}`);
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    handleUpdateQuantity(cartId, id, newQuantity);
};

  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      handleUpdateQuantity(cartId, id, newQuantity);
    }
  };

  const handleAddToCart = () => {
    handleUpdateQuantity(cartId, id, 1);
  };

  const handleDelete = () => {
    handleUpdateQuantity(cartId, id, 0);
  };

  const handleUpdateQuantity = (cartId: number, productId: number, quantity: number) => {
    dispatch(updateCartQuantity({ cartId, productId, quantity }));
  };

  const isAddToCartVisible = quantity === 0;

  return (
    <div className={`shoppingCard__container ${isAddToCartVisible ? 'overlay' : ''}`}>
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
        {quantity === 0 && isAddToCartVisible ? (
          <Button className='cart__button' onClick={handleAddToCart} label='Add to Cart'>
            <img src="src/assets/img/Cart.svg" alt="Кнопка Корзина" />
          </Button>
        ) : (
          <div className="buttons-container">
            <Button className="button__cart-minus cart__button" onClick={handleDecrement} label={''}>
              <img src="src/assets/img/Cart-minus.svg" alt="Минус" />
            </Button>
            <span className="cart__count">{quantity} {quantity === 1 ? 'item' : 'items'}</span>
            <Button className="button__cart-plus cart__button" onClick={handleIncrement} label={''} disabled={quantity === stock}>
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