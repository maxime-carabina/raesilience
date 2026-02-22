import { persist } from 'zustand/middleware';

export interface ConfigStoreState {
  lang: string;
  theme: 'theme-dark' | 'theme-light';

  setLang: (lang: string) => void;
  setTheme: (theme: 'theme-dark' | 'theme-light') => void;

  dropLang: () => void;
  dropTheme: () => void;
}

const configStore = persist<ConfigStoreState>(
  (set) => ({
    lang: 'fr_FR',
    theme: 'theme-light',

    setLang: (lang: string) => set({ lang }),
    setTheme: (theme: 'theme-dark' | 'theme-light') => set({ theme }),

    dropLang: () => set({ lang: 'fr_FR' }),
    dropTheme: () => set({ theme: 'theme-light' }),
  }),
  {
    name: 'config-store',
  },
);

export default configStore;
