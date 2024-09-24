import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import usePageTitle from '../../hooks/usePageTitle';
import Auth from '../../components/auth/Auth';

const Login: React.FC = () => {
  usePageTitle('Catalog | Goods4you');
  return (
    <div className="home">
      <Header cart={undefined} />
      <Auth/>
      <Footer />
      </div>
  );
};
export default Login;