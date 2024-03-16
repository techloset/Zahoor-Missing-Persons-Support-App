/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Constants';

const HomeIndicator = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 34,
        alignItems: 'center',
        backgroundColor: Colors.WHITE_COLOR,
      }}
    >
      <View
        style={{
          width: 134,
          height: 5,
          borderRadius: 10,
          top: 21,
          backgroundColor: Colors.SECONDARY_COLOR,
        }}
      />
    </View>
  );
};

export default HomeIndicator;
