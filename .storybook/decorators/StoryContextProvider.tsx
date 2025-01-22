import React from 'react';
import { Context, Lang, Theme } from '../../src/app/Context';
import { useTranslation } from 'react-i18next';

export default function StoryContextProvider(Story: any) {
  const [theme, setTheme] = React.useState<Theme>('light');
  const [lang, setLang] = React.useState<Lang>('ru');

  const { i18n } = useTranslation();

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

  return (
    <Context.Provider value={{ theme, toggleTheme, lang, toggleLang }}>
      <Story />
    </Context.Provider>
  );
}
