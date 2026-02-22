// import Intl from '@/i18n/i18n';
import { useConfigStore } from '@/store/store';

export function Projects() {
  const [theme] = useConfigStore((state) => [state.theme]);

  const isDarkTheme = theme === 'theme-dark';

  return (
    <div className={`${isDarkTheme ? 'theme-light' : 'theme-dark'} bg-primary`}>
      <div className="min-h-screen mt-24">ok</div>
    </div>
  );
}
