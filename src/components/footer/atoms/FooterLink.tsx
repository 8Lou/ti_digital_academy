import React from 'react';
import './footerLink.css';

interface FooterLinkProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const FooterLink: React.FC<FooterLinkProps> = ({ label, onClick }) => {
  return (
    <a href="/" onClick={onClick} className="footer-link">
      {label}
    </a>
  );
};

export default FooterLink;