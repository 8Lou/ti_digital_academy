import React from 'react';
import './button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, type = 'button', ...rest }) => {
  return (
    <button
      type={type}
      className={`button ${disabled ? 'button--disabled' : ''}`}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      {...rest}
    >
      {label}
    </button>
  );
};
export default Button;
