/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image } from 'react-native';
import React from 'react';
import { Colors, Images, Units } from '../../../constants/Constants';
import TextInputComponent from '../../../components/inputComponents/inputText/InputText';
import Button from '../../../components/inputComponents/button/Button';
import { useAppDispatch } from '../../../redux/hooks';
import { signOut } from '../../../redux/slices/authActions';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const signoutHandler = () => {
    dispatch(signOut()); // Dispatch the sign-out action
  };
  return (
    <View
      style={{
        backgroundColor: Colors.WHITE_COLOR,
        height: Units.WINDOW_HEIGHT,
        width: Units.WINDOW_WIDTH,
      }}
    >
      <View
        style={{
          height: 35,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 26,
          marginVertical: 30,
        }}
      >
        <Images.BACKSPACE_ICON
          height={25}
          width={25}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            color: Colors.SECONDARY_COLOR,
            fontSize: 24,
            fontWeight: '700',
          }}
        >
          Edit Profile
        </Text>
        <Images.LOGOUT_ICON height={25} width={25} onPress={signoutHandler} />
      </View>
      <View style={{ alignItems: 'center', flexDirection: 'column', gap: 69 }}>
        <View style={{ position: 'relative' }}>
          <Image
            source={Images.MISSING_PERSON}
            style={{ height: 125, width: 125, borderRadius: 100 }}
          />
          <Images.EDIT_ICON
            height={25}
            width={25}
            style={{ position: 'absolute', bottom: 5, right: 5 }}
          />
        </View>
        <View
          style={{
            // flexDirection: 'column',
            gap: 24,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
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
      <View style={{ alignItems: 'center', marginTop: 190 }}>
        <Button titleText="Save Changes" onPressLearnMore={() => {}} />
      </View>
    </View>
  );
};

export default Profile;
