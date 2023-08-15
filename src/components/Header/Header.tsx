import { Link } from 'react-router-dom';

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

export function Header(props: HeaderProps) {
  const { theme } = props;

  return (
    <header className="p-6 flex justify-between items-center text-f-primary">
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
          <div className="rounded-full bg-secondary w-4 h-4" />
        </li>
      </ul>
    </header>
  );
}
