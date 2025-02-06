import React from 'react';
import './footer.css';
import FooterLink from '../atoms/FooterLink';
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
      <nav className="footer__nav">
        <FooterLink label="Catalog" onClick={handleCatalogClick} />
        <FooterLink label="FAQ" onClick={handleFaqClick} />
      </nav>
    </footer>
  );
};

export default Footer;