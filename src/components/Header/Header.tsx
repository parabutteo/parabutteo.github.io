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
              <a href="#">{t('header.main')}</a>
            </li>
            <li>
              <a href="#">{t('header.about-us')}</a>
            </li>
            <li>
              <a href="#">{t('header.contacts')}</a>
            </li>
          </ul>
        </nav>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </header>
  );
};
