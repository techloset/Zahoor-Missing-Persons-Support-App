import { View, Text, Image } from 'react-native';
import React from 'react';
import { Images } from '../../constants/constants';
import TextInputComponent from '../../components/inputText/InputText';
import Button from '../../components/button/Button';
import { useAppDispatch } from '../../store/store';
import { signOut } from '../../store/slices/authActions';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const signoutHandler = () => {
    dispatch(signOut());
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
          <Image source={Images.MISSING_PERSON} style={styles.profileImage} />
          <Images.EDIT_ICON height={25} width={25} style={styles.editIcon} />
        </View>
        <View style={styles.inputsContainer}>
          <TextInputComponent
            placeholderText="Name"
            value=""
            onChangeText={() => {}}
            icon={false}
            keyboardType="default"
            name="Name"
          />
          <TextInputComponent
            placeholderText="Email"
            value=""
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
