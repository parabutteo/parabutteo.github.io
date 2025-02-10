import React from 'react';
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
 *
 * В компоненте присутствуют паттерны "Destructuring props" и "JSX spread attributes"
 */

export const Button: React.FC<IBtn> = ({ children, className, ...buttonAttrs }) => (
  <button className={clsx('button', className)} {...buttonAttrs}>
    {children}
  </button>
);
