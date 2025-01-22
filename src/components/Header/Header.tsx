import React from 'react';
import { Logo } from '../Logo/Logo';
import { ThemeSwitcher } from '../Button/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../Button/LanguageSwitcher';

/**
 * "Хедер" приложения
 */

export const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <Logo />
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
          <li>
            <ThemeSwitcher />
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
};
