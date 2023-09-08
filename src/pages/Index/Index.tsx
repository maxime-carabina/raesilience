import { Link } from 'react-router-dom';

import { PROJECTS } from './Projects/Projects';
import { RaesilienceLogo } from '@/assets';
import Intl from '@/i18n/i18n';
import { useConfigStore } from '@/store/store';

const STAYNOIR_LINKS = [
  {
    title: Intl.t('index.stay-noir-links.clothing'),
    link: '',
  },
  {
    title: Intl.t('index.stay-noir-links.streetwear'),
    link: '',
  },
  {
    title: Intl.t('index.stay-noir-links.soon'),
    link: '',
  },
  {
    title: Intl.t('index.stay-noir-links.available'),
    link: '',
  },
];

const SOCIAL_MEDIA_LINKS = [
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/rae.stud',
  },
  {
    title: 'Twitter',
    link: '',
  },
  {
    title: 'Behance',
    link: '',
  },
  {
    title: 'Linkedin',
    link: '',
  },
];

export function Index() {
  const [theme] = useConfigStore((state) => [state.theme]);

  const isDarkTheme = theme === 'theme-dark';

  return (
    <div className="text-f-primary">
      <div
        className={`bg-[length:600px] bg-no-repeat bg-center
          bg-[url('@/assets/images/CordesSensibles/cordes-sensibles.png')]`}
      >
        <div className="flex justify-around items-center min-h-screen">
          <div>
            <h3 className="rae-h3">
              {Intl.t('index.hero-banner.description')}
            </h3>
            <h1 className="rae-banner max-w-lg uppercase">
              {Intl.t('index.hero-banner.title')}
            </h1>
          </div>
          <RaesilienceLogo theme={theme} className="w-52" />
          <div
            className={`absolute bottom-2 right-8 cursor-default max-lg:hidden
              flex justify-end items-center gap-96 text-f-primary/80 rae-h3 uppercase`}
          >
            <h3>Scroll</h3>
            <h3>{'//'} 2023</h3>
          </div>
        </div>
      </div>

      <div
        className={`${
          theme === 'theme-dark' ? 'theme-light' : 'theme-dark'
        } bg-primary text-f-primary py-36 px-6`}
      >
        <div className="flex flex-col gap-6">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="flex">
              <div className="w-1/2">{project.info}</div>
              <div className="w-1/2">{project.image}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-16 flex items-center justify-between">
          <h1 className="rae-title uppercase">
            {Intl.t('index.coming-soon.title')}
          </h1>
          <h1 className="rae-title uppercase">{'//'} 2022</h1>
        </div>
        <div className="block overflow-hidden uppercase">
          <div
            className={`block rae-banner text-f-tertiary text-[304px]
            tracking-[40px] whitespace-nowrap`}
          >
            <span className="inline-block text-center whitespace-nowrap animate-infinite-loop">
              RÆsilience-
            </span>
            <span className="inline-block text-center whitespace-nowrap animate-infinite-loop">
              RÆsilience-
            </span>
          </div>
        </div>
        <div className="mb-28	flex items-center justify-end">
          <p className="rae-body text-justify w-1/2 uppercase">
            {Intl.t('index.coming-soon.description')}
          </p>
        </div>
        <p className="mb-2 tracking-[15px] rae-body uppercase">StayNoir</p>

        <ul className="list-none flex flex-wrap items-center justify-between gap-5">
          {STAYNOIR_LINKS.map((link, idx) => (
            <li key={idx}>
              <p className="text-6xl rae-body uppercase">{link.title}</p>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`${
          isDarkTheme ? 'theme-light' : 'theme-dark'
        } bg-primary text-f-primary p-6`}
      >
        <ul className="mb-40 list-none flex justify-between uppercase">
          <li>
            <RaesilienceLogo
              theme={isDarkTheme ? 'theme-light' : 'theme-dark'}
              className="w-12"
            />
          </li>
          <li>
            <h3 className="rae-h3 w-44">{Intl.t('index.contact.question')}</h3>
          </li>
          <li>
            <h3 className="rae-h3 w-28">
              {Intl.t('index.contact.send-me-a-message')}
            </h3>
          </li>
        </ul>
        <h1 className="mb-12 rae-banner text-8xl uppercase">
          raesilience.stud
          <br />
          @gmail.com
        </h1>
        <div className="flex itmes-center justify-end gap-24 mb-36 mr-28">
          <ul className="list-none uppercase">
            {SOCIAL_MEDIA_LINKS.map((link, idx) => (
              <li key={idx}>
                <Link to={link.link} className="rae-body">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="rae-h3 text-justify w-full max-w-xs">
            {Intl.t('index.contact.description-social-media')}
          </h3>
        </div>
        <p className="rae-body2">{Intl.t('index.contact.profession')}</p>
      </div>
    </div>
  );
}
