//app/context/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Theme {
  isDark: boolean;
  colors: {
    background: string;
    card: string;
    text: string;
    textSecondary: string;
    border: string;
    header: string;
    headerText: string;
    headerSubtitle: string;
    accent: string;
    accentText: string;
    emojiBg: string;
    footerBg: string;
    shadow: string;
  };
}

const lightTheme: Theme = {
  isDark: false,
  colors: {
    background: '#f8f8f8',
    card: '#fff',
    text: '#333',
    textSecondary: '#666',
    border: '#eee',
    header: '#f4511e',
    headerText: '#fff',
    headerSubtitle: '#ffe0d0',
    accent: '#f4511e',
    accentText: '#fff',
    emojiBg: '#f5f5f5',
    footerBg: 'rgba(248, 248, 248, 0.95)',
    shadow: '#000',
  },
};

const darkTheme: Theme = {
  isDark: true,
  colors: {
    background: '#121212',
    card: '#1e1e1e',
    text: '#f0f0f0',
    textSecondary: '#aaa',
    border: '#2c2c2c',
    header: '#b33a12',
    headerText: '#fff',
    headerSubtitle: '#ffccbc',
    accent: '#f4511e',
    accentText: '#fff',
    emojiBg: '#2a2a2a',
    footerBg: 'rgba(18, 18, 18, 0.95)',
    shadow: '#000',
  },
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemScheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemScheme === 'dark');

  // Load saved preference
  useEffect(() => {
    AsyncStorage.getItem('themePreference').then((saved) => {
      if (saved !== null) {
        setIsDark(saved === 'dark');
      }
    });
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      AsyncStorage.setItem('themePreference', next ? 'dark' : 'light');
      return next;
    });
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}