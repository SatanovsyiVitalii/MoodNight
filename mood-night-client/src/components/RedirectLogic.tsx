import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFetchUserQuery } from 'store';
import { PATHS, publicPages } from 'routes/constants';
import { selectSignedInUser } from 'store/slices/userSlice';

interface RedirectLogicPropsInterface {
  children: React.ReactNode;
}

function RedirectLogic({ children }: RedirectLogicPropsInterface) {
  const location = useLocation();
  let signedInUser = null;
  const { user } = useSelector(selectSignedInUser);
  const { data: fetchedUser, isFetching, error } = useFetchUserQuery(undefined, { skip: !!user });

  signedInUser = user || fetchedUser;

  if (isFetching) {
    return <div>IS FETCHING...</div>
  }

  if (signedInUser && signedInUser.id) {
    return <>{children}</>;
  }

  console.log('publicPages', publicPages);
  const isPublicPage = Object.values(publicPages).find((_page) => location.pathname === _page);

  console.log('isPublicPage', isPublicPage);

  if (location.pathname !== PATHS.SIGNIN && !isPublicPage) {
    return <Navigate to={PATHS.SIGNIN} />;
  }

  return <>{children}</>;
}

export default RedirectLogic;