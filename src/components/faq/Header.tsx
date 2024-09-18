import React from 'react';

interface HeaderProps {
  title: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ title, className }) => {
  return <h3 className={className}>{title}</h3>;
};

export default Header;