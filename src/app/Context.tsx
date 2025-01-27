import { createContext } from 'react';

export type Theme = 'light' | 'dark';
export type Lang = 'ru' | 'en';

interface TContext {
  theme: Theme;
  toggleTheme: () => void;
  lang: Lang;
  toggleLang: () => void;
}

export const Context = createContext<TContext>({
  theme: 'light',
  toggleTheme: () => null,
  lang: 'ru',
  toggleLang: () => null,
});
