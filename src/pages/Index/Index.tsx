import {
  CoverCordesSensibles,
  RaesilienceLogo,
  LampeAgdt,
  TshirtStayNoir,
} from '@/assets';
import Intl from '@/i18n/i18n';
import { useConfigStore } from '@/store/store';

const PROJECTS = [
  {
    info: (
      <div className="sticky top-0">
        <h1 className="rae-big-banner uppercase">
          {Intl.t('index.projects-overview.cordes-sensibles.title')}
        </h1>
        <p className="rae-body uppercase">
          {Intl.t('index.projects-overview.cordes-sensibles.description')}
          <br />
          <span className="text-f-tertiary">
            {Intl.t('index.projects-overview.cordes-sensibles.profession')}
          </span>
        </p>
      </div>
    ),
    image: <CoverCordesSensibles className="w-full h-auto" />,
  },
  {
    info: (
      <div className="sticky top-0">
        <h1 className="rae-big-banner uppercase">
          {Intl.t('index.projects-overview.au-gre-du-temps.title')}
        </h1>
        <p className="rae-body uppercase">
          {Intl.t('index.projects-overview.au-gre-du-temps.description')}
          <br />
          <span className="text-f-tertiary">
            {Intl.t('index.projects-overview.au-gre-du-temps.profession')}
          </span>
        </p>
      </div>
    ),
    image: <LampeAgdt className="w-full h-auto" />,
  },
  {
    info: (
      <div className="sticky top-0">
        <h1 className="rae-big-banner uppercase">
          {Intl.t('index.projects-overview.stay-noir.title')}
        </h1>
        <p className="rae-body uppercase">
          {Intl.t('index.projects-overview.stay-noir.description')}
          <br />
          <span className="text-f-tertiary">
            {Intl.t('index.projects-overview.stay-noir.profession')}
          </span>
        </p>
      </div>
    ),
    image: <TshirtStayNoir className="w-full h-auto" />,
  },
];

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

export function Index() {
  const [theme] = useConfigStore((state) => [state.theme]);

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
              flex justify-end items-center gap-9 text-f-primary/80 rae-h3 uppercase`}
          >
            <h3>Scroll</h3>
            <h3>{'//'} 2023</h3>
          </div>
        </div>
      </div>

      <div
        className={`${
          theme === 'theme-dark' ? 'theme-light' : 'theme-dark'
        } bg-primary text-f-primary py-10 px-6`}
      >
        <div className="flex flex-col gap-4">
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
        <h1 className="rae-title uppercase">StayNoir</h1>

        <ul className="list-none flex items-center justify-between">
          {STAYNOIR_LINKS.map((link, idx) => (
            <li key={idx}>
              <a className="text-6xl rae-body uppercase">{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
