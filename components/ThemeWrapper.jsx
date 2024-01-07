// ThemeWrapper.js
import { useEffect, useContext } from 'react';
import { ThemeProvider, ThemeContext } from '../context/ThemeContext';

export default function ThemeWrapper({ children }) {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return <>{children}</>;
}
  