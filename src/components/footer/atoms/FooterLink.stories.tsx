import React from 'react';
import FooterLink from './FooterLink';

export default {
  title: 'Atoms/FooterLink',
  component: FooterLink,
};

const Template = (args) => <FooterLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Catalog',
  onClick: (event) => {
    event.preventDefault();
    alert('Link clicked!');
  },
};