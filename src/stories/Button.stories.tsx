import React from 'react';
import Button from './Button';
import './Button.css';
import { useState } from 'react';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args: React.ComponentProps<typeof Button>) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Кнопка',
  onClick: () => alert('Кнопка нажата!'),
} as React.ComponentProps<typeof Button>;

export const Hover = () => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div style={{ display: 'inline-block', position: 'relative' }}>
        <Button
          label="Я как светофор"
          style={{
            backgroundColor: isHovered ? 'blue' : 'red',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {}}
        />
      </div>
    );
  };
  
  export const Active = () => {
    const [isActive, setIsActive] = useState(false);
  
    return (
      <div style={{ display: 'inline-block', position: 'relative' }}>
        <Button
          label="Я активная Кнопка"
          style={{
            transform: isActive ? 'scale(0.95)' : 'scale(1)',
            backgroundColor: isActive ? 'var(--color-button-background-active)' : 'var(--color-button-background-active)',
          }}
          onMouseDown={() => setIsActive(true)}
          onMouseUp={() => setIsActive(false)}
          onClick={() => {}}
        />
      </div>
    );
  };
  
Active.parameters = {
  pseudo: { active: true },
};

  
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Я отключена',
  disabled: true,
} as React.ComponentProps<typeof Button>;

export const WithChildren = Template.bind({});
WithChildren.args = {
  onClick: () => alert('Кнопка с дочерними элементами нажата!'),
  children: <span>Кликни на меня!</span>,
};