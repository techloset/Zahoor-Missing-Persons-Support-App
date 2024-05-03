import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useAppDispatch } from '../store/store';
import { loginUser } from '../store/slices/authSlice';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '279731918860-tl149fdve8oao52n0m76michlhf8g1sm.apps.googleusercontent.com',
});

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
    // await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // const { idToken } = await GoogleSignin.signIn();
    // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // return auth().signInWithCredential(googleCredential);
    Alert.alert('Error', 'Google Sign In is not implemented yet');
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
