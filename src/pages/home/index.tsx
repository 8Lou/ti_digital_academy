import React from 'react';
import Catalog from '../../components/сatalog/Catalog';
import usePageTitle from '../../hooks/usePageTitle';

const Home: React.FC = () => {
  usePageTitle('Catalog | Goods4you');
  return (
    <div className="home">
      <Catalog cart={null} />
      </div>
  );
};
export default Home;