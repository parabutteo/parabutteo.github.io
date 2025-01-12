import React from 'react';
import './button.scss';

interface IBtn extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | React.ReactNode[] | string;
}

export const Button: React.FC<IBtn> = ({ children, ...buttonAttrs }) => (
  <button className="button primary" {...buttonAttrs}>
    {children}
  </button>
);
