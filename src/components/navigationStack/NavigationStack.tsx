import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Colors, Images, Units } from '../../constants/Constants';
import NavigationPress from '../navigationPress/NavigationPress';
import HomeIndicator from '../homeIndicator/HomeIndicator';
// import { useNavigation } from '@react-navigation/native';
// import Upload from '../../screens/Upload/Upload';
// {
//   /* <Upload */
// }
// const navigation = useNavigation();
// onPress: () => navigation.navigate('Upload'),
const NavigationStack = () => {
  const data = [
    { iconName: 'HOME_ICON', height: 26, width: 21, title: 'Home' },
    { iconName: 'REPORTS_ICON', height: 26, width: 23, title: 'Reports' },
    {
      iconName: 'PLUS_CIRCLE_ICON',
      height: 26,
      width: 18,
      title: 'Upload',
    },
    { iconName: 'PROFILE_ICON', height: 26, width: 18, title: 'Profile' },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.navigationContainer}>
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

const styles = StyleSheet.create({
  container: {
    width: Units.WINDOW_WIDTH,
    height: 106,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10,
    paddingTop: 17,
    ,
  },
  navigationContainer: {
    width: 277,
    height: 62,
    paddingVertical: 8,
    paddingHorizontal: 26,
    borderRadius: 42,
    borderWidth: 2,
    flexDirection: 'row',
    gap: 28,
    borderColor: Colors.SECONDARY_COLOR,
    ,
  },
});
