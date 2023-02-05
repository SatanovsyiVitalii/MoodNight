import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { signedInUserApi } from './apis/signedInUserApi';
import { userReducer, setUser, selectUser } from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [signedInUserApi.reducerPath]: signedInUserApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(signedInUserApi.middleware);
  }
});

setupListeners(store.dispatch);

export { useSignInUserMutation, useFetchUserQuery, getSigedInUser } from './apis/signedInUserApi';
export type { User } from './apis/signedInUserApi';
export type RootState = ReturnType<typeof store.getState>;

export {
  setUser,
  selectUser,
};