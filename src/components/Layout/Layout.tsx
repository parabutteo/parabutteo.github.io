import React from 'react';
import { Header } from '../Header/Header';
import clsx from 'clsx';
import { Context } from '../../app/Context';

interface ILayout {
  children: React.ReactNode | string;
}

/**
 * Общий "лейаут" приложения
 *
 * В компоненте встречается паттерн "Conditional rendering" и "Layout component"
 */

export const Layout: React.FC<ILayout> = ({ children }: ILayout) => {
  const { theme } = React.useContext(Context);

  return (
    <>
      <Header />
      <main className={clsx(theme === 'light' ? 'light' : 'dark')}>{children}</main>
    </>
  );
};
