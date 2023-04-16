import React from 'react';

const AccountEditorPage = React.lazy(() => import('../pages/AccountEditorPage'));

function AccountEditorRoute() {
  return (
    <AccountEditorPage />
  );
}

export default AccountEditorRoute;