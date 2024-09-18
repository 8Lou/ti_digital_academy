import React from 'react';
import { Meta, Story } from '@storybook/react';
import ShoppingCard from './ShoppingCard';
import './shoppingCard.css';
import { Provider } from 'react-redux';
import store from '../store';
import { BrowserRouter as Router } from 'react-router-dom';


const meta: Meta = {
  title: 'Components/ShoppingCard',
  component: ShoppingCard,
};

export default meta;


const Template: Story<{ id: string; title?: string; description?: string; imageUrl?: string }> = (args) => (
    <Provider store={store}>
      <Router>
        <ShoppingCard {...args} />
      </Router>
    </Provider>
  );

// История для пустой корзины
export const EmptyCart = Template.bind({});
EmptyCart.args = {
  id: '12',
};

// История для заполненной корзины
export const FilledCart = Template.bind({});
FilledCart.args = {
  id: '12',
};

// Декоратор для добавления функционала к FilledCart
FilledCart.decorators = [
  (Story) => {
    const [count, setCount] = React.useState(2);

    return (
      <div>
        <Story />
        <button onClick={() => setCount(count + 1)}>Добавить товар</button>
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Убрать товар</button>
      </div>
    );
  },
];
