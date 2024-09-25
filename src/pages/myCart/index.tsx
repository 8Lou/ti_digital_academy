import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import usePageTitle from '../../hooks/usePageTitle';
import Cart from '../../components/cart/Cart';

const MyCart: React.FC = () => {
  usePageTitle('My cart | Goods4you');
  return (
    <div>
      <Header />
      <Cart />
      <Footer />
      </div>
  );
};
export default MyCart;