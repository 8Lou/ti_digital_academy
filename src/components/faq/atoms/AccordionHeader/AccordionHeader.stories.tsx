import React from 'react';
import AccordionHeader from './AccordionHeader';

export default {
  title: 'Atoms/AccordionHeader',
  component: AccordionHeader,
};

const Template = (args) => <AccordionHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  question: 'How can I track the status of my order?',
  isOpen: false,
  onToggle: () => alert('Toggled!'),
};