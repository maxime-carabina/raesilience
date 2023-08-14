import { useEffect } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import { RaeLayout } from '@/components';
import { useLocalStorage } from '@/custom/useLocalStorage';
import { useConfigStore } from '@/store/store';

export function Base() {
  const navigate = useNavigate();

  // Hooks
  const [theme, setThemeStorage] = useLocalStorage<string>(
    'raesilience-theme',
    'theme-dark',
  );

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  // Store
  const setThemeStore = useConfigStore((s) => s.setTheme);

  // Functions
  function handleSetTheme() {
    const toggledTheme = theme === 'theme-dark' ? 'theme-light' : 'theme-dark';

    setThemeStorage(toggledTheme);
    setThemeStore(toggledTheme);
  }

  // Template
  return (
    <div className={theme}>
      <RaeLayout onSetTheme={handleSetTheme} storedTheme={theme}>
        <Outlet />
      </RaeLayout>
    </div>
  );
}
