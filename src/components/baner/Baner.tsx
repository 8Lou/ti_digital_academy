import React from 'react';
import './baner.css';
import Button from '../button/Button';

    const Baner: React.FC = () => {
        return (
            <div className='baner'>
                <h1 className='baner__tytle'>Any products from famous brands <br /> with worldwide delivery</h1>
                <h6 className='baner__text'>We sell smartphones, laptops, clothes, shoes <br /> and many other products at low prices</h6>
                <Button label="Buy now" onClick={() => {}} />
            </div>
        );

    };
    export default Baner;
