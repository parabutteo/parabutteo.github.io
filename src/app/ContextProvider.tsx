import React from 'react';
import { Context, Theme } from './Context';

interface IContextProvider {
  children: React.ReactNode;
}

export const ContextProvider = ({ children }: IContextProvider) => {
  const [theme, setTheme] = React.useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return <Context.Provider value={{ theme, toggleTheme }}>{children}</Context.Provider>;
};
