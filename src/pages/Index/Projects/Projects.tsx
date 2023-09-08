import { CoverCordesSensibles, LampeAgdt, TshirtStayNoir } from '@/assets';
import Intl from '@/i18n/i18n';

export const PROJECTS = [
  {
    info: (
      <div className="sticky top-0">
        <h1 className="max-w-lg	rae-big-banner uppercase leading-none">
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
    image: (
      <CoverCordesSensibles customClassImg="object-cover w-full h-screen" />
    ),
  },
  {
    info: (
      <div className="sticky top-0">
        <h1 className="max-w-lg	rae-big-banner uppercase leading-none">
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
    image: <LampeAgdt customClassImg="object-cover w-full h-screen" />,
  },
  {
    info: (
      <div className="sticky top-0">
        <h1 className="max-w-lg	rae-big-banner uppercase leading-none">
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
    image: <TshirtStayNoir customClassImg="object-cover w-full h-screen" />,
  },
];
