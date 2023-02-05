import React from 'react';

const ProtectedPage = React.lazy(() => import('../pages/ProtectedPage'));

function ProtectedRoute() {
  return (
    <ProtectedPage />
  );
}

export default ProtectedRoute;