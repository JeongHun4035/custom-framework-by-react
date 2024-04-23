import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextProps {
  themeStatus: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const lastThemeColor = localStorage.getItem('theme-color')
  const [themeStatus, setThemeStatus] = useState<string>(lastThemeColor || 'CgSun');
  const toggleTheme = () => {
    const newThemeStatus = themeStatus === 'CgSun' ? 'CiDark' : 'CgSun';
    setThemeStatus(newThemeStatus);
    localStorage.setItem('theme-color', newThemeStatus);
  };
  useEffect(() => {
    if (themeStatus === 'CiDark') {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    }
  }, [themeStatus]);

  const value: ThemeContextProps = {
    themeStatus,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};