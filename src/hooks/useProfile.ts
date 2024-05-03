import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../store/store';
import { useEffect, useState } from 'react';
import {
  fetchUserProfile,
  updateUserProfile,
} from '../store/slices/firestoreSlice';
import { signoutUser } from '../store/slices/authSlice';
import imagePicker from '../utils/imagePicker';
import { Alert } from 'react-native';

export default function useProfile() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const userProfile = useAppSelector(state => state.firestore.userProfile);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (userProfile) {
      setDisplayName(userProfile.displayName || '');
    }
  }, [userProfile]);

  const signoutHandler = () => {
    dispatch(signoutUser());
  };

  const handleImagePicker = async () => {
    try {
      await imagePicker(setSelectedImage);
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  const userUpdateHandler = async () => {
    try {
      setLoading(true);
      await dispatch(updateUserProfile({ displayName, selectedImage }));
      Alert.alert('Success', 'Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      Alert.alert('Error', 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };
  return {
    signoutHandler,
    handleImagePicker,
    userUpdateHandler,
    displayName,
    setDisplayName,
    selectedImage,
    setSelectedImage,
    loading,
    navigation,
    userProfile,
  };
}
