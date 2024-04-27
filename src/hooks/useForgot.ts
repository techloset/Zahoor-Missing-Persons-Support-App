import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export default function useForgot() {
  const [email, setEmail] = useState<string>('');
  const navigation = useNavigation();
  const forgotHandler = async () => {
    await auth().sendPasswordResetEmail(email);
    Alert.alert(
      'Reset Code Sent',
      'Please check your email for the reset code.',
    );
  };
  return {
    email,
    setEmail,
    navigation,
    forgotHandler,
  };
}
