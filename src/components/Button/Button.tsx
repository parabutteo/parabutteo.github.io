import React from 'react';
import './button.scss';
import clsx from 'clsx';

interface IBtn extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Содержимое кнопки */
  children: React.ReactNode | string;
  /** Css-классы кнопки */
  className?: string;
}

/**
 * Кнопка
 *
 * В качестве children передается содержимое кнопки в виде строки или разметки
 *
 * Также оддерживает дефолтные атрибуты для HTML-кнопок
 */

export const Button: React.FC<IBtn> = ({ children, className, ...buttonAttrs }) => (
  <button className={clsx('button', className)} {...buttonAttrs}>
    {children}
  </button>
);
