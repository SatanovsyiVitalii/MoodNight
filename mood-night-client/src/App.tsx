import { Suspense } from 'react';
import { Global } from '@emotion/react';
import 'normalize.css';
import { ThemeProvider } from '@emotion/react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Header, Sidebar, RedirectLogic } from 'components';
import { PATHS } from 'routes/constants';
import { theme } from 'theme';

import {
  HomeRoute,
  NotFoundRoute,
  SignInRoute,
  SignUpRoute,
  ProtectedRoute,
  AccountEditorRoute,
  PostsEditorRoute,
  PostDetailsRoute,
} from './routes';

export const pagesShowSideBar = {
  [PATHS.PROTECTED]: PATHS.PROTECTED,
  [PATHS.ACCOUNT_EDITOR]: PATHS.ACCOUNT_EDITOR,
  [PATHS.POSTS_EDITOR]: PATHS.POSTS_EDITOR
};

function App() {
  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <RedirectLogic>
        <div css={{ display: 'flex' }}>
          {pagesShowSideBar[location.pathname] && <Sidebar />}
          <Suspense>
            <Routes>
              <Route
                path={`${PATHS.POST_DETAILS}/:id`}
                element={
                  <PostDetailsRoute />
                }
              />
              <Route
                path={PATHS.POSTS_EDITOR}
                element={
                  <PostsEditorRoute />
                }
              />
              <Route
                path={PATHS.ACCOUNT_EDITOR}
                element={
                  <AccountEditorRoute />
                }
              />
              <Route
                path={PATHS.PROTECTED}
                element={
                  <ProtectedRoute />
                }
              />
              <Route
                path={PATHS.SIGNIN}
                element={<SignInRoute />}
              />
              <Route
                path={PATHS.SIGNUP}
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
          </Suspense>
        </div>
      </RedirectLogic>
    </ThemeProvider>
  );
}

export default App;
