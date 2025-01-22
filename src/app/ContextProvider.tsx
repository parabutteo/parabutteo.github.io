import React from 'react';
import { Context, Lang, Theme } from './Context';
import i18n from './i18n/i18n';

interface IContextProvider {
  children: React.ReactNode;
}

export const ContextProvider = ({ children }: IContextProvider) => {
  const [theme, setTheme] = React.useState<Theme>('light');
  const [lang, setLang] = React.useState<Lang>('ru');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === 'ru' ? 'en' : 'ru'));
    if (lang === 'ru') {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('ru');
    }
  };

  return <Context.Provider value={{ theme, toggleTheme, lang, toggleLang }}>{children}</Context.Provider>;
};
