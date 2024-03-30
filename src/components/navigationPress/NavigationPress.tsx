import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Constants';
import { FC } from 'react';
import { SvgProps } from 'react-native-svg';

interface NavigationPressProps {
  icon: FC<SvgProps>;
  title: string;
  height: number;
  width: number;
}

const NavigationPress = ({
  icon: IconComponent,
  title,
  height,
  width,
}: NavigationPressProps) => {
  return (
    <View style={styles.container}>
      <View style={{ height: height, width: width }}>
        <IconComponent width={width} height={height} />
      </View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default NavigationPress;

const styles = StyleSheet.create({
  container: {
    height: 46,
    alignItems: 'center',
  },
  text: {
    color: Colors.SECONDARY_COLOR,
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 20,
    fontWeight: '400',
  },
});
