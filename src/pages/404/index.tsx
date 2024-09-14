import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import usePageTitle from '../../hooks/usePageTitle';

const Undefined: React.FC = () => {
  usePageTitle('Undefined | Goods4you');
  return (
    <div>
      <Header />
      <span className='page__404'>
        404
      </span>
      <Footer />
    </div>
  );
};
export default Undefined;