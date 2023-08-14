import Intl from '@/i18n/i18n';

export function NotFound() {
  return (
    <div id="error-page">
      <h1 className="rae-banner text-f-primary">
        {Intl.t('errors.not-found.title')}
      </h1>
    </div>
  );
}
