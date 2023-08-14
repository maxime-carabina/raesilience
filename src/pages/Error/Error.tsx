import { Link } from 'react-router-dom';

import Intl from '@/i18n/i18n';

export function Error() {
  return (
    <div id="error-page" className="text-f-primary">
      <h1 className="rae-banner">{Intl.t('errors.unexpected-error.title')}</h1>
      <p className="rae-body">
        {Intl.t('errors.unexpected-error.description')}
      </p>
      <Link to="index" className="underline">
        {Intl.t('errors.unexpected-error.link')}
      </Link>
    </div>
  );
}
