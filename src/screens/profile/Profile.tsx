/* eslint-disable curly */
import { View, Text, Image, Alert, Platform, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Images } from '../../constants/constants';
import InputText from '../../components/inputText/InputText';
import Button from '../../components/button/Button';
import { useNavigation } from '@react-navigation/native';
import { signoutUser } from '../../store/slices/authSlice';
import { useAppDispatch } from '../../store/store';
import imagePicker from '../../utils/imagePicker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { styles } from './styles';
import auth from '@react-native-firebase/auth';
import { User } from '../../types/types';

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const currentUser = auth().currentUser;
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [userProfile, setUserProfile] = useState<User | null>(null);
  const [userDocId, setUserDocId] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserData();
      setUserProfile(userData);
      setDisplayName(userData?.displayName || '');
      setUserDocId(userData?.id || '');
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signoutHandler = () => {
    dispatch(signoutUser());
  };

  const getUserData = async () => {
    if (!currentUser) return null;
    const userData = await firestore()
      .collection('Users')
      .where('email', '==', currentUser.email)
      .get();
    if (userData.empty) return null;
    const userDoc = userData.docs[0];
    return { ...userDoc.data(), id: userDoc.id } as User;
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
      if (!currentUser) return;

      const uploadUri =
        Platform.OS === 'android'
          ? selectedImage
          : selectedImage.replace('file://', '');
      const storageRef = storage().ref(
        `userImages/${currentUser.uid}/${Date.now()}`,
      );
      const task = storageRef.putFile(uploadUri);
      task.on(
        'state_changed',
        () => {},
        async error => {
          console.error('Error uploading image:', error);
          Alert.alert('Error', 'Failed to update profile');
        },
        async () => {
          const downloadURL = await storageRef.getDownloadURL();

          await firestore().collection('Users').doc(userDocId).update({
            displayName,
            photoURL: downloadURL,
          });

          Alert.alert('Success', 'Profile updated successfully');
        },
      );
    } catch (error) {
      console.error('Error updating profile:', error);
      Alert.alert('Error', 'Failed to update profile');
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
          titleText="Save Changes"
          onPressLearnMore={() => userUpdateHandler()}
        />
      </View>
    </ScrollView>
  );
};

export default Profile;
