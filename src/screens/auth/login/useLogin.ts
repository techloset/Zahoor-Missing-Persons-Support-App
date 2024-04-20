import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
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

  const loginHandler = () => {
    auth().signInWithEmailAndPassword(email, password);
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
