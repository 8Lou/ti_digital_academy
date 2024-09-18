import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AccordionItem from './AccordionItem';
import plusIcon from '../../assets/img/Plus.svg';
import closeIcon from '../../assets/img/Close.svg';

export default {
  title: 'Molecules/AccordionItem',
  component: AccordionItem,
} as ComponentMeta<typeof AccordionItem>;

const Template: ComponentStory<typeof AccordionItem> = (args) => <AccordionItem {...args} />;

export const Closed = Template.bind({});
Closed.args = {
  question: 'Sample Question',
  answer: 'Sample Answer',
  iconSrc: plusIcon,
  iconAlt: 'Plus',
  isOpen: false,
  onClick: () => {},
};

export const Open = Template.bind({});
Open.args = {
  question: 'Sample Question',
  answer: 'Sample Answer',
  iconSrc: closeIcon,
  iconAlt: 'Close',
  isOpen: true,
  onClick: () => {},
};