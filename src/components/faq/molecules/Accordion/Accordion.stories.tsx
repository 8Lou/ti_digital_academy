import React from 'react';
import Accordion from './Accordion';
import plusIcon from '../../../../assets/img/Plus.svg';
import closeIcon from '../../../../assets/img/Close.svg';
import Faq from '../../Faq';
import './accordion.css';
import { ComponentMeta } from '@storybook/react';

export default {
  title: 'Molecules/Faq',
  component: Faq,
} as ComponentMeta<typeof Accordion>;

const Template = () => <Faq />;

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