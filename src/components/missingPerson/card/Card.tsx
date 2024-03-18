/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image } from 'react-native';
import React from 'react';
import { Colors } from '../../../constants/Constants';

const Card = () => {
  return (
    <View
      style={{
        height: 304,
        width: 213,
        borderRadius: 8,
        overflow: 'hidden',
        marginRight: 18,
      }}
    >
      <Text
        style={{
          color: Colors.WHITE_COLOR,
          backgroundColor: Colors.ERROR_COLOR,
          height: 44,
          fontSize: 32,
          textAlign: 'center',
        }}
      >
        MISSING
      </Text>
      <View>
        <Image source={require('../../../assets/images/HeroImage.png')} />
      </View>
    </View>
  );
};

export default Card;
