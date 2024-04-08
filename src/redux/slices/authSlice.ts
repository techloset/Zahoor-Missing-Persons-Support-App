import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: any;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, setError } = authSlice.actions;

export default authSlice.reducer;
