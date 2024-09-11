import React from 'react';
import usePageTitle from '../../hooks/usePageTitle';

const Cart: React.FC = () => {
  usePageTitle('My cart | Goods4you');
  return <h1>Cart Page</h1>;
};

export default Cart;