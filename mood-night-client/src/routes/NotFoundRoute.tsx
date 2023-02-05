import React from 'react';

const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'));

function NotFoundRoute() {
  return (
    <NotFoundPage />
  );
}

export default NotFoundRoute;