/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Colors, Images } from '../../../constants/Constants';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

type InputComponentsProps = {
  icon: boolean;
  name: string;
  value: string;
  validationText?: string;
  onChangeText: (text: string) => void;
  placeholderText: string;
  security?: boolean;
  keyboardType:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
};

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
                marginRight: -34,
                marginTop: -5,
                height: 20,
                width: 20,
              }}
            >
              <Image source={Images.MAIL_ICON} style={styles.image} />
            </View>
          )}
          <TextInput
            style={[styles.input, { paddingLeft: icon ? 42 : 14 }]}
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
    paddingVertical: 10,

    paddingRight: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.BORDER_COLOR,
    marginBottom: 8,
    color: Colors.SECONDARY_COLOR,
  },
  name: {
    color: Colors.SECONDARY_COLOR,
    width: 'auto',
    height: 20,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'left',
  },
  container: {
    width: '100%',
    height: 'auto',
  },
  inputContainer: {
    width: 308,
    height: 'auto',
    marginBottom: 6,
  },
  image: {
    width: 16.67,
    height: 13.33,
    top: 3.33,
    left: 1.67,
    borderWidth: 1.67,
  },
  textStyle: {
    width: 308,
    height: 20,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'left',
  },
});
