import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useAppDispatch } from '../../../store/store';
import { loginUser } from '../../../store/slices/authSlice';
export interface UserCredentials {
  idToken: string;
  user: {
    id: string;
    email: string;
  };
}

export const useLogin = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useAppDispatch();

  const loginHandler = () => {
    dispatch(loginUser({ email, password }));
  };

  const signIn = async () => {
    Alert.alert('Login with Google is not working');
  };

  return {
    navigation,
    email,
    setEmail,
    password,
    setPassword,
    loginHandler,
    signIn,
  };
};
