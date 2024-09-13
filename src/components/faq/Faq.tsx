import React, { useState } from 'react';
import './faq.css';
import plusIcon from '../../assets/img/Plus.svg'; 
import closeIcon from '../../assets/img/Close.svg'; 

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
    <div className='faq'>
      <h1 className='faq__tytle'>FAQ</h1>
      {accordionData.map((item, index) => (
        <div key={index}  className='faq__item item'>
          <div className='faq__header'
            onClick={() => toggleAccordion(index)}
          >
            <h3 className=''>{item.question}</h3>
            <img 
              src={openIndex === index ? closeIcon : plusIcon} 
              alt={openIndex === index ? 'Close' : 'Expand'} 
            />
          </div>
            <h5>
          {openIndex === index && (
            <div className='answer'>
              {item.answer}
            </div>
          )}
            </h5>
        </div>
      ))}
    </div>
  );
};

export default FAQ;