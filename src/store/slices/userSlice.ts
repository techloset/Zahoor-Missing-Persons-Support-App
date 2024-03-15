import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/types';

export interface UserState {
  user: User | null;
  userLoading: boolean;
}

const initialState: UserState = {
  user: null,
  userLoading: false,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setUserLoading: (state, action: PayloadAction<boolean>) => {
      state.userLoading = action.payload;
    },
  },
});

export const { setUser, setUserLoading } = counterSlice.actions;
export default counterSlice.reducer;
