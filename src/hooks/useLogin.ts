import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useAppDispatch } from '../store/store';
import { loginUser, signInWithGoogle } from '../store/slices/authSlice';

export const useLogin = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const loginHandler = () => {
    try {
      setLoading(true);
      dispatch(loginUser({ email, password }));
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Error', 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  async function onGoogleButtonPress() {
    try {
      setLoading(true);
      await dispatch(signInWithGoogle());
    } catch (error) {
      console.error('Error logging in with Google:', error);
      Alert.alert('Error', 'Failed to login with Google');
    } finally {
      setLoading(false);
    }
  }

  return {
    navigation,
    email,
    setEmail,
    password,
    setPassword,
    loginHandler,
    onGoogleButtonPress,
    loading,
  };
};
