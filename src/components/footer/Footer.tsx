import React from 'react';
import './footer.css';
import Logo from '../logo/Logo';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleCatalogClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      navigate('/');
      
      setTimeout(() => {
        const element = document.getElementById('catalog');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }); 
        }
      }, 100); 
  };
      
  const handleFaqClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      navigate('/');
        
      setTimeout(() => {
        const element = document.getElementById('faq');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }); 
        }
      }, 100); 
  };

  return (
      <footer className="footer">
          <Logo />
          <nav className="footer__nav">
              <a href="/" onClick={handleCatalogClick}>Catalog</a>
              <a href="/" onClick={handleFaqClick}>FAQ</a>
          </nav>
      </footer>
  );
};

export default Footer;