import React from 'react';
import './footer.css';
import Logo from '../logo/Logo';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
                <Logo />
                <nav className="footer__nav">
                    <a href="#home">Catalog</a>
                    <a href="#about">FAQ</a>
                </nav>
        </footer>
    );
};

export default Footer;