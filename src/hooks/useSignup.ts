import { useState } from 'react';
import { createUser, uploadUser } from '../store/slices/authSlice';
import { useAppDispatch } from '../store/store';
import { Alert } from 'react-native';
export const useSignup = () => {
  const [displayName, setDisplayName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  const handleCreateUser = () => {
    try {
      dispatch(createUser({ email, password }));
    } catch (error) {
      Alert.alert('Error', 'Failed to create user');
    }
    try {
      dispatch(uploadUser({ displayName, email }));
    } catch (error) {
      Alert.alert('Error', 'Failed to upload user data to Firestore');
    }
  };

  return {
    displayName,
    setDisplayName,
    email,
    setEmail,
    password,
    setPassword,
    isChecked,
    setIsChecked,
    handleCreateUser,
  };
};
