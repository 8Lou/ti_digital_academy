import React from 'react';
import usePageTitle from '../../hooks/usePageTitle';
import './style.css';

const Undefined: React.FC = () => {
  usePageTitle('404 | Goods4you');
  return (
    <div className='page__404'>
      <img className="page__404-svg" src="src/assets/img/404.jpg" alt="Фото 404" />
    </div>
  );
};
export default Undefined;