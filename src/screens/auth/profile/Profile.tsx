/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';
import { Colors, Images, Units } from '../../../constants/Constants';
import Modal from '../../../components/modal/Modal';

const Profile = () => {
  return (
    // <View
    //   style={{
    //     backgroundColor: Colors.WHITE_COLOR,
    //     height: Units.WINDOW_HEIGHT,
    //     width: Units.WINDOW_WIDTH,
    //   }}
    // >
    //   <View>
    //     <Images.LOGOUT_ICON
    //       height={25}
    //       width={25}
    //       style={{ position: 'absolute', top: 0, right: 10, zIndex: 1 }}
    //     />
    //   </View>
    //   <Images.LOGO />
    //   <Text>Profile</Text>
    // </View>
    <Modal />
  );
};

export default Profile;
