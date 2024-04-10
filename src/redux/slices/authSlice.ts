import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
// import auth from '@react-native-firebase/auth';

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
    signOutUser: state => {
      state.user = null;
      state.error = null;
    },
  },
});

export const { setUser, setError, signOutUser } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;
export const selectError = (state: RootState) => state.auth.error;

export default authSlice.reducer;
