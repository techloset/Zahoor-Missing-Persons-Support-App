import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors, Units } from '../../constants/constants';
import { FormData } from '../../types/types';
import DetailsButton from '../detailsButton/DetailsButton';

type CardProps = {
  data: FormData;
  onPress: () => void;
};

const Card = ({ data, onPress }: CardProps) => {
  const { imageUrl, name, dateOfBirth, lastSeen, lastSeenLocation } = data;

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.missingText}>missing</Text>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.text}>Name: {name} </Text>
          <Text style={styles.text}>
            Age:{' '}
            {String(dateOfBirth).split('T')[0] &&
            String(dateOfBirth).split('T')[0].length > 12
              ? `${String(dateOfBirth).split('T')[0].slice(0, 12)}...`
              : String(dateOfBirth).split('T')[0]}{' '}
            Years
          </Text>
          <Text style={styles.text}>
            Last Seen:{' '}
            {String(lastSeen).split('T')[0] &&
            String(lastSeen).split('T')[0].length > 12
              ? `${String(lastSeen).split('T')[0].slice(0, 12)}...`
              : String(lastSeen).split('T')[0]}
          </Text>
          <Text style={styles.text}>
            Last Seen Location: {lastSeenLocation}
          </Text>
        </View>
        <DetailsButton title="View Details" onPress={onPress} />
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
  },
  text: {
    color: Colors.WHITE_COLOR,
    fontSize: 11,
    lineHeight: 13.2,
    fontWeight: '400',
  },
});

export default Card;
