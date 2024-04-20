import { View, Text, Image } from 'react-native';
import React from 'react';
import { Images } from '../../constants/constants';
import TextInputComponent from '../../components/inputText/InputText';
import Button from '../../components/button/Button';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { signoutUser } from '../../store/slices/authSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import imagePicker from '../../utils/imagePicker';
import auth from '@react-native-firebase/auth';
import { User } from '../../types/types';
const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [selectedImage, setSelectedImage] = React.useState<string>('');
  const signoutHandler = () => {
    dispatch(signoutUser());
  };
  // const selector = useAppSelector(state => state.auth.user);
  const selector = auth().currentUser;

  const handleImagePicker = async () => {
    try {
      await imagePicker(setSelectedImage);
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  return (
    <View style={styles.container}>
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
          <Image source={{ uri: selectedImage }} style={styles.profileImage} />
          <Images.EDIT_ICON
            height={25}
            width={25}
            style={styles.editIcon}
            onPress={() => handleImagePicker()}
          />
        </View>
        <View style={styles.inputsContainer}>
          <TextInputComponent
            placeholderText="Name"
            value={selector?.displayName || ''}
            onChangeText={() => {}}
            icon={false}
            keyboardType="default"
            name="Name"
          />
          <TextInputComponent
            placeholderText="Email"
            value={selector?.email || ''}
            onChangeText={() => {}}
            icon={true}
            keyboardType="email-address"
            name="Email"
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button titleText="Save Changes" onPressLearnMore={() => {}} />
      </View>
    </View>
  );
};

export default Profile;
