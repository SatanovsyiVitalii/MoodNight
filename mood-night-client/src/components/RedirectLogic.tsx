import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchUserQuery, User, setUser, selectUser } from 'store';

interface RedirectLogicPropsInterface {
  children: React.ReactNode;
}

function RedirectLogic({ children }: RedirectLogicPropsInterface) {
  const dispatch = useDispatch();
  const { data, isFetching, error } = useFetchUserQuery();
  const user: User | null = useSelector(selectUser);

  useEffect(() => {
    if (!user && data) {
      dispatch(setUser(data));
    }
  }, [data, dispatch, user]);

  if (error && 'status' in error && error.status !== 403) {
    return <div>Error</div>
  }

  if ((isFetching || !user) && !error) {
    return <div>Fetching...</div>;
  }

  if (user) {
    return <>{children}</>;
  }

  return <Navigate to='/signin' />;
}

export default RedirectLogic;