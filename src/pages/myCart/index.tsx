import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import usePageTitle from '../../hooks/usePageTitle';
import Basket from '../../components/basket/Basket';

const MyCart: React.FC = () => {
  usePageTitle('My cart | Goods4you');
  return (
    <div>
      <Header cart={undefined} />
      <Basket />
      <Footer />
      </div>
  );
};
export default MyCart;