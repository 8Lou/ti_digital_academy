import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import { vi } from 'vitest';

describe('Button Component', () => {
  test('отображает ли кнопка текст, переданный в label', () => {
    render(<Button label="Click me" onClick={() => { }} />);

    expect(screen.getByText(/click me/i)).toBeInTheDocument();
  });

  test('отображает ли кнопка текст, переданный через дочерние элементы', () => {
    render(
      <Button onClick={() => { }}>
        <span>Click me</span>
      </Button>
    );

    expect(screen.getByText(/click me/i)).toBeInTheDocument();
  });


  test('обработчик клика вызывается при нажатии на кнопку', () => {
    const handleClick = vi.fn();
    render(<Button label="Click me" onClick={handleClick} />);

    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });


  test('кнопка отключена', () => {
    render(<Button label="Click me" onClick={() => { }} disabled />);

    const button = screen.getByText(/click me/i);
    expect(button).toBeDisabled();
    expect(button).toHaveClass('button--disabled');
  });


  test('обработчик клика не вызывается, если кнопка отключена', () => {
    const handleClick = vi.fn();
    render(<Button label="Click me" onClick={handleClick} disabled />);

    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).not.toHaveBeenCalled();
  });


  test('кнопка имеет пользовательский класс', () => {
    render(<Button label="Click me" onClick={() => { }} className="custom-class" />);

    const button = screen.getByText(/click me/i);
    expect(button).toHaveClass('custom-class');
  });
});