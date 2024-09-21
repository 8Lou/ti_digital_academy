// рабочий но без общей суммы
import React, { useEffect } from 'react';
import './basket.css';
import ShoppingCard from '../shoppingCard/ShoppingCard';
import Layout from '../layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart, setCart } from '../../store/cartSlice';
import { RootState } from '../../../types';

const Basket: React.FC = () => {

  const dispatch = useDispatch();
  const { cart, loading, error } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    const cachedCart = localStorage.getItem('cart');
    if (!cachedCart) {
      dispatch(fetchCart(7)); // ID пользователя
    } else {
      dispatch(setCart(JSON.parse(cachedCart)));
    }
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const products = cart?.products || [];

  if (products.length === 0) {
    return (
      <Layout>
        <div className="basket__container">
          <h1>No items</h1>
        </div>
      </Layout>
    );
  }
  
  const totalQuantity = cart?.totalQuantity || 0;

  return (
    <Layout>

      <div className="basket__container">
        <h1 className="basket__title">My cart</h1>

        <div className="basket__content">

          <div className="basket__item">

            {products.length > 0 ? (
              products.map(product => (
                <ShoppingCard
                  key={product.id}
                  title={product.title}
                  description={`Price: ${product.price}`}
                  id={product.id.toString()}
                  price={product.price} 
                  discountPercentage={product.discountPercentage}
                  thumbnail={product.thumbnail} 
                />
              ))
            ) : (
              <div className='items__null'>No items</div>
            )}
          </div>

          <div className="basket__value">
            <h4 className='basket__text'>Total count: <span className='basket__number'>{totalQuantity} items</span></h4>
            <h4 className='basket__text'>Price without discount: <span className='basket__number'>${products.reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2)}</span></h4>
            <hr />
            <h3 className='basket__text'>Total price: <span className='basket__number'>${products.reduce((acc, product) => acc + product.discountedTotal * product.quantity, 0).toFixed(2)}</span></h3>
          </div>

        </div>
      </div>
    </Layout>
  );
};
export default Basket;