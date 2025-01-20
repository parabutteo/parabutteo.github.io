import React from 'react';
import { Logo } from '../Logo/Logo';
import { ThemeSwitcher } from '../Button/ThemeSwitcher';

/**
 * "Хедер" приложения
 */

export const Header: React.FC = () => (
  <header className="header">
    <Logo />
    <nav className="nav">
      <ul>
        <li>
          <a href="#">Главная</a>
        </li>
        <li>
          <a href="#">О нас</a>
        </li>
        <li>
          <a href="#">Контакты</a>
        </li>
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </nav>
  </header>
);
