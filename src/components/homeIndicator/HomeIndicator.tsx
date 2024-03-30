import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Colors, Units } from '../../constants/Constants';

const HomeIndicator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.indicator} />
    </View>
  );
};

export default HomeIndicator;

const styles = StyleSheet.create({
  container: {
    width: Units.WINDOW_WIDTH,
    height: 34,
    alignItems: 'center',
  },
  indicator: {
    width: 134,
    height: 5,
    borderRadius: 10,
    top: 21,
    bottom: 8,
    backgroundColor: Colors.SECONDARY_COLOR,
  },
});
