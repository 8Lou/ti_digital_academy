import React from 'react';
import Header from '../../components/header/Header';
import Catalog from '../../components/сatalog/Catalog';
import Footer from '../../components/footer/Footer';
import usePageTitle from '../../hooks/usePageTitle';

const Home: React.FC = () => {
  usePageTitle('Catalog | Goods4you');
  return (
    <div className="home">
      <Header />
      <Catalog />
      <Footer />
      </div>
  );
};
export default Home;