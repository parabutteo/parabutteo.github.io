import React from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../Logo/Logo';
import { ThemeSwitcher } from '../Button/ThemeSwitcher';
import { LanguageSwitcher } from '../Button/LanguageSwitcher';
import { LoginButton } from '../Button/LoginButton';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';

/**
 * "Хедер" приложения
 */

export const Header: React.FC = () => {
  const { t } = useTranslation();

  const token = useAppSelector((state) => state.auth.token);
  const isUserLoggedIn = token !== null;
  const isAdminRole = token === 'admin';

  const cartItems = useAppSelector((state) => state.cart.items);
  const cartItemsCounter = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      <Logo />
      <div className="flex-row align-items-center">
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/magic">Всё подряд</NavLink>
            </li>
            <li>
              <NavLink to="/sdsadas">404</NavLink>
            </li>
            {isAdminRole && (
              <li>
                <NavLink to="/admin">{t('header.admin-panel')}</NavLink>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <NavLink to="/profile">{t('header.profile')}</NavLink>
              </li>
            )}
            <li>
              <NavLink to="/basket">{t('header.basket')}</NavLink>
              <span className="cart-counter">{cartItemsCounter}</span>
            </li>
          </ul>
        </nav>
        <ThemeSwitcher />
        <LanguageSwitcher />
        <LoginButton />
      </div>
    </header>
  );
};
