/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import React from 'react';
import { Colors, Images } from '../../constants/Constants';
import NavigationPress from '../navigationPress/NavigationPress';
import HomeIndicator from '../homeIndicator/HomeIndicator';

const NavigationStack = () => {
  const data = [
    { iconName: 'HOME_ICON', height: 26, width: 21, title: 'Home' },
    { iconName: 'REPORTS_ICON', height: 26, width: 23, title: 'Reports' },
    { iconName: 'PLUS_CIRCLE_ICON', height: 26, width: 18, title: 'Upload' },
    { iconName: 'PROFILE_ICON', height: 26, width: 18, title: 'Profile' },
  ];
  return (
    <View
      style={{
        width: '100%',
        height: 62,
        justifyContent: 'center',
        alignItems: 'center',
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
          flexDirection: 'row',
          gap: 28,
          backgroundColor: Colors.WHITE_COLOR,
        }}
      >
        {data.map((item, index) => {
          return (
            <NavigationPress
              key={index}
              icon={Images[item.iconName as keyof typeof Images]}
              title={item.title}
              height={item.height}
              width={item.width}
            />
          );
        })}
      </View>
      <HomeIndicator />
    </View>
  );
};

export default NavigationStack;
