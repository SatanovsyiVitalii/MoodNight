import React from 'react';

const SignInPage = React.lazy(() => import('../pages/SignInPage'));

function SignInRoute() {
  return (
    <SignInPage />
  );
}

export default SignInRoute;