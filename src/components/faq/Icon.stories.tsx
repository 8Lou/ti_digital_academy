import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from './Icon';
import plusIcon from '../../assets/img/Plus.svg';
import closeIcon from '../../assets/img/Close.svg';

export default {
  title: 'Atoms/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const PlusIcon = Template.bind({});
PlusIcon.args = {
  src: plusIcon,
  alt: 'Plus',
};

export const CloseIcon = Template.bind({});
CloseIcon.args = {
  src: closeIcon,
  alt: 'Close',
};