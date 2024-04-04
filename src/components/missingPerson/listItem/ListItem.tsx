import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { Colors, Images, Units } from '../../../constants/Constants';

const ListItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Images.MISSING_PERSON} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.text}>Name: </Text>
          <Text style={styles.text}>Age: </Text>
          <Text style={styles.text}>Last Seen: </Text>
          <Text style={styles.text}>Last Seen Location: </Text>
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Details</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Units.WINDOW_HEIGHT * 0.1893,
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
  button: {
    backgroundColor: Colors.PRIMARY_COLOR,
    width: Units.WINDOW_WIDTH * 0.248,
    height: Units.WINDOW_HEIGHT * 0.0296,
    marginBottom: Units.WINDOW_HEIGHT * 0.0123,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.WHITE_COLOR,
  },
});

export default ListItem;
