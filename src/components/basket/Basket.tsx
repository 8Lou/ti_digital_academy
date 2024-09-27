import React, { useEffect } from 'react';
import './basket.css';
import ShoppingCard from '../shoppingCard/ShoppingCard';
import Layout from '../layout/Layout';
import { fetchCart } from '../../store/cartSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { useGetCurrentUserQuery } from '../../store/api';

const Basket: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cart, loading, error } = useAppSelector(state => state.cart);
  const { data: user } = useGetCurrentUserQuery('userId')
  
  useEffect(() => {
    if (!cart && user) {
      dispatch(fetchCart(user.id)); // ID пользователя
    }
  }, [dispatch, cart, user]);  
  
  
  if (loading) return <div>Loading...</div>;
  if (error || !cart) return <div>Error: {error}</div>;
  
  const products = cart.products || [];

  if (products.length === 0) {
    return (
      <Layout>
      <div className="basket__container">
      <h1 className="basket__title">My cart</h1>
      <div className="empty">
          <h3>No items</h3>
        </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="basket__container">
        <h1 className="basket__title">My cart</h1>
        <div className="basket__content">
          <div className="basket__item">
            {products.map(product => (
              <ShoppingCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                discountPercentage={product.discountPercentage}
                thumbnail={product.thumbnail}
                quantity={product.quantity} description={''} 
                cartId={cart.id}
                />
            ))}
          </div>
          <div className="basket__value">
            <h4 className="basket__text">
              Total count: <span className="basket__number">{cart.totalQuantity} items</span>
            </h4>
            <h4 className='basket__text'>Price without discount: <span className='basket__number' >${cart.total.toFixed(2)}</span></h4>
              <hr />
            <h3 className="basket__text">
              Total price: <span className="basket__number">${cart.discountedTotal.toFixed(2)}</span>
            </h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Basket;