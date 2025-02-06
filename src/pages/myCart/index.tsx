import React from 'react';
import usePageTitle from '../../hooks/usePageTitle';
import Basket from '../../components/basket/Basket';

const MyCart: React.FC = () => {
  usePageTitle('My cart | Goods4you');
  return (
    <>
      <Basket />
    </>
  );
};
export default MyCart;