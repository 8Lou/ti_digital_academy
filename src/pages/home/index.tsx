import React from 'react';
import Catalog from '../../components/сatalog/Catalog';
import usePageTitle from '../../hooks/usePageTitle';

const Home: React.FC = () => {
  usePageTitle('Catalog | Goods4you');
  return (
    <>
      <Catalog />
    </>
  );
};
export default Home;