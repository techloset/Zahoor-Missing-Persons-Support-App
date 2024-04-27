import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import InputText from '../../components/inputText/InputText';
import Button from '../../components/button/Button';
import { styles } from './styles';
import { Images } from '../../constants/constants';
import useProfile from '../../hooks/useProfile';

const Profile = () => {
  const {
    signoutHandler,
    handleImagePicker,
    userUpdateHandler,
    displayName,
    setDisplayName,
    selectedImage,
    loading,
    navigation,
    userProfile,
  } = useProfile();

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
