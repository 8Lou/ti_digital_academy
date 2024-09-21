import React, { useEffect, useState } from 'react';
import './card.css';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { useAddCartMutation } from '../../store/api';
// import { useAddCartMutation } from '../../store/api';

interface CardProps {
    product: Product,
}

const Card: React.FC<CardProps> = ({ product}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
const { id, title, price, quantity, total, discountedTotal, thumbnail, discountPercentage } = product;
    // const products = useSelector((state) => state.cart.products);
    const products = [];
    const itemInCart = products.find(item => item.id === Number(id));
    
    const [count, setCount] = useState(itemInCart ? itemInCart.quantity : 0);
    const [addCart] = useAddCartMutation(); // Используем мутацию для добавления в корзину

    useEffect(() => {
        if (itemInCart) {
            setCount(itemInCart.quantity);
        } else {
            setCount(0);
        }
    }, [itemInCart]);

    const newPrice = discountPercentage > 0 ? price - (price * discountPercentage / 100) : price;

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleImageClick = () => {
        navigate(`/product/${id}`); 
    };

    const handleAddToCart = async () => {
        const product = {
            id: Number(id),
            title,
            price: newPrice,
            quantity: count + 1,
            discountedTotal: newPrice * (count + 1),
        };
        await addCart(product).unwrap(); // Используем unwrap для обработки результата
        setCount(0); // Сбрасываем счетчик
    };

    return (
        <div className="card">
            <div className="card__image-container" onClick={handleImageClick}>
                <h3 className="card__overlay">Show details</h3>
                <img className="card__image" src={thumbnail} alt="Фото товара" />
            </div>
            <div className="card__content">
                <div>
                    <h5 className='card__title' onClick={handleImageClick}>{title}</h5>
                    <p className='price'>${newPrice.toFixed(2)}</p>
                </div>
                <div className="buttons__container">
                    {count > 0 ? (
                        <>
                            <Button className="button__cart-minus" onClick={() => setCount(count - 1)} label={'-'}/>
                            <span className="cart__count">{count} {count === 1 ? 'item' : 'items'}</span>
                        </>
                    ) : (
                        <Button className='cart__button' onClick={handleAddToCart} label={'Add to Cart'}>
                            Add to Cart
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;