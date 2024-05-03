import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert } from 'react-native';
import { useAppDispatch } from '../store/store';
import { sendPasswordResetEmail } from '../store/slices/firestoreSlice';

export default function useForgotPassword() {
  const [email, setEmail] = useState<string>('');
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const forgotHandler = async () => {
    try {
      await dispatch(sendPasswordResetEmail('user@example.com'));
      Alert.alert('Success', 'Password reset email sent successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to send password reset email');
      console.error('Error sending password reset email:', error);
    }
  };
  return {
    email,
    setEmail,
    navigation,
    forgotHandler,
  };
}
