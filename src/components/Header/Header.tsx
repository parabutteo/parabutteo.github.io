import React from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../Logo/Logo';
import { ThemeSwitcher } from '../Button/ThemeSwitcher';
import { LanguageSwitcher } from '../Button/LanguageSwitcher';

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
              <a href="magic">Защищенный роут</a>
            </li>
            <li>
              <a href="sdsadas">404</a>
            </li>
            <li>
              <a href="admin">{t('header.admin-panel')}</a>
            </li>
            <li>
              <a href="profile">{t('header.profile')}</a>
            </li>
            <li>
              <a href="basket">{t('header.basket')}</a>
            </li>
          </ul>
        </nav>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </header>
  );
};
