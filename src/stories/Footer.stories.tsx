// Footer.stories.jsx
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';
import { JSX } from 'react/jsx-runtime';

export default {
  title: 'Components/Footer',
  component: Footer,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  // добавьте необходимые пропсы
};
