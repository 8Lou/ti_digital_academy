import React from 'react';
import usePageTitle from '../../hooks/usePageTitle';
import Basket from '../../components/basket/Basket';
import {Cart} from './';

const MyCart: React.FC = () => {
  usePageTitle('My cart | Goods4you');
  return (
    <div>
      {/* <Basket /> */}
      <Basket cart={undefined} />
      </div>
  );
};
export default MyCart;