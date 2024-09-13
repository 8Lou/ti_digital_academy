import React, { useState } from 'react';
import './faq.css';

interface AccordionItem {
  question: string;
  answer: string;
}

const accordionData: AccordionItem[] = [
  {
    question: 'How can I track the status of my order?',
    answer: 'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: '0000',
  },
  {
    question: 'How can I return or exchange an item?',
    answer: '00000',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h1 className='faq'>FAQ</h1>
      {accordionData.map((item, index) => (
        <div key={index}  className=''>
          <div className=''
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.question}</span>
            <span>{openIndex === index ? '✖️' : '➕'}</span>
          </div>
          {openIndex === index && (
            <div className=''>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;