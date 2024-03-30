import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { Colors } from '../../../constants/Constants';

type ButtonProps = {
  onPressLearnMore: () => void;
  titleText: string;
  accessibilityLabelText?: string;
};

const Button: React.FC<ButtonProps> = ({ onPressLearnMore, titleText }) => {
  return (
    <Pressable onPress={onPressLearnMore} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{titleText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 308,
    height: 'auto',
    paddingVertical: 12,
    // paddingHorizontal: 16,
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
