/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors, Fonts, Images, Units } from '../../constants/constants';
import { CardProps } from '../../types/types';
import DetailsButton from '../detailsButton/DetailsButton';
import { calculateAge, formatDate } from '../../utils/formateDate';

const Card = ({ data, onPress }: CardProps) => {
  const { imageUrl, name, dateOfBirth, lastSeen, lastSeenLocation } = data;
  const age = calculateAge(dateOfBirth.toDate());
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.missingText}>MISSING</Text>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.text}>Name: {name} </Text>
          <Text style={styles.text}>Age: {age} Years</Text>
          <Text style={styles.text}>
            Last Seen: {formatDate(lastSeen) ? formatDate(lastSeen) : ' '}
          </Text>
          <Text style={styles.text}>
            Last Seen Location: {lastSeenLocation}
          </Text>
        </View>
        <DetailsButton title="View Details" onPress={onPress} />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <Images.GRADIENT_IMAGE
          style={{
            width: '100%',
            height: '100%',
          }}
        />
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
    fontFamily: 'FamiljenGrotest',
  },
  imageContainer: {
    borderRadius: 8,
    flex: 1,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
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
    zIndex: 1,
  },
  text: {
    color: Colors.WHITE_COLOR,
    fontSize: 11,
    lineHeight: 13.2,
    fontWeight: '400',
    fontFamily: Fonts.PRIMARY_FONT,
  },
});

export default Card;
