import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { AuthState, AuthData } from '../../types/types';

// Define the initial state
const initialState: AuthState = {
  user: null,
  error: null,
};

// Async Thunks for user creation, login, and sign out
export const createUser = createAsyncThunk<void, AuthData>(
  'auth/createUser',
  async (userData, { rejectWithValue }) => {
    const { email, password, photoURL, displayName } = userData;
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      const userInfo = {
        email,
        photoURL,
        displayName,
      };

      await firestore()
        .collection('Users')
        .doc(userCredential.user.uid)
        .set(userInfo);

      console.log('User account created & signed in!');
    } catch (error) {
      const authError = error as FirebaseAuthTypes.NativeFirebaseAuthError;
      const errorMessage =
        authError.code === 'auth/email-already-in-use'
          ? 'That email address is already in use!'
          : authError.code === 'auth/invalid-email'
          ? 'That email address is invalid!'
          : 'An error occurred while creating the account.';
      return rejectWithValue(errorMessage);
    }
  },
);

export const loginUser = createAsyncThunk<void, AuthData>(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    const { email, password } = userData;
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      console.log('User successfully signed in!');
    } catch (error) {
      const authError = error as FirebaseAuthTypes.NativeFirebaseAuthError;
      const errorMessage =
        authError.code === 'auth/user-not-found'
          ? 'User not found. Please check your credentials.'
          : authError.code === 'auth/wrong-password'
          ? 'Incorrect password. Please try again.'
          : 'An error occurred while logging in.';
      return rejectWithValue(errorMessage);
    }
  },
);

export const signOut = createAsyncThunk<void>(
  'auth/signOut',
  async (_, { rejectWithValue }) => {
    try {
      await auth().signOut();
      console.log('User signed out successfully!');
    } catch (error) {
      return rejectWithValue('Error signing out.');
    }
  },
);

// Create the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
      state.error = null;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    signOutUser(state) {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createUser.rejected, (state, action) => {
        state.error = action.payload || 'An error occurred.';
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload || 'An error occurred.';
      })
      .addCase(signOut.rejected, (state, action) => {
        state.error = action.payload || 'An error occurred.';
      });
  },
});

export const { setUser, setError, signOutUser } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;
export const selectError = (state: RootState) => state.auth.error;

export default authSlice.reducer;
