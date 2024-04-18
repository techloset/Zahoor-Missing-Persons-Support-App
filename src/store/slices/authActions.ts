import { ThunkAction } from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { RootState } from '../store';
import { setUser, setError, signOutUser } from '../slices/authSlice';
import { AuthData } from '../../types/types';

export const createUser =
  (userData: AuthData): ThunkAction<void, RootState, null, Action<string>> =>
  async dispatch => {
    const { email, password } = userData;
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log('User account created & signed in!');
      dispatch(setUser(userCredential.user));
    } catch (error) {
      const authError = error as FirebaseAuthTypes.NativeFirebaseAuthError;
      const errorMessage =
        authError.code === 'auth/email-already-in-use'
          ? 'That email address is already in use!'
          : authError.code === 'auth/invalid-email'
          ? 'That email address is invalid!'
          : 'An error occurred while creating the account.';
      dispatch(setError(errorMessage));
      console.error(error);
    }
  };

export const loginUser =
  (userData: AuthData): ThunkAction<void, RootState, null, Action<string>> =>
  async dispatch => {
    const { email, password } = userData;
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      console.log('User successfully signed in!');
      dispatch(setUser(userCredential.user));
    } catch (error) {
      const authError = error as FirebaseAuthTypes.NativeFirebaseAuthError;
      const errorMessage =
        authError.code === 'auth/user-not-found'
          ? 'User not found. Please check your credentials.'
          : authError.code === 'auth/wrong-password'
          ? 'Incorrect password. Please try again.'
          : 'An error occurred while logging in.';
      dispatch(setError(errorMessage));
      console.error(error);
    }
  };

export const signOut =
  () =>
  async (
    dispatch: (arg0: { payload: undefined; type: 'auth/signOutUser' }) => void,
  ) => {
    try {
      await auth().signOut();
      dispatch(signOutUser());
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

// export const loginWithGoogle =
//   (
//     userCredentials: UserCredentials,
//   ): ThunkAction<void, RootState, null, Action<string>> =>
//   async dispatch => {
//     try {
//       // Implement login with Google using the provided user credentials
//       dispatch(loginWithGoogle(userCredentials));
//       // dispatch(
//       //   loginWithGoogle({
//       //     ...userCredentials,
//       //     idToken: '',
//       //     user: {
//       //       id: '',
//       //       email: '',
//       //     },
//       //   }),
//       // );
//     } catch (error) {
//       console.error('Error logging in with Google:', error);
//     }
//   };