import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Colors, Units } from '../../constants/constants';
import DetailsButton from '../detailsButton/DetailsButton';

type CardProps = {
  imageUrl: string;
  name: string;
  age: number;
  lastSeen: string;
  lastSeenLocation: string;
  onPress: () => void; // Added prop for onPress
};

const Card = ({
  // imageUrl,
  name,
  age,
  lastSeen,
  lastSeenLocation,
  onPress,
}: CardProps) => {
  return (
    <Pressable onPress={onPress} style={{ height: Units.WINDOW_HEIGHT }}>
      <View style={styles.cardContainer}>
        <Text style={styles.missingText}>MISSING</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/MissingPerson.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.text}>Name: {name} </Text>
            <Text style={styles.text}>Age: {age}</Text>
            <Text style={styles.text}>Last Seen: {lastSeen}</Text>
            <Text style={styles.text}>
              Last Seen Location: {lastSeenLocation}
            </Text>
          </View>
          <DetailsButton title="View Details" onPress={onPress} />
        </View>
      </View>
    </Pressable>
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
