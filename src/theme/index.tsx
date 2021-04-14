import React, {createContext, ReactNode} from 'react';
import colors from './colors';

const theme = {
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  colors,
};

export type Theme = typeof theme;

const ThemeContext = createContext(theme);

function ThemeProvider({children}: {children: ReactNode}) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export {ThemeContext, ThemeProvider};