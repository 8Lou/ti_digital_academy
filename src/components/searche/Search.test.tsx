import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';
import { vi } from 'vitest';

describe('Search Component', () => {
  test('renders input field', () => {
    render(<Search onSearch={vi.fn()} />);
    expect(screen.getByPlaceholderText(/search by title/i)).toBeInTheDocument();
  });

  test('Can input text into the component', () => {
    const hendleChange = vi.fn();
    render(<Search onSearch={hendleChange} />);
    const inputElement = screen.getByPlaceholderText(/Search by title/i);

    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(inputElement).toHaveValue('test');
  });

});