import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { userApi } from './apis/userApi';
import { postsApi } from './apis/postsApi';
import { userReducer } from './slices/userSlice';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(postsApi.middleware);
  }
});

setupListeners(store.dispatch);

export {
  useSignInUserMutation,
  useFetchUserQuery,
  getSignedInUser,
  useSignUpUserMutation
} from './apis/userApi';
export {
  useFetchPostsQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useFetchPostQuery,
} from './apis/postsApi';
export type { User } from './apis/userApi';
export type RootState = ReturnType<typeof store.getState>;