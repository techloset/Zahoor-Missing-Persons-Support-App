/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
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
    <View style={{ height: 46, alignItems: 'center' }}>
      <View style={{ height: height, width: width }}>
        <IconComponent width={width} height={height} />
      </View>
      <Text
        style={{
          color: Colors.SECONDARY_COLOR,
          fontSize: 12,
          textAlign: 'center',
          lineHeight: 20,
          fontWeight: '400',
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default NavigationPress;
