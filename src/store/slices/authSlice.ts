import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { AuthData, AuthState, User } from '../../types/types';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '279731918860-tl149fdve8oao52n0m76michlhf8g1sm.apps.googleusercontent.com',
});

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
      return thunkAPI.rejectWithValue('User Created!');
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

export const signInWithGoogle = createAsyncThunk(
  'auth/signInWithGoogle',
  async () => {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );
      const user = userCredential.user;
      console.log(user);
      const userExists = await firestore()
        .collection('Users')
        .where('email', '==', user.email)
        .get();
      if (userExists.empty) {
        await firestore().collection('Users').add(user);
      }

      return user;
    } catch (error) {
      throw error;
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
    builder.addCase(signInWithGoogle.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signInWithGoogle.fulfilled, (state, action) => {
      state.loading = false;
      state.user = {
        ...action.payload,
        displayName: action.payload.displayName || '',
        photoURL: action.payload.photoURL || '',
        email: action.payload.email ?? '',
      };
    });
    builder.addCase(signInWithGoogle.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? '';
    });
  },
});

export default authSlice.reducer;
