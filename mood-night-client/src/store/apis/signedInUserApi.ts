import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'store';

export interface User {
  id?: number
  email?: string
}

export const signedInUserApi = createApi({
  reducerPath: 'signInUser',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints(builder) {
    return {
      fetchUser: builder.query<User, void>({
        query: () => {
          return {
            url: '/users/whoami',
            method: 'GET'
          };
        },
      }),
      signInUser: builder.mutation({
        query: ({ email, password }) => {
          return {
            url: '/users/signin',
            method: 'POST',
            body: {
              email,
              password,
            },
          };
        },
      }),
    }
  }
});

export const getSigedInUser = (state: RootState) => {
  return signedInUserApi.endpoints.fetchUser.select(undefined)(state)?.data ?? {};
};

export const {
  useSignInUserMutation,
  useFetchUserQuery,
} = signedInUserApi;