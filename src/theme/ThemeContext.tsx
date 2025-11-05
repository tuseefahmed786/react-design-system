import { createContext, useContext } from 'react';
import { ColorScheme } from '../types';
import { tokens } from '../tokens';

export interface Theme {
  colorScheme: ColorScheme;
  tokens: typeof tokens;
}

export interface ThemeContextValue {
  theme: Theme;
  toggleColorScheme: () => void;
  setColorScheme: (colorScheme: ColorScheme) => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

