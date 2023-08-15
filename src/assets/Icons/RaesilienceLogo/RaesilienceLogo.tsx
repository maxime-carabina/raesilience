import { ComponentPropsWithoutRef } from 'react';

import RaesilienceLogoBlack from './raesilience-logo-black.png';
import RaesilienceLogoWhite from './raesilience-logo-white.png';

interface PNGProps extends ComponentPropsWithoutRef<'div'> {
  theme?: 'theme-light' | 'theme-dark' | undefined;
}

export function RaesilienceLogo(props: PNGProps) {
  const { theme = 'theme-dark', ...rest } = props;

  const isDark = theme === 'theme-dark';

  return (
    <div data-testid="raesilience-logo" className="w-fit" {...rest}>
      {isDark ? (
        <img src={RaesilienceLogoWhite} alt="raesilience-logo-white" />
      ) : (
        <img src={RaesilienceLogoBlack} alt="raesilience-logo-black" />
      )}
    </div>
  );
}
