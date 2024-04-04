import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Colors, Units } from '../../../constants/Constants';

const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.missingText}>MISSING</Text>
      <View style={styles.imageContainer}>
        <Image source={require('../../../assets/images/HeroImage.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: Units.WINDOW_HEIGHT * 0.3744,
    width: Units.WINDOW_WIDTH * 0.568,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: Units.WINDOW_WIDTH * 0.048,
  },
  missingText: {
    color: Colors.WHITE_COLOR,
    backgroundColor: Colors.ERROR_COLOR,
    height: Units.WINDOW_HEIGHT * 0.0541,
    fontSize: 32,
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
  },
});

export default Card;
