import React from 'react';
import { Button } from './Button';
import { Context } from 'src/app/Context';

/**
 * Кнопка "сменить язык сайта"
 */

export const LanguageSwitcher: React.FC = () => {
  const { lang, toggleLang } = React.useContext(Context);

  return (
    <Button className="icon-btn lang-switch" onClick={toggleLang}>
      {lang === 'ru' ? 'RU' : 'EN'}
    </Button>
  );
};
