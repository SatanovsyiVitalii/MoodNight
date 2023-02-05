import React from 'react';

const SignUpPage = React.lazy(() => import('../pages/SignUpPage'));

function SignUpRoute() {
  return (
    <SignUpPage />
  );
}

export default SignUpRoute;