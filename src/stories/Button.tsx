import React from 'react';
import './button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  onClick: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, type = 'button', children, ...rest }) => {
  return (
    <button
      type={type}
      className={`button ${disabled ? 'button--disabled' : ''}`}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      {...rest}
    >
      {children || label}
      </button>
  );
};
export default Button;
