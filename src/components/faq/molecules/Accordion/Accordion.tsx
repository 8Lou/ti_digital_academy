import React, { useState } from 'react';
import './accordion.css';
import AccordionHeader from '../../../../atoms/AccordionHeader';
import AccordionButton from '../../../../atoms/AccordionButton';

interface AccordionItem {
  question: string;
  answer: string;
}

const accordionData: AccordionItem[] = [
  {
    question: 'How can I track the status of my order?',
    answer: 'You can track your order using the tracking link sent to your email.',
  },
  // Добавьте другие элементы аккордеона
];

const Accordion: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className='accordion'>
      {accordionData.map((item, index) => (
        <div key={index} className='accordion-item'>
          <AccordionHeader
            question={item.question}
            isOpen={openIndexes.includes(index)}
            onToggle={() => toggleAccordion(index)}
          />
          <AccordionButton
            isOpen={openIndexes.includes(index)}
            onToggle={() => toggleAccordion(index)}
          />
          {openIndexes.includes(index) && (
            <div className='accordion-content'>{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
