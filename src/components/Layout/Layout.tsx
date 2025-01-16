import React from 'react';
import { Header } from '../Header/Header';

interface ILayout {
  children: React.ReactNode | string;
}

/**
 * Общий "лейаут" приложения
 */

export const Layout: React.FC<ILayout> = ({ children }: ILayout) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);
