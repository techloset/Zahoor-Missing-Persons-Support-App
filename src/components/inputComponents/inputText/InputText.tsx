/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Colors, Images, Units } from '../../../constants/Constants';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { InputComponentsProps } from '../../../types/types';

const TextInputComponent = ({
  icon,
  name,
  value,
  onChangeText,
  placeholderText,
  validationText,
  security,
  keyboardType,
}: InputComponentsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.name}>{name}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {icon && (
            <View
              style={{
                marginRight: -Units.WINDOW_WIDTH * 0.06,
                marginTop: -Units.WINDOW_HEIGHT * 0.0062,
                height: Units.WINDOW_HEIGHT * 0.0246,
                width: Units.WINDOW_WIDTH * 0.0533,
              }}
            >
              <Image source={Images.MAIL_ICON} style={styles.image} />
            </View>
          )}
          <TextInput
            style={[
              styles.input,
              { paddingLeft: icon ? Units.WINDOW_WIDTH * 0.112 : 14 },
            ]}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholderText}
            placeholderTextColor={Colors.FADED_SECONDARY_COLOR}
            secureTextEntry={security}
            keyboardType={keyboardType}
          />
        </View>
        {validationText && (
          <Text style={styles.textStyle}>{validationText}</Text>
        )}
      </View>
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 'auto',
    paddingVertical: Units.WINDOW_HEIGHT * 0.0123,
    paddingRight: Units.WINDOW_WIDTH * 0.0373,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.BORDER_COLOR,
    marginBottom: Units.WINDOW_HEIGHT * 0.0098,
    color: Colors.SECONDARY_COLOR,
  },
  name: {
    color: Colors.SECONDARY_COLOR,
    width: 'auto',
    height: Units.WINDOW_HEIGHT * 0.0246,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: Units.WINDOW_HEIGHT * 0.0246,
    letterSpacing: 0,
    textAlign: 'left',
  },
  container: {
    width: '100%',
    height: 'auto',
  },
  inputContainer: {
    width: Units.WINDOW_WIDTH * 0.8213,
    height: 'auto',
    marginBottom: Units.WINDOW_HEIGHT * 0.0074,
  },
  image: {
    width: Units.WINDOW_WIDTH * 0.0445,
    height: Units.WINDOW_HEIGHT * 0.0163,
    top: Units.WINDOW_HEIGHT * 0.0041,
    left: Units.WINDOW_WIDTH * 0.03,
    borderWidth: Units.WINDOW_WIDTH * 0.0045,
  },
  textStyle: {
    width: Units.WINDOW_WIDTH * 0.8213,
    height: Units.WINDOW_HEIGHT * 0.0246,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: Units.WINDOW_HEIGHT * 0.0246,
    letterSpacing: 0,
    textAlign: 'left',
  },
});
