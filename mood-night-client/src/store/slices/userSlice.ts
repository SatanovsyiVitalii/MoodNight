import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { userApi } from 'store/apis/userApi';
import { User } from 'store/apis/userApi';

type UserState = {
  user: User | null
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  } as UserState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.signInUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    );
    builder.addMatcher(
      userApi.endpoints.signUpUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    );
    builder.addMatcher(
      userApi.endpoints.signOutUser.matchFulfilled,
      (state, { payload }) => {
        state.user = null;
      }
    );
    builder.addMatcher(
      userApi.endpoints.fetchUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    );
  }
});

export const userReducer = userSlice.reducer;
export const selectSignedInUser = (state: RootState) => state.user;