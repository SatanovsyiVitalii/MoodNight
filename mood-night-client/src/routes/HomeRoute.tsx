import React from 'react';

const HomePage = React.lazy(() => import('../pages/HomePage'));

function HomeRoute() {
  return (
    <HomePage />
  );
}

export default HomeRoute;