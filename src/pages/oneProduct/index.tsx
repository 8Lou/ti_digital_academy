import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Product from '../../components/product/Product';
import usePageTitle from '../../hooks/usePageTitle';

const OneProduct: React.FC = () => {
  usePageTitle('Essence Mascara Lash Princess | Goods4you');
  return (
    <div>
      <Header />
      <Product />
      <Footer />
      </div>
  );
};
export default OneProduct;