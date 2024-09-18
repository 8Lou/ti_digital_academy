import React from 'react';
import AccordionHeader from './AccordionHeader';

interface AccordionItemProps {
  question: string;
  answer: string;
  iconSrc: string;
  iconAlt: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, iconSrc, iconAlt, isOpen, onClick }) => {
  return (
    <div className='faq__item item'>
      <AccordionHeader question={question} iconSrc={iconSrc} iconAlt={iconAlt} onClick={onClick} isOpen={isOpen} />
      <div className={`answer ${isOpen ? 'expanded' : ''}`}>
        {answer}
      </div>
    </div>
  );
};

export default AccordionItem;