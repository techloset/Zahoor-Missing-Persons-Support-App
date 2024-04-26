/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable curly */
import { View, Text, Image, Alert, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import InputText from '../../components/inputText/InputText';
import Button from '../../components/button/Button';
import { useNavigation } from '@react-navigation/native';
import { signoutUser } from '../../store/slices/authSlice';
import { useAppDispatch } from '../../store/store';
import imagePicker from '../../utils/imagePicker';
import { updateUserProfile } from '../../store/slices/firestoreSlice';
import { styles } from './styles';
import auth from '@react-native-firebase/auth';
import { User } from '../../types/types';
import { Images } from '../../constants/constants';
import firestore from '@react-native-firebase/firestore';

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const currentUser = auth().currentUser;
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [userProfile, setUserProfile] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserData();
      setUserProfile(userData);
      setDisplayName(userData?.displayName || '');
    };
    fetchData();
  }, []);

  const signoutHandler = () => {
    dispatch(signoutUser());
  };

  const getUserData = async () => {
    if (!currentUser) return null;
    const userData = await firestore()
      .collection('Users')
      .doc(currentUser.uid)
      .get();
    if (!userData.exists) return null;
    return { ...userData.data(), id: userData.id } as User;
  };

  const handleImagePicker = async () => {
    try {
      await imagePicker(setSelectedImage);
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  const [loading, setLoading] = useState<boolean>(false);

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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Images.BACKSPACE_ICON
          height={25}
          width={25}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerText}>Edit Profile</Text>
        <Images.LOGOUT_ICON height={25} width={25} onPress={signoutHandler} />
      </View>
      <View style={styles.content}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: selectedImage || userProfile?.photoURL }}
            style={styles.profileImage}
          />
          <Images.EDIT_ICON
            height={25}
            width={25}
            style={styles.editIcon}
            onPress={handleImagePicker}
          />
        </View>
        <View style={styles.inputsContainer}>
          <InputText
            placeholderText="Name"
            value={displayName}
            onChangeText={setDisplayName}
            icon={false}
            keyboardType="default"
            name="Name"
          />
          <InputText
            placeholderText="Email"
            value={userProfile?.email || ''}
            onChangeText={() => {}}
            icon={true}
            keyboardType="email-address"
            name="Email"
            editable={false}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          titleText={loading ? 'Updating...' : 'Update Profile'}
          onPressLearnMore={userUpdateHandler}
        />
      </View>
    </ScrollView>
  );
};

export default Profile;
