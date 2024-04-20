// slices/authSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { AuthData, AuthState, User } from '../../types/types';

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const createUser = createAsyncThunk(
  'auth/createUser',
  async ({ email, password }: AuthData, thunkAPI) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);

      return thunkAPI.rejectWithValue('Failed to create user');
    } catch (error) {
      return thunkAPI.rejectWithValue('Error creating user');
    }
  },
);
export const uploadUser = createAsyncThunk(
  'auth/uploadUser',
  async (user: User, thunkAPI) => {
    try {
      await firestore().collection('Users').add(user);
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error uploading user');
    }
  },
);
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (
    { email, password }: { email: string; password: string },
    thunkAPI,
  ) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      return { email };
    } catch (error) {
      return thunkAPI.rejectWithValue('Error logging in');
    }
  },
);

// Thunk action to sign out user
export const signoutUser = createAsyncThunk(
  'auth/signoutUser',
  async (_, thunkAPI) => {
    try {
      await auth().signOut();
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error signing out');
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createUser.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createUser.fulfilled, state => {
      state.loading = false;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    builder.addCase(uploadUser.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(uploadUser.fulfilled, state => {
      state.loading = false;
    });
    builder.addCase(uploadUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    builder.addCase(loginUser.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = { email: action.payload.email } as User;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    builder.addCase(signoutUser.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signoutUser.fulfilled, state => {
      state.loading = false;
      state.user = null;
    });
    builder.addCase(signoutUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default authSlice.reducer;
