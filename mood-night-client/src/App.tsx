/** @jsx jsx */ import { jsx } from '@emotion/react'
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, Page, RedirectLogic } from 'components';

import {
  HomeRoute,
  NotFoundRoute,
  SignInRoute,
  SignUpRoute,
  ProtectedRoute,
} from './routes';

function App() {
  return (
    <React.Suspense fallback={<div>Lazy loading</div>}>
      <Page>
        <Header />
        <Routes>

          <Route
            path='protected'
            element={
              <RedirectLogic>
                <ProtectedRoute />
              </RedirectLogic>
            }
          />
          <Route
            path='signin'
            element={<SignInRoute />}
          />
          <Route
            path='signup'
            element={<SignUpRoute />}
          />
          <Route
            path='/'
            element={<HomeRoute />}
          />
          <Route
            path='*'
            element={<NotFoundRoute />}
          />
        </Routes>
      </Page>
    </React.Suspense>
  );
}

export default App;
