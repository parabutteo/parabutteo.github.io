import React from 'react';
import { Header } from '../Header/Header';
import clsx from 'clsx';
import { Context } from '../../app/Context';

interface ILayout {
  title: string;
  children: React.ReactNode | string;
}

/**
 * Общий "лейаут" приложения
 *
 * В компоненте встречается паттерн "Conditional rendering" и "Layout component"
 */

export const Layout: React.FC<ILayout> = ({ children, title }: ILayout) => {
  const { theme } = React.useContext(Context);

  return (
    <>
      <Header />
      <main className={clsx(theme === 'light' ? 'light' : 'dark')}>
        {!!title && <h1 className="margin-bottom-32">{title}</h1>}
        <div className="main-content">{children}</div>
      </main>
    </>
  );
};
