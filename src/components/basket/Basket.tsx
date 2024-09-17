import React from 'react';
import './basket.css';
import ShoppingCard from '../shoppingCard/ShoppingCard';
import Layout from '../layout/Layout';

const Basket: React.FC = () => {

  const itemCount = 3;
  const priceWithoutDiscount = 700;
  const totalPrice = 590;

  return (
    <Layout>

        <div className="basket__container">
          <h1 className="basket__title">My cart</h1>

          <div className="basket__content">

            <div className="basket__item">
              <ShoppingCard title="Product Title" description="Product Description" id="1" />
              <ShoppingCard title="Product Title" description="Product Description" id="2" />
              <ShoppingCard title="Product Title" description="Product Description" id="3" />
              <ShoppingCard title="Product Title" description="Product Description" id="4" />

            </div>

            <div className="basket__value">
              <h4 className='basket__text'>Total count: <span className='basket__number'>{itemCount} items</span></h4>
              <h4 className='basket__text'>Price without discount: <span className='basket__number' >${priceWithoutDiscount}</span></h4>
              <hr />
              <h3 className='basket__text'>Total price: <span className='basket__number' >${totalPrice}</span></h3>
            </div>

          </div>
        </div>
    </Layout>
  );
};
export default Basket;