import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import usePageTitle from '../../hooks/usePageTitle';
import './style.css';

const Undefined: React.FC = () => {
  usePageTitle('Undefined | Goods4you');
  return (
    <div>
      <Header />
      <div className='page__404'>
      <img className="page__404-svg" src="src\assets\img\404.jpg" alt="Фото 404" />
      </div>
      <Footer />
    </div>
  );
};
export default Undefined;