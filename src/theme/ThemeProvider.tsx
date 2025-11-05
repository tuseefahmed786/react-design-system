import { useState, useMemo, ReactNode, useEffect } from 'react';
import { ThemeContext, Theme } from './ThemeContext';
import { ColorScheme } from '../types';
import { tokens } from '../tokens';

export interface ThemeProviderProps {
  children: ReactNode;
  defaultColorScheme?: ColorScheme;
  storageKey?: string;
}

export const ThemeProvider = ({
  children,
  defaultColorScheme = 'light',
  storageKey = 'design-library-theme',
}: ThemeProviderProps) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(() => {
    // Try to get from localStorage if in browser
    if (typeof window !== 'undefined' && storageKey) {
      const stored = localStorage.getItem(storageKey);
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
    }
    return defaultColorScheme;
  });

  useEffect(() => {
    // Save to localStorage when changed
    if (typeof window !== 'undefined' && storageKey) {
      localStorage.setItem(storageKey, colorScheme);
    }
    
    // Update document root attribute for CSS
    document.documentElement.setAttribute('data-theme', colorScheme);
  }, [colorScheme, storageKey]);

  const theme: Theme = useMemo(
    () => ({
      colorScheme,
      tokens,
    }),
    [colorScheme]
  );

  const toggleColorScheme = () => {
    setColorScheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const value = useMemo(
    () => ({
      theme,
      toggleColorScheme,
      setColorScheme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

