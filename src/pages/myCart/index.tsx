import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import usePageTitle from '../../hooks/usePageTitle';
import ProductCart from '../../components/cart/ProductCart';

const MyCart: React.FC = () => {
  usePageTitle('My cart | Goods4you');
  return (
    <div>
      <Header />
      <ProductCart />
      <Footer />
      </div>
  );
};
export default MyCart;