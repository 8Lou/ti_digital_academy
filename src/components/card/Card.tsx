import React from 'react';
import './card.css';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../../types';
import { selectProductInCart } from '../../store/selectors';
import { RootState } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { addProductToCard, updateCartQuantity } from '../../store/cartSlice';


interface CardProps {
    product: Product,
}

const Card: React.FC<CardProps> = ({ product }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { cart } = useAppSelector((state: RootState) => state.cart);
    const { id, title, thumbnail, price, discountPercentage, stock } = product;
    const productInCart = useAppSelector((state: RootState) => selectProductInCart(state, id));
    const quantity = productInCart?.quantity || 0;
    const newPrice = price - (price * discountPercentage / 100);
    
    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        if (cart) {
            handleUpdateQuantity(cart.id, id, newQuantity);
        }
    };

    const handleDecrement = () => {
        const newQuantity = quantity - 1;

        if (cart) {
            handleUpdateQuantity(cart.id, id, newQuantity);
        }
    };

    const handleAddToCart = () => {
        if (cart) {
            dispatch(addProductToCard({ cartId: cart.id, productId: id }))
        }
    };

    const handleUpdateQuantity = (cartId: number, productId: number, quantity: number) => {
        dispatch(updateCartQuantity({ cartId, productId, quantity }));
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

                {quantity > 0 ? (
                    <div className="buttons__container">
                        <Button className="button__cart-minus cart__button" onClick={handleDecrement} label={''}>
                            <img src="src/assets/img/Cart-minus.svg" alt="Минус" />
                        </Button>
                        <span className="cart__count">{quantity} {quantity === 1 ? 'item' : 'items'}</span>
                        <Button className="button__cart-plus" onClick={handleIncrement} label={''} disabled={quantity === stock}>
                            <img src="src/assets/img/Cart-plus.svg" alt="Плюс" />
                        </Button>
                    </div>
                ) : (
                    <Button className='cart__button' onClick={handleAddToCart} label={''}>
                        <img src="src/assets/img/Cart.svg" alt="Кнопка Корзина" />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Card;