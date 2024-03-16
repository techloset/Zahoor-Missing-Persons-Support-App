/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Constants';

const NavigationStack = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 62,
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <View
        style={{
          width: 277,
          height: 62,
          paddingVertical: 8,
          paddingHorizontal: 26,
          borderRadius: 42,
          borderWidth: 2,
          borderColor: Colors.SECONDARY_COLOR,
        }}
      >
        <Text style={{ color: Colors.SECONDARY_COLOR }}>NavigationStack</Text>
      </View>
    </View>
  );
};

export default NavigationStack;
