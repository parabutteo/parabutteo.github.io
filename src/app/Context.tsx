import { createContext } from 'react';

export type Theme = 'light' | 'dark';

interface TContext {
  theme: Theme;
  toggleTheme: () => void;
}

export const Context = createContext<TContext>({
  theme: 'light',
  toggleTheme: () => null,
});
