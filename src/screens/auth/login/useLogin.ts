import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import // GoogleSignin,
// statusCodes,
'@react-native-google-signin/google-signin';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import { loginUser } from '../../../store/slices/authActions';
// import { loginWithGoogle } from '../../../redux/slices/authActions';

export interface UserCredentials {
  idToken: string;
  user: {
    id: string;
    email: string;
  };
}

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const loginHandler = () => {
    dispatch(loginUser({ email, password }) as any);
  };

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '279731918860-tl149fdve8oao52n0m76michlhf8g1sm.apps.googleusercontent.com',
  //   });
  // }, []);

  const signIn = async () => {
    //   try {
    //     await GoogleSignin.hasPlayServices();
    //     const userInfo = await GoogleSignin.signIn();
    //     const userCredentials: UserCredentials = {
    //       idToken: userInfo.idToken!,
    //       user: {
    //         id: userInfo.user.id,
    //         email: userInfo.user.email,
    //       },
    //     };
    //     // dispatch(loginWithGoogle(userCredentials) as any);
    //   } catch (error: any) {
    //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //       console.log('Google sign-in cancelled');
    //     } else if (error.code === statusCodes.IN_PROGRESS) {
    //       console.log('Google sign-in in progress');
    //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //       console.log('Google play services not available');
    //     } else {
    //       console.error('Google sign-in error:', error);
    //     }
    //   }
    Alert.alert('Login with Google');
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
