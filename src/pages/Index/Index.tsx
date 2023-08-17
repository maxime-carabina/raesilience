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
        <h1 className="rae-big-banner uppercase">Cordes sen-sibles //</h1>
        <p className="rae-body uppercase">
          Cover Ep // Charlet
          <br />
          <span className="text-f-tertiary"> Design+</span>
        </p>
      </div>
    ),
    image: <CoverCordesSensibles className="w-full h-auto" />,
  },
  {
    info: (
      <div className="sticky top-0">
        <h1 className="rae-big-banner uppercase">Au Gré Du Temps //</h1>
        <p className="rae-body uppercase">
          Au Gré Du Temps
          <br />
          <span className="text-f-tertiary">Photographie</span>
        </p>
      </div>
    ),
    image: <LampeAgdt className="w-full h-auto" />,
  },
  {
    info: (
      <div className="sticky top-0">
        <h1 className="rae-big-banner uppercase">Stay Noir //</h1>
        <p className="rae-body uppercase">
          Streetwear
          <br />
          <span className="text-f-tertiary">Da</span>
        </p>
      </div>
    ),
    image: <TshirtStayNoir className="w-full h-auto" />,
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
    </div>
  );
}
