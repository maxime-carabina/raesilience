import React from 'react';

import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import './index.css';

import { Base } from '@/components';
import Intl from '@/i18n/i18n';
import { Error, NotFound, Index } from '@/pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Base />}>
      {/* routes for pages */}
      <Route index element={<Index />} />
      <Route path={Intl.t('pages-link.projects')} element={<></>} />
      <Route path={Intl.t('pages-link.about')} element={<></>} />
      <Route path={Intl.t('pages-link.contact')} element={<></>} />
      <Route path={Intl.t('pages-link.shop')} element={<></>} />

      {/* routes for errors */}
      <Route path="error" element={<Error />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Error />} />
  </React.StrictMode>,
);
