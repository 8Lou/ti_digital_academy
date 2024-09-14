import React from 'react';
import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import Footer from '../../components/footer/Footer';
import usePageTitle from '../../hooks/usePageTitle';

const Home: React.FC = () => {
  usePageTitle('Catalog | Goods4you');
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      </div>
  );
};
export default Home;