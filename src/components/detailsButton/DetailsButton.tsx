/* eslint-disable react-native/no-inline-styles */
import { Pressable, Text } from 'react-native';
import React from 'react';
import { Colors, Units } from '../../constants/Constants';

type DetailsButtonProps = {
  onPress: () => void;
  title: string;
};

const DetailsButton = ({ onPress, title }: DetailsButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: Colors.PRIMARY_COLOR,
        borderRadius: 8,
        minWidth: 78,
        maxWidth: 101,
        height: Units.WINDOW_HEIGHT * 0.0296,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          color: Colors.SUBMIT_BUTTON_TEXT,
          fontSize: 11,
          fontWeight: '400',
          lineHeight: 13.2,
          textAlign: 'center',
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default DetailsButton;
