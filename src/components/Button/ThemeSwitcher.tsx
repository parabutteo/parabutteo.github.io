import React from 'react';
import { Button } from './Button';
import clsx from 'clsx';
import { Context } from '../../app/Context';

interface IThemeSwitcher {
  /** Признак заблокированности кнопки */
  isDisabled?: boolean;
}

/**
 * Кнопка "добавить в корзину"
 *
 * В качестве пропсов принимает признак isDisabled, указывающий на блокировку кнопки
 *
 * и counter для определения количества добавленных позиций
 */

export const ThemeSwitcher: React.FC<IThemeSwitcher> = ({ isDisabled }) => {
  const { theme, toggleTheme } = React.useContext(Context);

  return (
    <Button className="icon-btn theme-switch" disabled={isDisabled} onClick={toggleTheme}>
      <i className={clsx('fa', theme === 'dark' ? 'fa-sun' : 'fa-moon')} />
    </Button>
  );
};
