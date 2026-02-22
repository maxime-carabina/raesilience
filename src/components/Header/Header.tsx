import { Link, useLocation } from 'react-router-dom';

import { RaesilienceLogo } from '@/assets/Icons';
import Intl from '@/i18n/i18n';

interface HeaderProps {
  theme: 'theme-light' | 'theme-dark';
}

const LINKS = [
  {
    name: Intl.t('header.projects'),
    link: Intl.t('pages-link.projects'),
  },
  {
    name: Intl.t('header.about'),
    link: Intl.t('pages-link.about'),
  },
  {
    name: Intl.t('header.contact'),
    link: Intl.t('pages-link.contact'),
  },
  {
    name: Intl.t('header.shop'),
    link: Intl.t('pages-link.shop'),
  },
];

const DIFFERENT_THEME_PAGES = [
  Intl.t('pages-link.projects'),
  Intl.t('pages-link.contact'),
];

export function Header(props: HeaderProps) {
  let { theme } = props;

  const location = useLocation();

  // const projectsPage =
  //   location.pathname.substring(1) === Intl.t('pages-link.projects');

  // if (projectsPage)
  //   theme = theme === 'theme-dark' ? 'theme-light' : 'theme-dark';

  //DIFFERENT_THEME_PAGES.find((page) => page === location.pathname.substring(1))
  const isElementFound = DIFFERENT_THEME_PAGES.find(
    (page) => page === location.pathname.substring(1),
  );

  if (isElementFound)
    theme = theme === 'theme-dark' ? 'theme-light' : 'theme-dark';

  return (
    <header
      className={`${theme} absolute top-0 left-0 w-full p-6 flex justify-between items-center text-f-primary`}
    >
      <Link to="/">
        <RaesilienceLogo theme={theme} className="w-14 h-14" />
      </Link>
      <ul className="list-none flex items-center gap-7 rae-title uppercase">
        {LINKS.map((link, idx) => (
          <li key={idx} className="hover:text-f-primary/80">
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
        <li>
          <div className="mb-1 rounded-full bg-secondary w-4 h-4" />
        </li>
      </ul>
    </header>
  );
}
