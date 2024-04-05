import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../../constants/Constants';

interface CheckboxProps {
  checked: boolean;
  size: 'sm' | 'md' | 'lg';
  state: 'Normal' | 'Hover' | 'Active';
  onPress: () => void;
}

const CheckBoxInputComponent: React.FC<CheckboxProps> = ({
  checked,
  size,
  state,
  onPress,
}) => {
  const checkboxStyle = [
    styles.checkbox,
    size === 'sm' && styles.checkboxSm,
    size === 'md' && styles.checkboxMd,
    size === 'lg' && styles.checkboxLg,
    state === 'Hover' && styles.checkboxHover,
    checked && styles.checkboxChecked,
  ];

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={checkboxStyle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 3,
  },
  checkboxSm: {
    width: 16,
    height: 16,
  },
  checkboxMd: {
    width: 20,
    height: 20,
  },
  checkboxLg: {
    width: 24,
    height: 24,
  },
  checkboxHover: {
    borderColor: Colors.SECONDARY_COLOR,
  },
  checkboxChecked: {
    ,
  },
});

export default CheckBoxInputComponent;
