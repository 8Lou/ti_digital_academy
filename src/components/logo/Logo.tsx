import React from 'react';
import './logo.css';
import { useNavigate } from 'react-router-dom';

const Logo: React.FC = () => {
  const navigate = useNavigate(); 

  const handleLogoClick = () => {
    navigate('/'); 
  };

  return (
    <h1 className="logo__title" onClick={handleLogoClick}>
      Goods4you
    </h1>
  );
};

export default Logo;
