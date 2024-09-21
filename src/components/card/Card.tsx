import React, { useState, useEffect } from 'react';
import './card.css';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { addToCart, removeFromCart } from '../../store/cartSlice';
import { useGetCartsByUserQuery } from '../../store/api';

interface CardProps {
    title: string;
    description: string;
    id: string;
    image: string;
    price: number;
    discountPercentage: number;
}

const Card: React.FC<CardProps> = ({ title, description, userId, id, image, price, discountPercentage }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data: cartData, error, isLoading } = useGetCartsByUserQuery(userId);


    const [count, setCount] = useState(0);
    const [showButtons, setShowButtons] = useState(false);
    const cartItems = useSelector((state) => state.cart.products);
    console.log('cartItems:', cartItems);
    const itemInCart = cartItems.find(item => item.id === Number(id));
    console.log('itemInCart:', itemInCart);

    useEffect(() => {
        if (cartData) {
            const cartItems = cartData.products || [];
            console.log('cartItems:', cartItems);
            const itemInCart = cartItems.find(item => item.id === Number(id));
            console.log('itemInCart:', itemInCart);
            if (itemInCart) {
                setCount(itemInCart.quantity);
                setShowButtons(true);
            } else {
                setCount(0);
                setShowButtons(false);
            }
        }
    }, [cartData, id]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;


    const handleIncrement = () => {
        console.log('Increment clicked');
        setCount(prevCount => prevCount + 1);
        dispatch(addToCart({ id: Number(id), title, price, quantity: 1, discountedTotal: price * (1 - discountPercentage / 100) }));
    };

    const handleDecrement = () => {
        console.log('Decrement clicked');
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
            dispatch(removeFromCart(Number(id)));
        }
    };

    const handleImageClick = () => {
        navigate(`/product/${id}`); 
    };

    const newPrice = discountPercentage > 0 ? price - (price * discountPercentage / 100) : price;

    const handleAddToCart = () => {
        // console.log('Add to cart clicked');
        if (count > 0) {
            dispatch(addToCart({ id: Number(id), title, price: newPrice, quantity: count, discountedTotal: newPrice * count }));
            setCount(0);
        } else {
            dispatch(removeFromCart(Number(id)));
        }
    };
    
    return (
        <div className="card">
            <div className="card__image-container" onClick={handleImageClick}>
                <h3 className="card__overlay">Show details</h3>
                <img className="card__image" src={image} alt="Фото товара" />
            </div>

            <div className="card__content">
                <div>
                    <h5 className='card__title' onClick={handleImageClick} >{title}</h5>
                    <p className='price'>{!isNaN(newPrice) ? newPrice.toFixed(2) : ''}</p>
                    </div>

                
                {showButtons ? (
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
                    <Button className='cart__button' onClick={handleAddToCart} label={''}>
                        <img src="src/assets/img/Cart.svg" alt="Кнопка Корзина" />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Card;
