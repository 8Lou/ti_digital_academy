import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AccordionHeader from './AccordionHeader';
import plusIcon from '../../assets/img/Plus.svg';
import closeIcon from '../../assets/img/Close.svg';

export default {
  title: 'Molecules/AccordionHeader',
  component: AccordionHeader,
} as ComponentMeta<typeof AccordionHeader>;

const Template: ComponentStory<typeof AccordionHeader> = (args) => <AccordionHeader {...args} />;

export const Closed = Template.bind({});
Closed.args = {
  question: 'Sample Question',
  iconSrc: plusIcon,
  iconAlt: 'Plus',
  isOpen: false,
  onClick: () => {},
};

export const Open = Template.bind({});
Open.args = {
  question: 'Sample Question',
  iconSrc: closeIcon,
  iconAlt: 'Close',
  isOpen: true,
  onClick: () => {},
};