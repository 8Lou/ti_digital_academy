import React, { useEffect } from 'react';
import './basket.css';
import ShoppingCard from '../shoppingCard/ShoppingCard';
import Layout from '../layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../../store/cartSlice';
import { RootState } from '../../../types';

const Basket: React.FC<{ cart: ReturnType<typeof selectCart> | null }> = ({ cart }) => {
  // const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.cart);

  // useEffect(() => {
  //   if (!cart) {
  //     dispatch(fetchCart(6)); // ID пользователя
  //   }
  // }, [dispatch, cart]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const products = cart?.products || [];
  const totalQuantity = cart?.totalQuantity || 0;
  const totalPrice = products.reduce((acc, product) => acc + product.discountedTotal, 0);
  const totalPriceWithoutDiscount = products.reduce((acc, product) => acc + (product.price * product.quantity), 0);

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
                id={product.id.toString()}
                title={product.title}
                price={product.price}
                discountPercentage={product.discountPercentage}
                thumbnail={product.thumbnail}
                quantity={product.quantity}
              />
            ))}
          </div>
          <div className="basket__value">
            <h4 className="basket__text">
              Total count: <span className="basket__number">{totalQuantity} items</span>
            </h4>
            <h4 className='basket__text'>Price without discount: <span className='basket__number' >${totalPriceWithoutDiscount.toFixed(2)}</span></h4>
              <hr />
            <h3 className="basket__text">
              Total price: <span className="basket__number">${totalPrice.toFixed(2)}</span>
            </h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Basket;