import { RaesilienceLogo } from '@/assets';
import Intl from '@/i18n/i18n';
import { useConfigStore } from '@/store/store';

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
    </div>
  );
}
