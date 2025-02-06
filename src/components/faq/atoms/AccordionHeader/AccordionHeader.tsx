import React from 'react';
import './accordionHeader.css';
import plusIcon from '../../../../assets/img/Plus.svg';
import closeIcon from '../../../../assets/img/Close.svg';

interface AccordionHeaderProps {
  question: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({ question, isOpen, onToggle }) => {
  return (
    <div className='accordion-header' onClick={onToggle}>
      <h3>{question}</h3>
      <img src={isOpen ? closeIcon : plusIcon} alt={isOpen ? 'Close' : 'Expand'} />
    </div>
  );
};

export default AccordionHeader;