import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Colors, Fonts, Units } from '../../constants/constants';
import DetailsButton from '../detailsButton/DetailsButton';
import { ListItemProps } from '../../types/types';
import { calculateAge, formatDate } from '../../utils/formateDate';

const ListItem = ({ data, onPress }: ListItemProps) => {
  const age = calculateAge(data?.dateOfBirth.toDate());
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: data.imageUrl }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.text}>
            Name:{' '}
            {data.name && data.name.length > 18
              ? `${data.name.slice(0, 12)}...`
              : data.name}
          </Text>
          <Text style={styles.text}>Age: {age} Years</Text>
          <Text style={styles.text}>
            Last Seen: {formatDate(data?.lastSeen)}
          </Text>
          <Text style={styles.text}>
            Last Seen Location:{' '}
            {data.lastSeenLocation && data.lastSeenLocation.length > 18
              ? `${data.lastSeenLocation.slice(0, 25)}...`
              : data.lastSeenLocation}
          </Text>
        </View>
        <DetailsButton title="Details" onPress={onPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    minHeight: Units.WINDOW_HEIGHT * 0.1893,
    width: Units.WINDOW_WIDTH * 0.8907,
    gap: Units.WINDOW_WIDTH * 0.0213,
    marginBottom: Units.WINDOW_HEIGHT * 0.0197,
  },
  imageContainer: {
    height: Units.WINDOW_HEIGHT * 0.1893,
    width: Units.WINDOW_WIDTH * 0.3067,
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    height: Units.WINDOW_HEIGHT * 0.1893,
    width: Units.WINDOW_WIDTH * 0.3067,
  },
  detailsContainer: {
    height: Units.WINDOW_HEIGHT * 0.1622,
    flex: 1,
    justifyContent: 'space-between',
    gap: Units.WINDOW_HEIGHT * 0.0148,
  },
  text: {
    color: Colors.SECONDARY_COLOR,
    lineHeight: Units.WINDOW_HEIGHT * 0.0296,
    fontSize: 16,
    fontWeight: '400',
    fontFamily: Fonts.PRIMARY_FONT,
  },
});

export default ListItem;
