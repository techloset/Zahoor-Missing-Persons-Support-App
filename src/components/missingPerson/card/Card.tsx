import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Colors, Images, Units } from '../../../constants/Constants';
import DetailsButton from '../../detailsButton/DetailsButton';

const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.missingText}>MISSING</Text>
      <View style={styles.imageContainer}>
        <Image source={Images.HERO_IMAGE} />
      </View>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.text}>Name: </Text>
          <Text style={styles.text}>Age: </Text>
          <Text style={styles.text}>Last Seen: </Text>
          <Text style={styles.text}>Last Seen Location: </Text>
        </View>
        <DetailsButton title="Details" onPress={() => {}} />
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
    position: 'relative',
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
  infoContainer: {
    height: 88,
    minWidth: 152,
    position: 'absolute',
    bottom: 50,
    left: 16,
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 12,
  },
  text: {
    color: Colors.WHITE_COLOR,
    fontSize: 11,
    lineHeight: 13.2,
    fontWeight: '400',
  },
});

export default Card;
