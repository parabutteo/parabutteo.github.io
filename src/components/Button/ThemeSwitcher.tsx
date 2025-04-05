import React from 'react';
import { Button } from './Button';
import clsx from 'clsx';
import { Context } from '../../app/Context';

/**
 * Кнопка "сменить тему"
 *
 * и counter для определения количества добавленных позиций
 */

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = React.useContext(Context);

  return (
    <Button className="icon-btn theme-switch" onClick={toggleTheme}>
      <i className={clsx('fa', theme === 'dark' ? 'fa-sun' : 'fa-moon')} />
    </Button>
  );
};
