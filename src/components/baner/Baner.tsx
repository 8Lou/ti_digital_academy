import React from 'react';
import './baner.css';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';


const Baner: React.FC = () => {
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/basket');
    };

    return (
        <div className='baner'>
            <h1 className='baner__title'>Any products from famous brands <br /> with worldwide delivery</h1>
            <h5 className='baner__text'>We sell smartphones, laptops, clothes, shoes <br /> and many other products at low prices</h5>
            <Button className='baner__button' label="Go to shopping"
                onClick={handleCartClick} />
        </div>
    );
};
export default Baner;
