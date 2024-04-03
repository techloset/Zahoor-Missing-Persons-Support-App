import { View, Text } from 'react-native';
import React from 'react';
import { Colors, Images, Units } from '../../../constants/Constants';

const EditProfile = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.WHITE_COLOR,
        height: Units.WINDOW_HEIGHT,
        width: Units.WINDOW_WIDTH,
      }}
    >
      <Images.LOGO />
      <Text>EditProfile</Text>
    </View>
  );
};

export default EditProfile;
