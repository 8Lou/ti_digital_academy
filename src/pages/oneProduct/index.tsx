import React from 'react';
import Product from '../../components/product/Product';
import usePageTitle from '../../hooks/usePageTitle';

const OneProduct: React.FC = () => {
  usePageTitle('Essence Mascara Lash Princess | Goods4you');
  return (
    <>
      <Product />
    </>
  );
};
export default OneProduct;