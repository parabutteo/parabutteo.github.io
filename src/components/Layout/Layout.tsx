import React from 'react';
import { Header } from '../Header/Header';
import clsx from 'clsx';
import { Context } from 'src/app/Context';

interface ILayout {
  children: React.ReactNode | string;
}

/**
 * Общий "лейаут" приложения
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
