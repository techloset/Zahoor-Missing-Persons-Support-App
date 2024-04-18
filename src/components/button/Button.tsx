import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { Colors, Units } from '../../constants/constants';
import { ButtonProps } from '../../types/types';

const Button: React.FC<ButtonProps> = ({ onPressLearnMore, titleText }) => {
  return (
    <Pressable onPress={onPressLearnMore} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{titleText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: Units.WINDOW_WIDTH * 0.8933,
    height: 'auto',
    paddingVertical: Units.WINDOW_HEIGHT * 0.0148,
    borderRadius: 8,
    backgroundColor: Colors.PRIMARY_COLOR,
  },
  buttonText: {
    fontSize: 23,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.WHITE_COLOR,
  },
});

export default Button;
