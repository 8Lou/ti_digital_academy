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
    answer: 'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
  },
  {
    question: 'How can I return or exchange an item?',
    answer: 'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
  },
];

const FAQ: React.FC = () => {
  // const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [openIndexes, setOpenIndexes] = useState<number[]>([]); 

  // const toggleAccordion = (index: number) => {
  //   setOpenIndex(openIndex === index ? null : index);
  // };

  const toggleAccordion = (index: number) => {
    if (openIndexes.includes(index)) {
      // Если этот аккордеон уже открыт, закрыть его
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      // Иначе добавляем его в список открытых
      setOpenIndexes([...openIndexes, index]);
    }
  };

  
  return (
    <div className='faq'>
      <h1 className='faq__title'>FAQ</h1>
      {accordionData.map((item, index) => (
        <div key={index} className='faq__item item'>
          <div className='faq__header' onClick={() => toggleAccordion(index)}>
            <h3 className='question'>{item.question}</h3>
            <img
              src={openIndexes.includes(index) ? closeIcon : plusIcon}
              alt={openIndexes.includes(index) ? 'Close' : 'Expand'}
              className={openIndexes.includes(index) ? 'rotate' : ''}
            />
          </div>
          <div className={`answer ${openIndexes.includes(index) ? 'expanded' : ''}`}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;