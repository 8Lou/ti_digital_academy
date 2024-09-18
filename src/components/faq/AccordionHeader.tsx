import React from 'react';
import Icon from './Icon';
import Header from './Header';

interface AccordionHeaderProps {
  question: string;
  iconSrc: string;
  iconAlt: string;
  onClick: () => void;
  isOpen: boolean;
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({ question, iconSrc, iconAlt, onClick, isOpen }) => {
  return (
    <div className='faq__header' onClick={onClick}>
      <Header title={question} className='question' />
      <Icon src={iconSrc} alt={iconAlt} className={isOpen ? 'rotate' : ''} />
    </div>
  );
};

export default AccordionHeader;