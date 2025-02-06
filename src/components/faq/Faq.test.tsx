import { render, screen, fireEvent } from '@testing-library/react';
import FAQ from './Faq';

describe('FAQ Component', () => {
  test('рендер FAQ', () => {
    render(<FAQ />);
    expect(screen.getByText(/faq/i)).toBeInTheDocument();
  });

  test('переключает значки при нажатии на вопрос', () => {
    render(<FAQ />);

    const questionElement = screen.getByText(/how can i track the status of my order\?/i);
    const iconElement = questionElement.nextElementSibling;

    // Изначально иконка с плюсом
    expect(iconElement).toHaveAttribute('alt', 'Expand');

    // Клик на вопрос, иконка - крестик
    fireEvent.click(questionElement);
    expect(iconElement).toHaveAttribute('alt', 'Close');

    // Клик на вопрос снова, иконка - плюс
    fireEvent.click(questionElement);
    expect(iconElement).toHaveAttribute('alt', 'Expand');
  });
  
  test('аккордеон изменен', () => {
    render(<FAQ />);
    let heading = screen.getByText('How can I track the status of my order?');
    let [ img ] = screen.getAllByAltText('Expand');

    expect(img).not.toHaveClass('rotate');
    fireEvent.click(heading);
    expect(img).toHaveClass('rotate');
    
   });
});