import React from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../Logo/Logo';
import { ThemeSwitcher } from '../Button/ThemeSwitcher';
import { LanguageSwitcher } from '../Button/LanguageSwitcher';
import { NavLink } from 'react-router-dom';

/**
 * "Хедер" приложения
 */

export const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <Logo />
      <div className="flex-row align-items-center">
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/magic">Защищенный роут</NavLink>
            </li>
            <li>
              <NavLink to="/sdsadas">404</NavLink>
            </li>
            <li>
              <NavLink to="/admin">{t('header.admin-panel')}</NavLink>
            </li>
            <li>
              <NavLink to="/profile">{t('header.profile')}</NavLink>
            </li>
            <li>
              <NavLink to="/basket">{t('header.basket')}</NavLink>
            </li>
          </ul>
        </nav>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </header>
  );
};
