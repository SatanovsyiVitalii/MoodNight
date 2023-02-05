import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
  },
});

export const selectUser = ((state: RootState) => state.user);
export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;