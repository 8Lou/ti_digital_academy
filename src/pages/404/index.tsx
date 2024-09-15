import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import usePageTitle from '../../hooks/usePageTitle';
import './style.css';

const Undefined: React.FC = () => {
  usePageTitle('Undefined | Goods4you');
  return (
    <div className='page__404'>
      <Header />
      <img className="page__404-svg" src="src/assets/img/404.jpg" alt="Фото 404" />
      <Footer />
    </div>
  );
};
export default Undefined;