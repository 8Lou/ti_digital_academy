import React from 'react';
import './card.css';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../../types';
import { useSelector } from 'react-redux';
import { selectProductInCart } from '../../store/selectors';


interface CardProps {
    product: Product,
    cart: { [key: number]: number } | null;
    setCart: React.Dispatch<React.SetStateAction<{ [key: number]: number | undefined }>>;
}

const Card: React.FC<CardProps> = ({ product, setCart }) => {

    const navigate = useNavigate();
    const { cart } = useSelector((state: RootState) => state.cart);
    const { id, title, thumbnail, price, discountPercentage } = product;
    const productInCart = useSelector((state) => selectProductInCart(state, id));
    const quantity = productInCart?.quantity || (cart && cart[id]) || 0;
    const newPrice = price - (price * discountPercentage / 100);

    // const [count, setCount] = useState(quantity);

    const handleIncrement = () => {
        setCart((prevCart) => ({
            ...prevCart,
            [id]: (prevCart[id] || 0) + 1,
        }));
    };

    const handleDecrement = () => {
        setCart((prevCart) => {
            const newQuantity = (prevCart[id] || 0) - 1;
            if (newQuantity <= 0) {
                const { [id]: _, ...rest } = prevCart;
                return rest;
            } else {
                return {
                    ...prevCart,
                    [id]: newQuantity,
                };
            }
        });
    };

    const handleClick = () => {
        setCart((prevCart) => ({
            ...prevCart,
            [id]: (prevCart[id] || 0) + 1,
        }));
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
                        <Button className="button__cart-plus" onClick={handleIncrement} label={''}>
                            <img src="src/assets/img/Cart-plus.svg" alt="Плюс" />
                        </Button>
                    </div>
                ) : (
                    <Button className='cart__button' onClick={handleClick} label={''}>
                        <img src="src/assets/img/Cart.svg" alt="Кнопка Корзина" />
                    </Button>
                )}
                {quantity > 0}
            </div>
        </div>
    );
};

export default Card;