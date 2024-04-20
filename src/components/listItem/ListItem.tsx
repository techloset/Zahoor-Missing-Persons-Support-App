import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Colors, Images, Units } from '../../constants/constants';
import DetailsButton from '../detailsButton/DetailsButton';
import { FormData } from '../../types/types';

interface ListItemProps {
  data: FormData;
  onPress: () => void;
}

const ListItem = ({ data, onPress }: ListItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={
            data.imageUrl ? { uri: data.imageUrl } : Images.MISSING_PERSON
          }
          style={styles.image}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.text}>
            Name:{' '}
            {data.name && data.name.length > 18
              ? `${data.name.slice(0, 12)}...`
              : data.name}
          </Text>
          <Text style={styles.text}>
            Age:{' '}
            {String(data.dateOfBirth).split('T')[0] &&
            String(data.dateOfBirth).split('T')[0].length > 12
              ? `${String(data.dateOfBirth).split('T')[0].slice(0, 12)}...`
              : String(data.dateOfBirth).split('T')[0]}{' '}
            Years
          </Text>
          <Text style={styles.text}>
            Last Seen:{' '}
            {String(data.lastSeen).split('T')[0] &&
            String(data.lastSeen).split('T')[0].length > 12
              ? `${String(data.lastSeen).split('T')[0].slice(0, 12)}...`
              : String(data.lastSeen).split('T')[0]}
          </Text>
          <Text style={styles.text}>
            Last Seen Location: {data.lastSeenLocation}
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
    fontSize: Units.WINDOW_WIDTH * 0.0427,
    fontWeight: '400',
  },
});

export default ListItem;
