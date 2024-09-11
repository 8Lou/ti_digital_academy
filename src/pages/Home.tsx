import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import usePageTitle from '../hooks/usePageTitle';

const Home: React.FC = () => {
  usePageTitle('Catalog | Goods4you');
  return (
    <div className="home">
      <Header />
      <Main />
      <Footer />
      </div>
  );
};
export default Home;