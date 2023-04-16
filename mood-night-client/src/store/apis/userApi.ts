import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'store';

export interface User {
  id?: number
  email?: string
  name?: string
  surname?: string
}

export interface SignInRequest {
  email: string;
  password: string;
}

export const userApi = createApi({
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
            method: 'GET',
            credentials: 'include',
          };
        },
      }),
      signInUser: builder.mutation<User | null, SignInRequest>({
        query: ({ email, password }) => {
          return {
            url: '/users/signin',
            credentials: 'include',
            method: 'POST',
            body: {
              email,
              password,
            },
          };
        },
      }),
      signUpUser: builder.mutation({
        query: ({ email, password }) => {
          return {
            url: '/users/signup',
            credentials: 'include',
            method: 'POST',
            body: {
              email,
              password,
            }
          }
        }
      }),
      signOutUser: builder.mutation<void, void>({
        query: () => {
          return {
            url: '/users/signout',
            method: 'POST',
            credentials: 'include',
          }
        },
      }),
    }
  }
});

export const getSignedInUser = (state: RootState) => {
  return userApi.endpoints.fetchUser.select(undefined)(state)?.data ?? {};
};

export const {
  useSignInUserMutation,
  useFetchUserQuery,
  useSignUpUserMutation,
  useSignOutUserMutation,
} = userApi;