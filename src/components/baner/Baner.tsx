import React from 'react';
import './baner.css';
import Button from '../button/Button';

const Baner: React.FC = () => {
    const handleClick = () => {
        // Здесь вы можете добавить логику для обработки нажатия кнопки
        console.log('Кнопка нажата!'); // Пример действия
    };

    return (
        <div className='baner'>
            <h1 className='baner__title'>Any products from famous brands <br /> with worldwide delivery</h1>
            <h6 className='baner__text'>We sell smartphones, laptops, clothes, shoes <br /> and many other products at low prices</h6>
            <Button label="Go to shopping" onClick={handleClick} />
        </div>
    );
};
export default Baner;
