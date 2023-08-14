import { persist } from 'zustand/middleware';

export interface ConfigStoreState {
  lang: string;
  theme: string;

  setLang: (lang: string) => void;
  setTheme: (theme: string) => void;

  dropLang: () => void;
  dropTheme: () => void;
}

const configStore = persist<ConfigStoreState>(
  (set) => ({
    lang: 'en_FR',
    theme: 'theme-dark',

    setLang: (lang: string) => set({ lang }),
    setTheme: (theme: string) => set({ theme }),

    dropLang: () => set({ lang: 'en_FR' }),
    dropTheme: () => set({ theme: 'theme-dark' }),
  }),
  {
    name: 'config-store',
  },
);

export default configStore;
