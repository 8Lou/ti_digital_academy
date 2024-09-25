import React from 'react';
import './сart.css';
import ShoppingCard from '../shoppingCard/ShoppingCard';

const Cart: React.FC = () => {

  
  const itemCount = 3; 
  const priceWithoutDiscount = 700;
  const totalPrice = 590; 

  

  return (
    <div className="cart__poduct">
      <div className="cart__poduct-container">
        <h1 className="cart__poduct-subtitle">My cart</h1>

        <div className="cart__poduct-content">

          <div className="cart__poduct--large">
            <ShoppingCard title="Product Title" description="Product Description" id="1" />
            <ShoppingCard title="Product Title" description="Product Description" id="2" />
            <ShoppingCard title="Product Title" description="Product Description" id="3" />
            <ShoppingCard title="Product Title" description="Product Description" id="4" />

          </div>

          <div className="cart__poduct--small">
          <h4 className='cart__poduct-text'>Total count: <span className='cart__number'>{itemCount} items</span></h4>
          <h4 className='cart__poduct-text'>Price without discount: <span className='cart__number' >${priceWithoutDiscount}</span></h4>
          <hr />
          <h3 className='cart__poduct-text'>Total price: <span className='cart__number' >${totalPrice}</span></h3>
        </div>
        
        </div>
      </div>
    </div>
  );
};
export default Cart;