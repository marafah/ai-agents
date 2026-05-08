'use client';

import { createContext, useContext, useEffect, useSyncExternalStore, useCallback, type ReactNode } from 'react';
import type { Theme } from '@/types';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

let listeners: (() => void)[] = [];
function emitChange() {
  for (const l of listeners) l();
}

function getThemeSnapshot(): Theme {
  if (typeof window === 'undefined') return 'light';
  return (localStorage.getItem('ai-agents-theme') as Theme) || 'light';
}

function getServerSnapshot(): Theme {
  return 'light';
}

function subscribeToTheme(callback: () => void) {
  listeners = [...listeners, callback];
  return () => {
    listeners = listeners.filter((l) => l !== callback);
  };
}

function applyTheme(theme: Theme) {
  localStorage.setItem('ai-agents-theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  emitChange();
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const setTheme = useCallback((newTheme: Theme) => {
    applyTheme(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    const current = getThemeSnapshot();
    applyTheme(current === 'light' ? 'dark' : 'light');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
